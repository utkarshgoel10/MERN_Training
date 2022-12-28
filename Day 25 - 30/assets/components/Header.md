# Header
## import files
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
# Snippet
```
<Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Container>
          <Navbar.Brand href="/">Note Locker</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Form inline="true">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Form>
            </Nav>
            <Nav>
              <>
                <Nav.Link href="/mynotes">My Notes</Nav.Link>
                <NavDropdown title="Utkarsh" id="collasible-nav-dropdown">                  
                    My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item>Logout</NavDropdown.Item>
                </NavDropdown>
              </>

              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
```
