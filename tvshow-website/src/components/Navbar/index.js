import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/" activeStyle>
			Home
		</NavLink>
		<NavLink to="/episodes" activeStyle>
			Episodes
		</NavLink>
		<NavLink to="/community" activeStyle>
			Community
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
