import React, {useEffect, useState} from 'react';
import StringComponentEdit from "./StringComponentEdit";
import BooleanComponentEdit from "./BooleanComponentEdit";
import ReferenceComponentEdit from "./ReferenceComponentEdit";
import axios from "axios";
import TextComponentEdit from "./TextComponentEdit";

const ComponentsEditForm = ({postId}) => {
    const [loading, setLoading] = useState(true);
    const [components, setComponents] = useState([]);
    useEffect(() => {
        const loadComponents = async () => {
            try {
                const response = await axios.get(`/components/?post_id=${postId}`)
                setComponents(response.data);
                setLoading(false);
            } catch (errors) {
                console.log(errors);
            }
        };

        loadComponents().then(() => {});
    }, []);
    return (
        loading ? 'Loading' :
        components.map( (component) => {
            switch (component.component_type) {
                case "string":
                    return <StringComponentEdit key={component.id} component={component}/>
                case "text":
                    return <TextComponentEdit key={component.id} component={component}/>
                case "boolean":
                    return <BooleanComponentEdit key={component.id} component={component}/>
                case "reference":
                    return <ReferenceComponentEdit key={component.id} component={component}/>
            }
        })
    );
}

export default ComponentsEditForm;