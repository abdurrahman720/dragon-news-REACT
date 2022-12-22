import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import LeftSideNav from "./LeftSideNav/LeftSideNav";
import Button from 'react-bootstrap/Button';
import {MdLogout} from 'react-icons/md'

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(err => {
      console.log(err)
    })
    
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand> <Link to='/'>Dragon News</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {
                user?.uid && <span>{user.displayName}</span>
              }
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {
                user?.uid ? <><Image roundedCircle style={{height: '30px'}} src={user?.photoURL}></Image> 
               <Button variant="outline-secondary" size='sm' className="ms-2" onClick={handleLogout}> <MdLogout  className="ms-2"></MdLogout></Button> </>
               : <Link className="" to='/login'> <Button variant="outline-secondary" size='sm'><FaUser></FaUser></Button>{' '}</Link>
              }
              
            </Nav.Link>
                  </Nav>
                  <div className="d-md-none">
                      <LeftSideNav></LeftSideNav>
                  </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
