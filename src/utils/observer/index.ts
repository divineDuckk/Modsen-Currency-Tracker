import { Observer } from './types'

const Observable = class Observable<T> {
  observers: Observer<T>[] = []
  subscribe(observer: Observer<T>) {
    this.observers.push(observer)
  }

  unsubscribe(observer: Observer<T>) {
    this.observers = this.observers.filter((obs) => obs !== observer)
  }

  notify(state: T) {
    this.observers.forEach((observer) => observer(state))
  }
}
export const chartObserver = new Observable<boolean>()
