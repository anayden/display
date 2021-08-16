import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Posts from './Posts';

const Home  = () => {
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = "/posts/list";
        fetch(url)
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
                    <h1 className="display-4">Posts</h1>
                    <p className="lead">
                        A curated list of recipes for the best homemade meal and delicacies.
                    </p>
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