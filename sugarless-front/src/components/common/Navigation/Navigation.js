import React from 'react';
import logo from './logo.png'

// Bootstrap 
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { Facebook, Instagram } from 'react-bootstrap-icons';

// CSS 
import './Navigation.css'



function Navigation(){

	return(

		<header> 

			<Navbar  expand="md" navbarScroll >

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">


	      	{/* Containter for the left links*/}
	        <Container className="ph0 mv2" > 
	        	<Nav className="center-flex">

	          	<Nav.Link href="#home" className="mr4">Home</Nav.Link>
	            <Nav.Link href="#aboutUs" className="mr4">About Us</Nav.Link>

	            <NavDropdown title="Menu" id="basic-nav-dropdown" className="mr4" >
	              <NavDropdown.Item href="#menu/full" className="tc">Full Menu</NavDropdown.Item>
	              <NavDropdown.Divider />
	              <NavDropdown.Item href="#menu/cakes" > Cakes  </NavDropdown.Item>
	              <NavDropdown.Item href="#menu/cupcakes">Cupcakes</NavDropdown.Item>
	              <NavDropdown.Item href="#menu/truffles">Truffles</NavDropdown.Item>
	              <NavDropdown.Item href="#menu/cookies">Cookies</NavDropdown.Item>
	              <NavDropdown.Item href="#menu/brownies">Brownies</NavDropdown.Item>
	            </NavDropdown>

	          </Nav>
	        </Container>



	        {/* Containter for the Center logo*/}
	        <Container className="ph0" > 
	        	<Nav className="center-flex">

	          	<Navbar.Brand href="#home" className="pa0 mr0 absolute logo-properties">

								<img
		              src={logo}
		              className=" d-inline-block "
		              alt="Sugarless Logo"
	            	/>
	          	</Navbar.Brand>

	          </Nav>
	        </Container>




	          {/* Containter for the right links*/}
	         <Container className="ph0"  > 
	          <Nav >

	          	<Nav.Link href="#order" className="mr4">Order</Nav.Link>
	            <Nav.Link href="#contactUs" className="mr4">Contact Us</Nav.Link>

	            <div>
	            	<Nav.Link style={{display:"inline-block"}} href="#facebook" className="f3 pa0 mr2 "> <Facebook/> </Nav.Link>
	            	<Nav.Link style={{display:"inline-block"}} href="#instagram" className="f3 pa0 "> <Instagram/> </Nav.Link>
	            </div>

	          </Nav>
	      	</Container>


    		</Navbar.Collapse>
	  	</Navbar>

		</header>

	)
};

export default Navigation;