import React from 'react';
import { observer } from 'mobx-react';
import Flex from 'styled-flex-component';
import styled from 'styled-components';

import Counter from './Counter';

const List = Flex.extend`
  width:100%;
  // font-family: monospace
`

const TotalRow = Flex.extend`
  font-weight: 600;
  padding: .4em 1.5em 0 .6em;
`;

@observer
class CounterList extends React.Component {
  
  constructor() {
    super();
    this.state = { selected: null };
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onRowClick = this.onRowClick.bind(this);
    this.renderCounter = this.renderCounter.bind(this);
  }

  onIncrement(index) {
    this.props.store.increment(index);
  }

  onDecrement(index) {
    this.props.store.decrement(index);
  }

  onRowClick(index) {
    if(this.state.selected === index)
      this.setState({ selected: null });
    else this.setState({ selected: index });
  }

  renderCounter({value, name}, index) {
    const { onIncrement, onDecrement, onRowClick } = this;
    return <Counter
      {...{ name, value, index, onIncrement, onDecrement, onRowClick }}
      selected={index === this.state.selected}
      key={`${name}-${index}`}
    />;
  }

  render() {
    const { counters, totalCount } = this.props.store;
    return (
      <List column>
      { counters.map(this.renderCounter) }
      { counters.length > 1 &&
        <TotalRow alignCenter justifyBetween>
          <div>TOTAL</div>
          <div>{ totalCount}</div>
        </TotalRow>
      }
      </List>
    );
  }
};

export default CounterList;
