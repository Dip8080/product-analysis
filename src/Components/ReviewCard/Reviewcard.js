import React from 'react';

const Reviewcard = (props) => {
    const {name,comment , rating} = props.obj;
    return (
        <div className='p-4 my-3 shadow rounded flex justify-center'>
            <div>
            <h1>name : {name}</h1>
            <h1>comment : {comment}</h1>
            <h1>review : {rating}</h1>
            </div>

        </div>
    );
};

export default Reviewcard;