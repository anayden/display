import React, { useState} from 'react';
import axios from 'axios';

const StringComponentEdit  = ({ component }) => {
    const [val, setVal] = useState(component.value);
    const [dirty, setDirty] = useState(false);
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`/components/${component.id}`, {
                value: val,
            })
            setDirty(false);
        } catch (errors) {
            console.log(errors);
        }
    }

    const onChange = (event) => {
        setDirty(true);
        setVal(event.target.value);
    }
    return (
        <form className="component-edit form row row-cols-lg-auto g-3" onSubmit={onSubmit} id={`component-form-${component.id}`}>
            <div className="col-12">
                <label className="form-label" htmlFor={`component-value-${component.id}`}>{component.name}</label>
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id={`component-value-${component.id}`} name={`component-value-${component.id}`} value={val} onChange={onChange}/>
            </div>
            <div className="col-12">
                <button type="submit" className={`btn btn-outline-${dirty ? 'danger': 'primary'}`}>💾</button>
            </div>
        </form>
    )
}

export default StringComponentEdit;