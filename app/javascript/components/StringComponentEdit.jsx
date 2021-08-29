import React, { useState} from 'react';
import axios from 'axios';

const StringComponentEdit  = ({ component }) => {
    const [val, setVal] = useState(component.value);
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`/components/${component.id}`, {
                value: val,
            })
            console.log(response.data);
        } catch (errors) {
            console.log(errors);
        }
    }
    return (
        <form className="component-edit form row row-cols-lg-auto g-3" onSubmit={onSubmit}>
            <div className="col-12">
                <label className="form-label" htmlFor="value">{component.name}</label>
            </div>
            <div className="col-12">
                <input type="text" className="form-control" name="value" value={val} onChange={(e) => setVal(e.target.value)}/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-outline-primary">💾</button>
            </div>
        </form>
    )
}

export default StringComponentEdit;