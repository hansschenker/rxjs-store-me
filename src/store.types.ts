// export interface State {
//     user: string;
//     isAuthenticated: boolean;
//   }

export interface State<T> {
  item: T;
  items: T[];
}

export interface User {
  name: string;
  isAuthenticated: boolean;
}
export interface UserState extends State<User>{
  name: string;
  isAuthenticated: boolean;
}


