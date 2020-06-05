import { save, load } from '@/utils/sl';
import ObservableData from './ObservableData';

export default class Persistence<T> extends ObservableData<T> {
  name: string;

  constructor(name: string, data: T) {
    super(data);
    this.name = name;
  }

  save() {
    save(this.name, this.data);
  }

  load() {
    load(this.name, this.data);
  }
}
