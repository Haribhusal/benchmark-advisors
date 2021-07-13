

import Image from 'next/image'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const Header = () => {

  return <header className="px-3">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2">
          <div className="imagewrapper">
            <Image
              alt='Benchmark Advisors Logo'
              src="/images/logo.png"
              width={150}
              height={110}
              priority
            />
          </div>
        </div>
        <div className="col-sm-10 d-flex align-items-center">

          <Navbar bg="primary" expand="lg" className="w-100">

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Investors</Nav.Link>
                <Nav.Link href="#link">Incubators &amp; Accelerators</Nav.Link>
                <NavDropdown title="Free Documents" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Startups</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Investors</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Incubators &amp; Accelerators</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link href="#home" className="btn btn_p_dim rounded_big text_p">Get Investment</Nav.Link>
                <Nav.Link href="#link">Log in</Nav.Link>
                <Nav.Link href="#link">Sign up</Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>
        </div>
      </div>
    </div>
  </header>;
};

export default Header;
