//not needed to import react since the last upate
import React from 'react';
import { PropTypes } from 'prop-types';


const View = (props) =>
{
    return (
        <div className = "view">
            
            <h3>
                <label>Name: &nbsp; </label>
                {props.passedName}
            </h3>
            <br />
            
            <h3>
                <label>Age: &nbsp; </label>
                {props.age}
            </h3>
            
            <br />
            <h3>
                <label>
                    Hobbies:  &nbsp;
                </label>
                {props.hobbies}
            </h3>
            <br />
            
        </div>
        
);

};

export default View;
//child to recieve props and display them 



