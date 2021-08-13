interface MenssagemProps{
    menssagem: string;
}

const Menssagem: React.FC <MenssagemProps> = (props :any)=>{
    return (
        <div>
            {props.menssagem}
        </div>
    )
}

const MeuComponente: React.FC = ()=>{
    return (
        <div>
            <Menssagem menssagem = "teste" />
        </div>
    )
}

export default MeuComponente;