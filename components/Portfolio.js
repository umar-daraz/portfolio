import React from 'react';
import styled from 'styled-components';
import PortfolioItem from './PortfolioItem';

const PortfolioStyles = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1em;
`;

const data = [
  {
    title: 'TODO APP',
    description: 'A Simple TODO App',
    tools: ['Javascript', 'Java', 'Mobx'],
  },
  {
    title: 'Tic Tac Toe',
    description: 'A Simple Tic Tac Toe App',
    tools: ['Javascript', 'Java', 'Mobx'],
  },
  {
    title: 'React Native App',
    description: 'A simple React Native App',
    tools: ['Javascript', 'Java', 'Mobx'],
  },
  {
    title: 'React App',
    description: 'A Simple React App',
    tools: ['Javascript', 'Java', 'Mobx'],
  },
  {
    title: 'Java App',
    description: 'A Simple Java App',
    tools: ['Javascript', 'Java', 'Mobx'],
  },
];

const Portfolio = () => (
  <div>
    <h1>Portfolio</h1>
    <PortfolioStyles>
      {data.map((portofolioItem, index) => <PortfolioItem key={index}  {...portofolioItem}/>)}
    </PortfolioStyles>
  </div>
);

export default Portfolio;
