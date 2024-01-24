import { useContext } from "react";
import { Container, ListGroup, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const NavBar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    return (
        <Navbar bg="dark" className="mb-4" style={{ height: "3.75rem" }}>
            <Container>
                <h2>
                    <Link to='/' className="link-light text-decoration-none">Chat App</Link>
                </h2>

                {
                    user && (<>
                  <span className="text-warning">Welcome {user?.name && user.name.charAt(0).toUpperCase() + user.name.slice(1)}</span>

                    </>)
                }
                <Nav>
                    <Stack direction="horizontal" gap={3}>
                        {
                            user
                            ? (
                                <>
                                        <Link onClick={() => { logoutUser() }} to='/login' className="link-light text-decoration-none">Logout</Link>
                                    </>
                                )
                                
                                : (
                                    <>
                                        <Link to='/login' className="link-light text-decoration-none">Login</Link>
                                        <Link to='/register' className="link-light text-decoration-none">Register</Link>
                                    </>

                                )
                        }
                  
                    </Stack>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;