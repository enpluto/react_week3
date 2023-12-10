import { Link } from "react-router-dom";
import { Wrapper, Container } from "./styled";
import navItems from "./data";

const Nav = () => {
  return (
    <Wrapper>
      <Container>
        {navItems.map((navItem, index) => {
          return (
            <Link to={navItem.path} key={index}>
              {navItem.title}
            </Link>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default Nav;
