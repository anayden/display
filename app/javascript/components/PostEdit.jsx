import React, { useState, useEffect } from 'react';
import ComponentEdit from "./ComponentEdit";
import StringComponentEdit from "./StringComponentEdit";
import BooleanComponentEdit from "./BooleanComponentEdit";

const PostEdit  = ({ post, components }) => {
    return (
        <div className="vw-100 vh-100 primary-color d-flex justify-content-center">
            <div className="jumbotron jumbotron-fluid bg-transparent">
                <div className="container secondary-color">
                    <h1 className="display-4">Editing post { post.id }</h1>
                    <div>
                        {
                            components.map( (component) => {
                                switch (component.component_type) {
                                    case "string":
                                        return (<div key={component.id}>
                                            <StringComponentEdit component={component}/>
                                        </div>)
                                    case "boolean":
                                        return (<div key={component.id}>
                                            <BooleanComponentEdit component={component}/>
                                        </div>)
                                    default:
                                        return (<div key={component.id}>
                                            <ComponentEdit component={component}/>
                                        </div>)
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostEdit;