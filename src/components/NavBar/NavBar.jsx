import { useContext } from "react";
import { Container, ListGroup, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const NavBar = () => {
    const {user} = useContext(AuthContext);
    return (
        <Navbar bg="dark" className="mb-4" style={{ height: "3.75rem" }}>
            <Container>
                <h2>
                     <Link to='/' className="link-light text-decoration-none">Chat App</Link>
                </h2>
                <span className="text-warning">Welcome {user?.name.charAt(0).toUpperCase() + user.name.slice(1)}</span>
                <Nav>
                    <Stack direction="horizontal" gap={3}>
                        <Link to='/login' className="link-light text-decoration-none">Login</Link>
                        <Link to='/register' className="link-light text-decoration-none">Register</Link>
                        <Link to='/' className="link-light text-decoration-none"></Link>
                        <Link to='/' className="link-light text-decoration-none"></Link>
                    </Stack>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;