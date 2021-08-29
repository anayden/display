import React from "react";
import ComponentsEditForm from "../PostComponents/ComponentsEditForm";
import * as ActionCable from '@rails/actioncable'



const PostEdit  = ({ post, components}) => {
    ActionCable.logger.enabled = true
    return (
        <div className="vw-100 vh-100 primary-color d-flex justify-content-center">
            <div className="jumbotron jumbotron-fluid bg-transparent">
                <div className="container secondary-color">
                    <h1 className="display-4">Материал { post.id }</h1>
                    <div>
                        <ComponentsEditForm postId={post.id} />
                    </div>
                    { post.component_id === null && <a href="/posts">К списку материалов</a>}
                </div>
            </div>
        </div>
    )
}

export default PostEdit;