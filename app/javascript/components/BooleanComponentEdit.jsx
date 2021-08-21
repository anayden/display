import React, { useState, useEffect } from 'react';

const BooleanComponentEdit  = ({ component }) => {
    const [value, setValue] = useState(component.value);
    const onSubmit = (event) => {
        console.log('Submitting');
        event.preventDefault();
    }
    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id={`component-${component.id}`} checked={value.toString() === "true"} onChange={(e) => setValue(e.target.checked.toString())}/>
                <label className="form-check-label" htmlFor={`component-${component.id}`}>{component.name}</label>
            </div>
            <button type="submit" className="btn btn-outline-primary">💾</button>
        </form>
    )
}

export default BooleanComponentEdit;