interface PessoaProps {
    nome: String
    idade?: Number
}

export default function Pessoa(props: PessoaProps){
    return(
        <div>
            <>Nome: {props.nome}</>
            <>Idade: {props.idade ?? 'idade não informada'}</>
        </div>
    )
}