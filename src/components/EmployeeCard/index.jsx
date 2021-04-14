import React from 'react';


function EmployeeCard(props) {
    return (
        <tr>
            <td>{props.img}</td>
            <td>{props.name}</td>
            <td>{props.number}</td>
            <td>{props.email}</td>
        </tr>

    )
}

export default EmployeeCard;