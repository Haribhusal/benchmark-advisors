import Reat, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Link from "next/link";

const Header = () => {
  const [loading, setLoading] = useState();
  const [docCategory, setDocCategory] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://benchmark.promotingnepal.com/api/document-category")
      .then((res) => {
        const docs = res.data;
        setDocCategory(docs.data);
        if (res.status == 200) {
          setLoading(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                <NavDropdown
                  title="Startups"
                  className="customDropdown"
                  id="doxs"
                >
                  <NavDropdown.Item>
                    <Link href="">
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
                            <h6 className="title font_p">Tech Startups</h6>
                            <p className="text-muted small">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Alias, adipisci.
                            </p>
                          </div>
                          <div className="arrow">
                            <i className="las la-arrow-right"></i>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="">
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
                            <h6 className="title font_p">Design Startup</h6>
                            <p className="text-muted small">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Alias, adipisci.
                            </p>
                          </div>
                          <div className="arrow">
                            <i className="las la-arrow-right"></i>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="">
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
                            <h6 className="title font_p">
                              Industrial Startups
                            </h6>
                            <p className="text-muted small">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Alias, adipisci.
                            </p>
                          </div>
                          <div className="arrow">
                            <i className="las la-arrow-right"></i>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/">
                      <a>
                        <div className="dropdown_item_icon d-flex">
                          <p className="text-muted f16 mb-0">
                            View all categories
                          </p>
                          <div className="arrow">
                            <i className="las la-arrow-right"></i>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Investors"
                  className="customDropdown"
                  id="doxs"
                >
                  <NavDropdown.Item>
                    <Link href="/investors">
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
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Alias, adipisci.
                            </p>
                          </div>
                          <div className="arrow">
                            <i className="las la-arrow-right"></i>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/venture-capitalist">
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
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Alias, adipisci.
                            </p>
                          </div>
                          <div className="arrow">
                            <i className="las la-arrow-right"></i>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/investment-banker">
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
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Alias, adipisci.
                            </p>
                          </div>
                          <div className="arrow">
                            <i className="las la-arrow-right"></i>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/">
                      <a>
                        <div className="dropdown_item_icon d-flex">
                          <p className="text-muted f16 mb-0">
                            View all categories
                          </p>
                          <div className="arrow">
                            <i className="las la-arrow-right"></i>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Incubators &amp; Accelerators</Nav.Link>
                <NavDropdown
                  title="Free Documents"
                  className="customDropdown"
                  id="navbarScrollingDropdown"
                >
                  {loading ? (
                    docCategory.map((item) => (
                      <NavDropdown.Item key={item.slug}>
                        <Link href={`/downloads/${item.slug}`}>
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
                              <i className="las la-arrow-right"></i>
                            </div>
                          </div>
                        </Link>
                      </NavDropdown.Item>
                    ))
                  ) : (
                    <div>Loading</div>
                  )}
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
