import React from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import Flex from 'styled-flex-component';
import styled from 'styled-components';

import CounterList from './CounterList';
import CounterAdd from './CounterAdd';



const Wrapper = Flex.extend`
  max-width: 300px;
  font-family: sans-serif
`;

@observer
class App extends React.Component {
  render() {
    return (
      <Flex column alignCenter>
        <Wrapper column alignCenter>
          <h2>Counter App {'\u2728'}</h2>
          <CounterAdd store={store} />
          <CounterList store={store} />
        </Wrapper>
      </Flex>
    )
  }
};

export default App;
