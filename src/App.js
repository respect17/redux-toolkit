// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserList from './UserList';
import UserForm from './UserForm';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <UserList />
        <UserForm />
      </div>
    </Provider>
  );
};

export default App;
