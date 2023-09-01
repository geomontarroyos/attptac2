import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
    const [lista, setLista] = useState([]);
    const [atividade, setAtividade] = useState("");
  
    const salvar = (e) => {
      e.preventDefault();
      setLista([
        ...lista,
        {
          atividade: atividade,
        },
      ]);
      setId(id + 1);
    };
  
    return (
      <div>
        <h1>Lista de atividade</h1>
        <Link to="/"> home </Link>
        <form onSubmit={salvar}>
          <input value={atividade}
            onChange={(e) => setAtividade(e.target.value)}/>
  
          <button>ADD</button>
        </form>

        {lista.map((ativ) => <p>{ativ.atividade}</p>)}
          </div>
    );
    }