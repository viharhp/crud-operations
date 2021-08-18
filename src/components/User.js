import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const User = ({
    id,
    username,
    description,
    handleRemoveUser
}) => {
    const history = useHistory();
    return (
        <div className="table" >
            <div>
                <tr>
                    <td>{username}</td> 
                    <td>{description}</td> 
                    <td>
                        <button className="btn btn-primary btn-sm" onClick={() => history.push(`/edit/${id}`)}>
                            Edit
                        </button>{' '}
                    </td>
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={() => handleRemoveUser(id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            </div>
        </div>
    );
};

export default User;