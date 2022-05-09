import { BehaviorSubject, Subject } from 'rxjs';
import { map, distinctUntilKeyChanged, scan } from 'rxjs/operators';
import { State, UserState } from './store.types';


export class ObservableStore<T> {
  private _store: BehaviorSubject<T>;
  private _stateUpdate = new Subject<T>();

  constructor(initialState: T) {
    this._store = new BehaviorSubject(initialState);
    this._stateUpdate.pipe(
      scan((current, updated) => {
        return { ...current, ...updated }
      }, initialState)
    ).subscribe(this._store);
  }

  selectState(key: keyof T) {
    return this._store.pipe(
      distinctUntilKeyChanged(key),
      map(state => state[key])
    );
  }

  updateState(newState: T) {
    this._stateUpdate.next(newState);
  }

  stateChanges() {
    return this._store.asObservable();
  }
}