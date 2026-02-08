import React from "react";

const TableRow = ({ user, onClick }) => {
    console.log("TableRow user data:", user); 
    return (
        <tr 
            onClick={() => onClick(user)} 
            style={{ cursor: 'pointer' }}
            className="table-row"
        >
            <td>{user.lastName}</td>
            <td>{user.firstName}</td>
            <td>{user.maidenName}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.country}</td>
            <td>{user.city}</td>
        </tr>
    );
};

export default TableRow;