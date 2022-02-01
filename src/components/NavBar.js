import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/cart'>shopping cart</Link>
        </nav>
    )
}

export default NavBar