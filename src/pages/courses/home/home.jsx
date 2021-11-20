import axios from 'axios';
import React from 'react';

import './style.css'

export default function Home(){
    const api = axios.create({
        baseURL: "https://flashcard-api-mayck.herokuapp.com/api/colecoes"
      });

    
    return (
    <div className = "home-container">
            <h1>HOME</h1>
        <div>
            <p>Seja bem vindo ao nosso site, para você que deseja passa em algum vestibular, fazer cursos, 
                a prova do ENEM, tambem tem a prova do SENAI e entre outros. Então venha estudar em nosso site com muitas
                variedades e interação. </p>
              
        </div>
    </div>
    )
}


        

