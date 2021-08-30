import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BsPlus} from "react-icons/bs";
import Loader from "../Loader";
import ReferencePosts from "./ReferencePosts";

const ComponentEdit = {
    String: ({component}) => {
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
            <form className="component-edit form row row-cols-lg-auto g-3" onSubmit={onSubmit}
                  id={`component-form-${component.id}`}>
                <div className="col-12">
                    <label className="form-label" htmlFor={`component-value-${component.id}`}>{component.name}</label>
                </div>
                <div className="col-12">
                    <input type="text" className="form-control" id={`component-value-${component.id}`}
                           name={`component-value-${component.id}`} value={val} onChange={onChange}/>
                </div>
                <div className="col-12">
                    <button type="submit" className={`btn btn-outline-${dirty ? 'danger' : 'primary'}`}>💾</button>
                </div>
            </form>
        )
    },
    Text: ({component}) => {
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
            <form className="component-edit form row row-cols-lg-auto g-3" onSubmit={onSubmit}
                  id={`component-form-${component.id}`}>
                <div className="col-12">
                    <label className="form-label" htmlFor={`component-value-${component.id}`}>{component.name}</label>
                </div>
                <div className="col-12">
                    <textarea className="form-control" id={`component-value-${component.id}`}
                           name={`component-value-${component.id}`} value={val} onChange={onChange}/>
                </div>
                <div className="col-12">
                    <button type="submit" className={`btn btn-outline-${dirty ? 'danger' : 'primary'}`}>💾</button>
                </div>
            </form>
        )
    },
    Boolean: ({component}) => {
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
            <form className="component-edit row row-cols-lg-auto g-3" onSubmit={onSubmit}
                  id={`component-form-${component.id}`}>
                <div className="col-12">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id={`component-${component.id}`}
                               checked={value.toString() === "true"}
                               onChange={(e) => setValue(e.target.checked.toString())}/>
                        <label className="form-check-label"
                               htmlFor={`component-${component.id}`}>{component.name}</label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-outline-primary">💾</button>
                </div>
            </form>
        )
    },
    Reference:  ({ component }) => {
        const [comments, setComments] = useState([]);
        const [loading, setLoading] = useState(true);

        const loadAllReferencedComponents = async (componentId) => {
            try {
                const response = await axios.get(`/posts/for_component/?component_id=${componentId}`)
                const data = response.data;
                setComments(data);
                setLoading(false);
            } catch (errors){
                console.log(errors);
            }

        }

        const handleNewComment = async () => {
            try {
                setLoading(true);
                const response = (await axios.post(`/post_templates/create_from/1?component_id=${component.id}`)).data;
                const newComment = (await axios.get(`/posts/${response.id}`)).data
                setComments(comments.concat(newComment));
                setLoading(false);
            } catch (errors) {
                console.log(errors);
            }
        };

        useEffect(() => {
            loadAllReferencedComponents(component.id).then();
        }, []);

        return (
            <div>
                <div className="col-12">
                    <h2>Комментарии</h2>
                </div>
                <div className="col-12">
                    <button className="btn btn-outline-primary" onClick={handleNewComment}><BsPlus /></button>
                </div>
                <div className="col-12">
                    {
                        loading ? <Loader /> : (
                            <div>
                                <ReferencePosts posts={comments} />
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default ComponentEdit;