import React from 'react';
import styled from 'styled-components';
import PortfolioItem from './PortfolioItem';

const PortfolioStyles = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1em;

`;
const Portfolio = () => (
  <div>
    <h1>Portfolio</h1>
    <PortfolioStyles>
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
    </PortfolioStyles>
  </div>
);

export default Portfolio;
