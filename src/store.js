import { observable, computed } from 'mobx';

class CounterStore {
  @observable counters = [];
  @observable newName = '';

  @computed get totalCount() {
    return this.counters.reduce((a, b) => a + b.value, 0);
  }

  addCounter() {
    this.counters.push({
      name: this.newName,
      value: 0,
    });
    this.newName = '';
  }

  increment(index) {
    this.counters[index].value++;
  }

  decrement(index) {
    this.counters[index].value--;
  }

}

const counterStore = new CounterStore();

export default counterStore;
