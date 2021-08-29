import React, { useState, useEffect } from 'react';
import axios from "axios";
import Posts from "./Posts"

const ReferenceComponentEdit  = ({ component}) => {
    const [comments, setComments] = useState([]);

    const handleNewComment = async () => {
        try {
            const response = await axios.post(`/post_templates/create_from/1?component_id=${component.id}`)
            const newComment = response.data;
            console.log(newComment);
        } catch (errors) {
            console.log(errors);
        }
    };
    return (
        <div>
            <div className="col-12">
                Комментарии:
            </div>
            <div className="col-12">
                <button className="btn btn-outline-primary" onClick={handleNewComment}>Добавить</button>
            </div>
            <div className="col-12">
                <Posts posts={comments} />
            </div>
        </div>
    )
}

export default ReferenceComponentEdit;