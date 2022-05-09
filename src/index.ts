// begin lesson code
import { ObservableStore } from './store';
import { User, UserState } from './store.types';


const user:User = {
    name: 'joe',
    isAuthenticated: true,
}
const users: User[] = [user];

const initialState: UserState = {
  name: 'joe',
  isAuthenticated: true,
  item: user,
  items: users
}
const store = new ObservableStore(initialState);

/*
 * Select a slice of state from store.
 */
store.selectState('name').subscribe(v => console.log("name:",v));
store.selectState('isAuthenticated').subscribe(v => console.log("auth:", v));
store.selectState('items').subscribe(v => console.log("items:", v));

/*
 * Update a property with new value.
 */
store.updateState({
  name: 'bob',
  isAuthenticated: true,
  item: user,
  items: users
});

store.updateState({
  name: 'bob',
  isAuthenticated: false,
  item: user,
  items: users
});

/*
 * Selected state above (user) only emits when value has changed
 * for the requested property.
 */
const mary = { name: 'mary', isAuthenticated: false}
users.push(mary)
store.updateState({
  name: 'mary',
  isAuthenticated: false,
  item: mary,
  items: users
});


/********************
 * Have a question, comment, or just want to chat about RxJS?
 * Ping me on Ultimate Courses slack or on
 * Twitter https://twitter.com/btroncone
 * I look forward to hearing from you!
 * For additional RxJS info and operator examples check out
 * Learn RxJS (https://www.learnrxjs.io) and
 * the Ultimate Course RxJS blog!
 * (https://ultimatecourses.com/blog/category/rxjs)
 ********************/