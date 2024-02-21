import React from 'react'
import { useState } from 'react';
export default function ArticleComponent(data) {

    console.log(data);

/*     const [info, setInfo] = useState([]);
    setInfo(data);
    console.log(info) */

    return (
        <div className="card text-center my-4">
            <div className="card-header">
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                {/*  <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            <div className="card-footer text-body-secondary">
                2 days ago
            </div>
        </div>
    )
}
