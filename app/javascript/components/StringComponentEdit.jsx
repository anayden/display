import React, { useState, useEffect } from 'react';

const StringComponentEdit  = ({ component }) => {
    const [val, setVal] = useState(component.value);
    const onSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting');

        fetch(`/components/${component.id}`, {
            method: 'put'
        }).then(response => response.json())
            .then(data => console.log(data));
    }
    return (
        <form className="form" onSubmit={onSubmit}>
            <label className="form-label" htmlFor="value">{component.name}</label>
            <input type="text" className="form-control" name="value" value={val} onChange={(e) => setVal(e.target.value)}/>
            <button type="submit" className="btn btn-outline-primary">💾</button>
        </form>
    )
}

export default StringComponentEdit;