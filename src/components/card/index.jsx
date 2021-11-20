import React from 'react';


import './style.css'

export default function Card( props ){
    return (
        <div class='card-container' >
            <div class='card-content' >
                <h3>{ props.title }</h3>
                <div class='card-image' ></div>
                <footer>
                    <p>{ props.description }</p>
                </footer>
            </div>
        </div>
    )
}
