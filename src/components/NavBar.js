import { StyledLink, NavItem } from "../styles";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <StyledLink to="/" className="navbar-brand">
        <img
          src="https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/vyax4oqoq22vgayrzbyy"
          alt="logo"
        />
      </StyledLink>
      <div className="navbar-nav ml-auto">
        <NavItem to="/categories" className="nav-item">
          Categories
        </NavItem>
        <NavItem to="/recipes" className="nav-item">
          Recipes
        </NavItem>
      </div>
    </nav>
  );
};

export default NavBar;
