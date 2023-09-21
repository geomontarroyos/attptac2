import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
    const [lista, setLista] = useState([]);
    const [autor, setAutor] = useState("");
    const [livro, setLivro] = useState("");
    const [genero, setGenero] = useState("");
  
    const salvar = (e) => {
      e.preventDefault();
      setLista([
        ...lista,
        {
          autor: autor,
          genero: genero,
          livro: livro,
        },
      ]);
      setId(id + 1);
    };
    const remover = (id) => {
      /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/
      const auxLista = [];
      lista.map((lista) => {
          if (lista.id !== id) {
              auxLista.push(lista);
          }
      });
      setLista(auxLista);
  }
  
    return (
      <div class="container">
      <Link to="/">home</Link>
      <h1>Lista de Autores</h1>
      <form onSubmit={salvar}>

         <h3>Digite seu autor a ser adicionado:</h3> <input type="text"
              value={autor}
              onChange={(e) => { setAutor(e.target.value) }} />

       <h3> Digite seu livro a ser adicionado:</h3><input type="text"
              value={livro}
              onChange={(e) => { setLivro(e.target.value) }} />

      <h3>Digite seu genero a ser adicionado:</h3><input type="text"
              value={genero}
              onChange={(e) => { setGenero(e.target.value) }} />

          <button>ADICIONAR</button>
      </form>

      {lista.map((ativ) =>
          <ul key={ativ.id}>
              <li>
                  Autor:<p>{ativ.autor}</p>
                  <button onClick={() => remover(ativ.id)}>Remover</button>
              </li>
              <li>
                  Livro:<p>{ativ.livro}</p>
                  <button onClick={() => remover(ativ.id)}>Remover</button>
              </li>
              <li>
                  Genero:<p>{ativ.genero}</p>
                  <button onClick={() => remover(ativ.set)}>Remover</button>
              </li>
          </ul>
      )}
  </div>
);
}