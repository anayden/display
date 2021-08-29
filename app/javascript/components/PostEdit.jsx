import ComponentEdit from "./ComponentEdit";
import StringComponentEdit from "./StringComponentEdit";
import BooleanComponentEdit from "./BooleanComponentEdit";
import ReferenceComponentEdit from "./ReferenceComponentEdit";
import React from "react";

const PostEdit  = ({ post, components}) => {
    return (
        <div className="vw-100 vh-100 primary-color d-flex justify-content-center">
            <div className="jumbotron jumbotron-fluid bg-transparent">
                <div className="container secondary-color">
                    <h1 className="display-4">Материал { post.id }</h1>
                    <div>
                        {
                            components.map( (component) => {
                                switch (component.component_type) {
                                    case "string":
                                        return <StringComponentEdit key={component.id} component={component}/>
                                    case "boolean":
                                        return <BooleanComponentEdit key={component.id} component={component}/>
                                    case "reference":
                                        return <ReferenceComponentEdit key={component.id} component={component}/>
                                    default:
                                        return <ComponentEdit key={component.id} component={component}/>
                                }
                            })
                        }
                    </div>
                    { post.component_id === null && <a href="/posts">К списку</a>}
                </div>
            </div>
        </div>
    )
}

export default PostEdit;