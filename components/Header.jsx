import Link from "next/link";
import MainMenu from "./MainMenu";

const Header = () => {
    return (
        <header className="main-header">
            <div className="content-wrapper">
                <Link href="/">
                    <a>
                        <img src="/images/logo.svg" alt="Logo EDsoft" />
                    </a>
                </Link>
                <span id="open-menu-button" className="jam jam-menu"></span>
                <MainMenu />
            </div>
        </header>
    )
}

export default Header;