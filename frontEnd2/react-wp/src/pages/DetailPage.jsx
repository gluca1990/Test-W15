import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function DetailPage() {

    const url = "http://localhost/Test-W15/wp/wp-json/wp/v2/";
    const { id } = useParams();
    const [state, setState] = useState({
        article: [],
        authors: []
    })
    console.log(id)



    useEffect(() => {
        fetch(url + 'posts/' + id)
            .then(response => response.json())
         /*    .then(json => console.log(json)) */
              .then(json => setState(prevState => ({
                  ...prevState,
                  article: json
              })))
            .catch(error => console.log(error));



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
        console.log(state);

    }, []);


    /*     useEffect(() => {
            fetch(url + "posts/" + id)
                .then(response => response.json())
    
                .then(json => setArticle(json))
                .catch(error => console.log(error));
        }, []); */

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{state.article?.title?.rendered}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Written by: {state.authors[state.article?.author]}</h6>
                <p className="card-text">{state.article?.content?.rendered.replaceAll("<p>", "").replaceAll("</p>", "")}</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
            <img src="..." className="card-img-bottom" alt="..." />
        </div>
    )
}
