import React from 'react';

const Posts = ({ posts }) => {
    return (
        <div>
            <h4>Posts</h4>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <a href={`/posts/${post.id}/edit`}>{post.id}</a>
                    </div>
                )
            })}
        </div>
    )
};

export default Posts;