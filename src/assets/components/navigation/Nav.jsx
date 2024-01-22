import { Link } from "react-router-dom";
const Nav = () => {
    return (<>


        <h3>Das is die nav bar</h3>
        <nav>
            <Link to="/"><button>Home</button></Link>
            <Link to="/blog"><button>Blog</button></Link>

        </nav>
    </>);
}

export default Nav;