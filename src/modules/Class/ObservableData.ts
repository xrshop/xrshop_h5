import Vue from 'vue';

export default class ObservableData<T> {
  data: T;

  constructor(data: T) {
    this.data = Vue.observable(data);
  }
}
