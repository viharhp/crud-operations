import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AddUser from '../components/AddUser';
import UsersList from '../components/UsersList';
import EditUser from '../components/EditUser';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
    const [users, setUsers] = useLocalStorage('users', []);
    return (
        <BrowserRouter>
        <div className="container">
            <div className="container">
            <Switch>
                <Route
                render={(props) => (
                    <UsersList {...props} users={users} setUsers={setUsers} />
                )}
                path="/"
                exact={true}
                />
                <Route
                    render={(props) => (
                        <AddUser {...props} users={users} setUsers={setUsers} />
                    )}
                    path="/add"
                />
                <Route
                render={(props) => (
                    <EditUser {...props} users={users} setUsers={setUsers} />
                )}
                path="/edit/:id"
                />
                <Route component={() => <Redirect to="/" />} />
            </Switch>
            </div>
        </div>
        </BrowserRouter>
    );
};

export default AppRouter;