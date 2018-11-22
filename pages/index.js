import Intro from '../components/Intro';
import styled from 'styled-components';

import Nav from '../components/Nav';
import About from '../components/About';
import Portfolio from '../components/Portfolio';

const Content = styled.div`
  padding: 0 100px;
`;

const App = () => (
  <div>
    <Nav />
    <Content>
      <Intro />
      <About />
      <Portfolio/>
    </Content>
  </div>
);

export default App;
