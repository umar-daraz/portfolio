import styled from 'styled-components';

const NavStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  .nav {
    margin-right: 1rem;
    .nav-item {
      paddin: 0.25rem 0;
      font-size: 1.25rem;
      font-weight: 400;
      margin: 0 1rem;
    }
  }
`;
const Nav = () => (
  <NavStyles>
    <div className="nav">
      <span className="nav-item">About</span>
      <span className="nav-item">Portfolio</span>
    </div>
  </NavStyles>
);

export default Nav;
