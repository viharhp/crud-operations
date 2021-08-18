import React from 'react';
import User from './User';
import _ from 'lodash';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UsersList = ({ users, setUsers }) => {
    
    const handleRemoveUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };
    
    return (
        <React.Fragment>
            <div>
            <h2>CRUD demo</h2>
            <NavLink to="/add" role="button" class="btn btn-secondary btn-block" >
                Add User
            </NavLink>
            </div>
        <div className="container">
            {!_.isEmpty(users) ? (
            users.map((user) => (
                <User key={user.id} {...user} handleRemoveUser={handleRemoveUser} />
            ))
            ) : (
            <p className="message">No users available. Please add some users.</p>
            )}
        </div>
        </React.Fragment>
    );
};

export default UsersList;
