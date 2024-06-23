import React from 'react';

const Input = ({ ...props }) => {
    return (
        <div>
            <input

                id="input"
                type="file"
                className=" hidden"
                {...props}
            />
        </div>
    );
};

export default Input;