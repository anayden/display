import React, { useState } from 'react';
import axios from "axios";

const BooleanComponentEdit  = ({ component }) => {
    const [value, setValue] = useState(component.value);
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`/components/${component.id}`, {
                value: value,
            })
            console.log(response.data);
        } catch (errors) {
            console.log(errors);
        }
    }
    return (
        <form className="component-edit row row-cols-lg-auto g-3" onSubmit={onSubmit}>
            <div className="col-12">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id={`component-${component.id}`} checked={value.toString() === "true"} onChange={(e) => setValue(e.target.checked.toString())}/>
                    <label className="form-check-label" htmlFor={`component-${component.id}`}>{component.name}</label>
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-outline-primary">💾</button>
            </div>
        </form>
    )
}

export default BooleanComponentEdit;