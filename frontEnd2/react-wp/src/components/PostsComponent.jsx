import React from 'react'
import ArticleComponent from './ArticleComponent'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function PostsComponent() {

    const url = "http://localhost/Test-W15/wp/wp-json/wp/v2/";

    const [wpData, setWpData] = useState([]);
    const [authors, setAuthors] = useState([]);

    const [state, setState] = useState({
        posts: [],
        authors: []
    });

    useEffect(() => {
        axios.get(url + `posts?_embed`)
            .then(res => {
                setState(prevState => ({
                    ...prevState,
                    posts: res.data
                }));
                //console.log(res.data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });

        axios.get(url +`users`)
            .then(res => {
                const authorsData = [];
                res.data.forEach(author => {
                    authorsData[author.id] = author.name;
                });
                setState(prevState => ({
                    ...prevState,
                    authors: authorsData
                }));
            })
            .catch(error => {
                console.error('Error fetching authors:', error);
            });
    }, []);

/*     useEffect(() => {
        fetch(url + "posts?_embed")
            .then(response => response.json())
            .then(json => setWpData(json))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        fetch(url + "users")
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.log(error));
    }, []);

    console.log(wpData);
 */
    return (
        <>
            {state.posts.map((post) => (
                <div className="card my-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={post._embedded["wp:featuredmedia"][0].source_url} className="img-fluid rounded-start preview text-center" alt="" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <Link className='nav-link' to={"/post/" + post.id}><h5 className="card-title">{post.title.rendered}</h5></Link>                        
                                <p className="card-text">{post.excerpt.rendered.slice(3, -15)}...</p>
                                <p className="card-text"><small className="text-body-secondary">Written By: {state.authors[post.author]}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}





            {/*             <ArticleComponent></ArticleComponent> */}


        </>
    )
}
