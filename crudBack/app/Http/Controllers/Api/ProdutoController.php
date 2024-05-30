<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\Produto;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class ProdutoController extends Controller
{


    public function index(): JsonResponse
    {
        $produtos = Produto::All();
        return response()->json($produtos);
    }

    
    public function show(Produto $produto): JsonResponse
    {
        return response()->json($produtos);
    }

    
    public function store(UserRequest $request): JsonResponse
    {
        
        DB::beginTransaction();

        try {

            // TO DO: Alterar para produtos 
            $produto = Produtos::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password,
            ]);

            
            DB::commit();

            return response()->json([
                'status' => true,
                'produto' => $produto,
                'message' => "Usuário cadastrado com sucesso!",
            ], 201);
        } catch (Exception $e) {

            DB::rollBack();

            return response()->json([
                'status' => false,
                'message' => "Usuário não cadastrado!",
            ], 400);
        }
    }

    /**
     * Atualizar os dados de um usuário existente com base nos dados fornecidos na requisição.
     * 
     * @param  \App\Http\Requests\UserRequest  $request O objeto de requisição contendo os dados do usuário a ser atualizado.
     * @param  \App\Models\Produtos  $produto O usuário a ser atualizado.
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UserRequest $request, Produtos $produto): JsonResponse
    {

        // Iniciar a transação
        DB::beginTransaction();

        try {

            // Editar o registro no banco de dados
            $produto->update([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password,
            ]);

            // Operação é concluída com êxito
            DB::commit();

            // Retorna os dados do usuário editado e uma mensagem de sucesso com status 200
            return response()->json([
                'status' => true,
                'produto' => $produto,
                'message' => "Usuário editado com sucesso!",
            ], 200);
        } catch (Exception $e) {

            // Operação não é concluída com êxito
            DB::rollBack();

            // Retorna uma mensagem de erro com status 400
            return response()->json([
                'status' => false,
                'message' => "Usuário não editado!",
            ], 400);
        }
    }

    /**
     * Excluir usuário no banco de dados.
     * 
     * @param  \App\Models\Produtos  $produto O usuário a ser excluído.
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Produtos $produto): JsonResponse
    {
        try {

            // Apagar o registro no banco de dados
            $produto->delete();

            // Retorna os dados do usuário apagado e uma mensagem de sucesso com status 200
            return response()->json([
                'status' => true,
                'produto' => $produto,
                'message' => "Usuário apagado com sucesso!",
            ], 200);


        } catch (Exception $e) {
            // Retorna uma mensagem de erro com status 400
            return response()->json([
                'status' => false,
                'message' => "Usuário não apagado!",
            ], 400);
        }
    }
}
