import Link from 'next/link'

export const Menu: React.FC = ()=>{
    return (
        <aside className=" column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">
                Minhas Vendas
            </p>
            <ul className="menu-list">
                <MenuItem href='/'label='Home' />

                <MenuItem href='/'label='Cadastrar' />

                <MenuItem href='/'label='Configurar' />
                
            </ul>
        </aside>
    )
}
interface MenuItensProps{
    href: string;
    label: string;
}

const MenuItem: React.FC <MenuItensProps> = (props)=>{
    return(
        <li>
            <Link href={props.href}>
                <a>
                    <span className="icon"> {props.label} </span>
                </a>
            </Link>
        </li>
    )
}