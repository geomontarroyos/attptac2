export default function Card({atividade}){
    return(
        <div>
            <h1>{atividade.autor}</h1>
            <h1>{atividade.livro}</h1>
            <h1>{atividade.genero}</h1>
        </div>
    );
}