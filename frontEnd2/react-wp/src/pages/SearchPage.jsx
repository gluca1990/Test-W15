import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, json } from 'react-router-dom';

export default function SearchPage() {
    const url = "http://localhost/Test-W15/wp/wp-json/wp/v2/";
    const { query } = useParams();
    const [state, setState] = useState({
        articles: [],
        authors: []
    })

    /*     useEffect(() => {
            axios.get(url + 'posts?search=' + query)
                .then(res => console.log(res));
                    //console.log(res.data);
                .catch(error => {
                    console.error('Error fetching posts:', error);
                }  , []);
     */
    useEffect(() => {
        /*         fetch(url + 'posts?search=' + query)
                    .then(response => response.json())
        
                    .then(json => setState(prevState => ({
                        ...prevState,
                        articles: json
                    })))
                    .catch(error => console.log(error));
         */
        axios.get(url + 'posts?search=' + query)
            .then(res => {
                setState(prevState => ({
                    ...prevState,
                    articles: res.data
                }));
            })
       /*      .then(res => console.log(res.data)) */
            .catch(error => {
                console.error('Error fetching posts:', error);
            });



        axios.get(url + `users`)
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

    return (
        <>
            {state.articles.map((post) => (
                <div className="card my-3">
                    <div className="row g-0">
                        {/*                         <div className="col-md-4">
                            <img src={post._embedded["wp:featuredmedia"][0].source_url} className="img-fluid rounded-start preview text-center" alt="" />
                        </div> */}
                        <div className="col-md-8">
                            <div className="card-body">
                                <Link className='nav-link' to={"/post/" + post.id}><h5 className="card-title">{post?.title?.rendered}</h5></Link>
                                <p className="card-text">{post?.excerpt?.rendered.slice(3, -15)}...</p>
                                <p className="card-text"><small className="text-body-secondary">Written By: {state.authors[post.author]}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}