import React from 'react'
import { useEffect, useState } from 'react'

export default function HomeComponent() {

    const url = "http://localhost/Test-W15/wp/wp-json/wp/v2/";
    const [page, setPage] = useState([{content:{rendered:""}}]);

    useEffect(() => {
        fetch(url + "pages/")
            .then(response => response.json())
         /*    .then(json => console.log(json)) */
            .then(json => setPage(json))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
        <div dangerouslySetInnerHTML={{ __html: page[0].content.rendered }}></div>
        </>

       
        
    )
}