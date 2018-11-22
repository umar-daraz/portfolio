import React from 'react';
import styled from 'styled-components';

const ItemStyles = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  height: 200px;
`;
const PortfolioItem = () => <ItemStyles>Portfolio Item</ItemStyles>;

export default PortfolioItem;
