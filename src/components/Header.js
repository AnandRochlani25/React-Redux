import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <h1>Redux Auth</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Courses</a>
                    </li>
                    <li>
                        <a href="/">Problems</a>
                    </li>
                    <li>
                        <button>Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
