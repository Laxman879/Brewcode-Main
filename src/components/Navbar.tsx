import React, { useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import Link from "next/link";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import Image from "next/image";

function Header() {
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigateToLogin = () => {
    router.push("/login");
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
    router.push("/whatwedo");
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="navbar">
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <Image
              src="/images/brewcode-logo.png"
              alt="Brewcode logo"
              width={40}
              height={30}
              className="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown dropdown-mega position-static">
              <Link
                className="nav-link dropdown-toggle active"
                href="/whatwedo"
                onClick={handleDropdownToggle}
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                What We Do
                {isDropdownOpen ? (
                  <BiChevronDown fontSize={"20px"} />
                ) : (
                  <BiChevronUp fontSize={"20px"} />
                )}
              </Link>
              <div className="dropdown-menu shadow">
                <div className="mega-content px-md-4">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                        <h5 className="mb-3 dropdown-heading">Capabilities</h5>
                        <div className="">
                          <p>
                            <a className="list-group-item" href="#">
                              Colud
                            </a>
                          </p>
                          <p>
                            <a className="list-group-item" href="#">
                              Cyber Security
                            </a>
                          </p>
                          <p>
                            <a className="list-group-item" href="#">
                              E-Commerce
                            </a>
                          </p>
                          <p>
                            <a className="list-group-item" href="#">
                              Enterprise Application Development
                            </a>
                          </p>
                          <p>
                            <a className="list-group-item" href="#">
                              Resourse Planning
                            </a>
                          </p>
                          <p>
                            <a className="list-group-item" href="#">
                              Infrastrucure
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4 ">
                        <p className="mt-5 padding-top">
                          <a className="list-group-item" href="#">
                            Robotic Proccess Automation
                          </a>
                        </p>
                        <p>
                          <a className="list-group-item" href="#">
                            Full Stack Developement
                          </a>
                        </p>
                        <p>
                          <a className="list-group-item" href="#">
                            Digital Assurance
                          </a>
                        </p>
                        <p>
                          <a className="list-group-item" href="#">
                            Web Development
                          </a>
                        </p>
                        <p>
                          <a className="list-group-item" href="#">
                            UX/UI designing
                          </a>
                        </p>
                      </div>

                      <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                        <h5 className="mb-3 dropdown-heading">Industries</h5>
                        <div className="">
                          <p>
                            <a className="list-group-item" href="#">
                              Automotive
                            </a>
                          </p>
                          <p>
                            <a className="list-group-item" href="#">
                              Banking
                            </a>
                          </p>
                          <p>
                            <a className="list-group-item" href="#">
                              Capital Markets
                            </a>
                          </p>
                          <p>
                            <a className="list-group-item" href="#">
                              Communication & Modie
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                        <div className="mt-5 padding-top">
                          <p>
                            <a className="list-group-item" href="#">
                              Health
                            </a>
                          </p>
                          <p>
                            <a className="list-group-item" href="#">
                              High Tech
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/whoweare"
              >
                Who We Are
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/insights"
              >
                Insights
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/career"
              >
                Career
              </Link>
            </li>
          </Nav>

          <button className="contact-us-btn" onClick={navigateToLogin}>
            Contact Us
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
