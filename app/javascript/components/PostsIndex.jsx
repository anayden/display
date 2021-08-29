import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Posts from './Posts';
import axios from "axios";

const Home  = () => {
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(true);

    const handleNewMaterialClick = async () => {
        try {
            const response = await axios({
                    method: 'post',
                    url: '/post_templates/create_from/2',
                });
            const newPost = response.data;
            window.location.href = `/posts/${newPost.id}/edit`;
        } catch (errors) {
            console.log(errors);
        }
    }

    useEffect(() => {
        fetch("/posts/list")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => {
                setPosts(response);
                setLoading(false);
            })
            .catch(() => console.log('An error occurred while fetching the posts'));
    }, []);

    return (
        <div className="vw-100 vh-100 primary-color d-flex justify-content-center">
            <div className="jumbotron jumbotron-fluid bg-transparent">
                <div className="container secondary-color">
                    <h1 className="display-4">Материалы</h1>
                    <button className="btn btn-outline-primary" onClick={handleNewMaterialClick}>Создать</button>
                    <hr className="my-4" />
                    {
                        loading ? <Loader /> : (
                            <div>
                                <Posts posts={posts} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;