import React, {useState} from 'react';
import { BsX } from 'react-icons/bs';
import axios from "axios";

const Posts = ({ posts }) => {
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
                        <a href={`/posts/${post.id}/edit`}>Материал {post.id}</a>
                        <BsX style={{cursor: 'pointer'}} onClick={() => deletePost(post.id)}/>
                    </div>
                )
            })}
        </>
    )
};

export default Posts;