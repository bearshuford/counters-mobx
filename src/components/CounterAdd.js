
import React from 'react';
import { observer } from 'mobx-react';
import Flex from 'styled-flex-component';
import styled from 'styled-components';

const InputRow = Flex.extend`
  margin-bottom: .6em;
`;

const Input = styled.input`
  padding: .6em;

  border-radius: 3px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: .8em;
  margin-left: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

@observer
class CounterAdd extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <form onSubmit={e => { e.preventDefault(); }}>
        <InputRow>
          <Input
            placeholder='name'
            onChange={e => (store.newName = e.target.value)}
            value={store.newName}
          />
          <Button onClick={() => { store.addCounter() }}>
            Add Counter
          </Button>
        </InputRow>
      </form>
    );
  }
};

export default CounterAdd;
