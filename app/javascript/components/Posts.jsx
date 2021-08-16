import React from 'react';

const Posts = ({ posts }) => {
    return (
        <div>
            <h4>List</h4>
            {posts.map((post, i) => {
                return (
                    <div class="form-check" key={i}>
                        <input class="form-check-input" type="checkbox" checked={false} value="" id={`checkbox${post.id}`} disabled />
                        <label class="form-check-label" for={`checkbox${post.id}`}>
                            {post.id}
                        </label>
                    </div>
                )
            })}
        </div>
    )
};

export default Posts;