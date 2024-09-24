import { Container, Nav, Navbar, NavbarBrand, NavbarToggle, NavLink } from "react-bootstrap";

export default function BarraNavegacao() {
    return(
        <>
 <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBrand href="#home">Copa Do Mundo</NavbarBrand>
          <Nav className="me-auto">
            <NavLink href="#home">Seleções</NavLink>
            <NavLink href="#features">Lista</NavLink>
            
          </Nav>
        </Container>
      </Navbar>
        
        </>
    )
}