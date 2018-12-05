import React from 'react';
import styled from 'styled-components';

const ItemStyles = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: red;
  height: 200px;
  .tools {
    align-items: center;
    span {
      padding: 0 1rem;
    }
  }
`;


const PortfolioItem = ({title, description, tools}) => (
  <ItemStyles>
    <h1>{title}</h1>
    <p>{description}</p>
    <div className="tools">
      {tools.map((tool, index) => (
        <span key={index}>{tool}</span>
      ))}
    </div>
  </ItemStyles>
);

export default PortfolioItem;
