import React, {useState} from 'react';
import { BsX } from 'react-icons/bs';
import axios from "axios";
import ComponentsEditForm from "./ComponentsEditForm";

const ReferencePosts = ({ posts }) => {
    const [postList, setPostList] = useState(posts)
    const deletePost = async (postId) => {
        try {
            await axios.delete(`/posts/${postId}`)
            setPostList(postList.filter(post => post.id !== postId));
        } catch (errors) {
            console.log(errors);
        }
    }
    return (
        <>
            {postList.map((post) => {
                return (
                    <div key={post.id}>
                        <h3>Комментарий id={post.id}</h3>
                        <button onClick={() => deletePost(post.id)} className="btn btn-outline-danger">Удалить</button>
                        <ComponentsEditForm postId={post.id} />
                    </div>
                )
            })}
        </>
    )
};

export default ReferencePosts;