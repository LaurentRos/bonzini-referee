import mobx, { observable, computed } from 'mobx';

class GoalStore {
  @observable store = {
    blue: {
      goals: 0,
      inOuts: 0
    },
    red: {
      goals: 0,
      inOuts: 0
    },
    teams: ['blue', 'red'],
    enableHalf: false,
    half: 0
  };

  constructor() {
    mobx.autorun(() => console.log(this.objectScore));
  }

  @computed get score() {
    return `Blue ${this.store.blue.goals - this.store.red.inOuts} - ` +
      `${this.store.red.goals - this.store.blue.inOuts} Red`;
  }

  @computed get objectScore() {
    return {
      "blue": this.store.blue.goals - this.store.red.inOuts,
      "red": this.store.red.goals - this.store.blue.inOuts
    }
  }
}

const goalStore = new GoalStore();

export default goalStore;
