<?php

use App\Http\Controllers\Api\ProdutoController;
use Illuminate\Support\Facades\Route;

Route::get('/produtos', [ProdutoController::class, 'index']); 
Route::get('/produtos/{produto}', [ProdutoController::class, 'show']); 
Route::post('/produtos',[ProdutoController::class, 'store']);
Route::put('/produtos/{produto}',[ProdutoController::class, 'update']);
Route::delete('/produtos/{produto}',[ProdutoController::class, 'destroy']);