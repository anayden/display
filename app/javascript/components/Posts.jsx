import React from 'react';
import { BsX } from 'react-icons/bs';
import axios from "axios";

const Posts = ({ posts }) => {
    const deletePost = async (postId) => {
        console.log(`delete ${postId}`);
        try {
            await axios.delete(`/posts/${postId}`)
            window.location.reload();
        } catch (errors) {
            console.log(errors);
        }
    }
    return (
        <>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <a href={`/posts/${post.id}/edit`}>{post.id}</a>
                        <BsX style={{cursor: 'pointer'}} onClick={() => deletePost(post.id)}/>
                    </div>
                )
            })}
        </>
    )
};

export default Posts;