import Link from "next/link";

const MainMenu = () => {
    return (
        <nav id="main-menu" className="main-menu">
                <span id="close-menu-button" className="jam jam-close"></span>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Inicio</a>
                        </Link>
                    </li>
                    <li>
                        <a href="/quienes-somos.html">¿Quiénes somos?</a>
                    </li>
                    <li>
                        <a href="/proyectos.html">Proyectos</a>
                    </li>
                    <li>
                        <a href="/contacto.html">Contacto</a>
                    </li>
                </ul>
        </nav>
    )
}

export default MainMenu;