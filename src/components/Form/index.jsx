import React from 'react';
import './style.css';

function Form(props) {
    return(
        <div className="card">
        <div className="img-container">
          <img src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Cell Phone:</strong> {props.occupation}
            </li>
            <li>
              <strong>Email</strong> {props.location}
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Form;