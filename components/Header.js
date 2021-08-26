import Image from "next/image";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Link from "next/link";
import useSWR from "swr";

const documentCategoryFetcher = async () => {
  const response = await fetch(
    "https://benchmark.promotingnepal.com/api/document-category"
  );
  const data = await response.json();
  return data;
};

const Header = () => {
  const { data, error } = useSWR("docCategories", documentCategoryFetcher);
  if (error) return "An error occured";
  if (!data) return "";
  const docCategories = data.data;
  console.log(docCategories);

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
                <NavDropdown
                  title="Investors"
                  className="customDropdown"
                  id="doxs"
                >
                  <Link href="/downloads">
                    <a>
                      <div className="dropdown_item_icon d-flex">
                        <div className="image">
                          <img
                            src="/images/angel-investors.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <h6 className="title font_p">Angel Investors</h6>
                          <p className="text-muted small">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Alias, adipisci.
                          </p>
                        </div>
                        <div className="arrow">
                          <img src="/icons/right-arrow.svg" alt="" />
                        </div>
                      </div>
                    </a>
                  </Link>
                  <Link href="/downloads">
                    <a>
                      <div className="dropdown_item_icon d-flex">
                        <div className="image">
                          <img
                            src="/images/consulting.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <h6 className="title font_p">
                            Venture Capitalists(VC)
                          </h6>
                          <p className="text-muted small">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Alias, adipisci.
                          </p>
                        </div>
                        <div className="arrow">
                          <img src="/icons/right-arrow.svg" alt="" />
                        </div>
                      </div>
                    </a>
                  </Link>
                  <Link href="/downloads">
                    <a>
                      <div className="dropdown_item_icon d-flex">
                        <div className="image">
                          <img
                            src="/images/investment-banker.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <h6 className="title font_p">Investment Banker</h6>
                          <p className="text-muted small">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Alias, adipisci.
                          </p>
                        </div>
                        <div className="arrow">
                          <img src="/icons/right-arrow.svg" alt="" />
                        </div>
                      </div>
                    </a>
                  </Link>

                  <Link href="/downloads">
                    <a>
                      <div className="dropdown_item_icon d-flex">
                        <p className="text-muted f16 mb-0">
                          View all categories
                        </p>
                        <div className="arrow">
                          <img src="/icons/right-arrow.svg" alt="" />
                        </div>
                      </div>
                    </a>
                  </Link>
                </NavDropdown>
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

                <NavDropdown
                  title="Free Documents"
                  className="customDropdown"
                  id="doxs"
                >
                  {docCategories.map((item) => (
                    <Link href={`/downloads/${item.slug}`} key={item.slug}>
                      <a>
                        <div className="dropdown_item_icon d-flex">
                          <div className="image">
                            <img
                              src="/images/agreements.png"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="info w-100">
                            <h6 className="title font_p">{item.title}</h6>
                            <p className="text-muted small">
                              {item.description}
                            </p>
                          </div>
                          <div className="arrow">
                            <img src="/icons/right-arrow.svg" alt="" />
                          </div>
                        </div>
                      </a>
                    </Link>
                  ))}
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
