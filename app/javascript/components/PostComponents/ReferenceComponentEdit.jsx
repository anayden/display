import React, { useState, useEffect } from 'react';
import axios from "axios";
import Loader from "../Loader";
import ReferencePosts from "./ReferencePosts";
import {BsPlus} from "react-icons/bs";

const ReferenceComponentEdit  = ({ component }) => {
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
                Комментарии:
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

export default ReferenceComponentEdit;