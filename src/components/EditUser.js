import React from 'react';
import UserForm from './UserForm';
import { useParams } from 'react-router-dom';

const EditUser = ({ history, users, setUsers }) => {
    const { id } = useParams();
    const userToEdit = users.find((user) => user.id === id);

    const handleOnSubmit = (user) => {
        const filteredUsers = users.filter((user) => user.id !== id);
        setUsers([...filteredUsers, user]);
        history.push('/');
    };

    return (
        <div>
        <UserForm user={userToEdit} handleOnSubmit={handleOnSubmit} />
        </div>
    );
};

export default EditUser;