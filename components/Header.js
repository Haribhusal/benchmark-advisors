import Image from "next/image";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-3">
      <div className="headerWrapper">
        <Navbar bg="light" expand="sm">
          <Container fluid>
            <Link href="/" as="/" rel="preload">
              <Navbar.Brand style={{ cursor: "pointer" }}>
                <Image src={"/images/logo.png"} width={90} height={70} />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link href="/startups">
                  <Nav className="nav-link">Startups</Nav>
                </Link>
                <Link href="/investors">
                  <Nav className="nav-link">Investors</Nav>
                </Link>
                <Link href="/advisory-consulting">
                  <Nav className="nav-link">Services</Nav>
                </Link>

                <Link href="/faq">
                  <Nav className="nav-link">FAQ</Nav>
                </Link>
                <Nav.Link href="#link">Incubators &amp; Accelerators</Nav.Link>

                <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <Link href="/advisory-consulting">
                    <a className="dropdown-item">Advisory Consulting</a>
                  </Link>
                  <Link href="/investment-banker">
                    <a className="dropdown-item">Investment Banker</a>
                  </Link>
                  <Link href="/investor-profile">
                    <a className="dropdown-item">Investor Profile</a>
                  </Link>
                  <NavDropdown.Divider />
                  <Link href="/service-detail">
                    <a className="dropdown-item">Service Detail</a>
                  </Link>
                  <Link href="/social-public-sector">
                    <a className="dropdown-item">Social Public Sector</a>
                  </Link>

                  <Link href="/startup-info">
                    <a className="dropdown-item">Startup Information</a>
                  </Link>
                  <Link href="/startup">
                    <a className="dropdown-item">Single Startup</a>
                  </Link>
                  <Link href="/tech-startups">
                    <a className="dropdown-item">Tech Startups</a>
                  </Link>
                  <Link href="/venture-capitalist">
                    <a className="dropdown-item">Venture Capitalist</a>
                  </Link>
                </NavDropdown>
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link href="#link">Login</Nav.Link>
                <Nav.Link href="#link">Sign up</Nav.Link>
                <Link href="/join-startup">
                  <a className="nav-link btn_get_investment">Get Investment</a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
