import React from 'react';
import { observer } from 'mobx-react';
import Flex from 'styled-flex-component';
import styled from 'styled-components';

const Row = Flex.extend`
  width: 100%;
  margin: 0 .4em;
  padding: 0 .4em;
`;

const Name = Flex.extend`
  padding: 0 1em 0 0;
`;

const Value = Flex.extend`
  padding-right: .6em;
`;

const Button = styled.button`
  background: white;
  font-size: 1.2em;
  border: none;
  outline: none;
`;


const Counter = ({
  value,
  name,
  index,
  onIncrement,
  onDecrement,
  onRowClick,
  selected,
}) => (
  <Row alignCenter justifyBetween>
    <Name>{name}</Name>
    <Value center>
      <Button onClick={() => { onDecrement(index); }}>
        -
      </Button>
      <div>{value}</div>
      <Button onClick={() => { onIncrement(index); }}>
        +
      </Button>
    </Value>
  </Row>
)

export default Counter;
