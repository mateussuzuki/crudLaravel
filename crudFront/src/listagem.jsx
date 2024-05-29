import React, { useState, useEffect } from "react";
import axios from "axios";

function ProdutosLista() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      codigo: "001",
      nome: "Produto Exemplo",
      descricao: "Esta é a descrição do produto exemplo.",
      imagem: "link_da_imagem_aqui",
    },
  ]);

  // const fetchProdutos = async () => {
  //   const response = await axios.get("");
  // };

  // useEffect(() => {
  //   fetchProdutos();
  // }, []);

  return (
    <div className="container-xl">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-8">
              <h2>
                <b>Produtos</b>
              </h2>
            </div>
            <div className="col-sm-4">
              <div className="search-box">
                <i className="material-icons">&#xE8B6;</i>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>
                Código <i className="fa fa-sort"></i>
              </th>
              <th>Nome</th>
              <th>
                Descrição <i className="fa fa-sort"></i>
              </th>
              <th>Imagem</th>
            </tr>
          </thead>

          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.codigo}</td>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.imagem}</td>
                <td>
                  <a
                    href="#"
                    className="view mx-1"
                    title="View"
                    data-toggle="tooltip"
                  >
                    <i className="material-icons">&#xE417;</i>
                  </a>
                  <a
                    href="#"
                    className="edit mx-1"
                    title="Edit"
                    data-toggle="tooltip"
                  >
                    <i className="material-icons">&#xE254;</i>
                  </a>
                  <a
                    href="#"
                    className="delete mx-1"
                    title="Delete"
                    data-toggle="tooltip"
                  >
                    <i className="material-icons">&#xE872;</i>
                  </a>
                </td>
              </tr>
            ))}

            {/* <tr>
                <td>1</td>
                <td>Thomas Hardy</td>
                <td>89 Chiaroscuro Rd.</td>
                <td>Portland</td>
                <td>97219</td>
                <td>
                  <a
                    href="#"
                    className="view"
                    title="View"
                    data-toggle="tooltip"
                  >
                    <i className="material-icons">&#xE417;</i>
                  </a>
                  <a
                    href="#"
                    className="edit"
                    title="Edit"
                    data-toggle="tooltip"
                  >
                    <i className="material-icons">&#xE254;</i>
                  </a>
                  <a
                    href="#"
                    className="delete"
                    title="Delete"
                    data-toggle="tooltip"
                  >
                    <i className="material-icons">&#xE872;</i>
                  </a>
                </td> */}
          </tbody>
        </table>
        <div className="clearfix">
          <div className="hint-text">
            Showing <b>5</b> out of <b>25</b> entries
          </div>
          <ul className="pagination">
            <li className="page-item disabled">
              <a href="#">
                <i className="fa fa-angle-double-left"></i>
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                1
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                2
              </a>
            </li>
            <li className="page-item active">
              <a href="#" className="page-link">
                3
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                4
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                5
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                <i className="fa fa-angle-double-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProdutosLista;
