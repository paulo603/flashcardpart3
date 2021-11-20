import React, { useState, useEffect } from 'react';

import Card from '../../components/card/index.jsx';

import axios from 'axios'

import './style.css';

export default function CoursesPage(){

    const api = axios.create({
        baseURL: "https://api.github.com",
      });

    const [ courses, setCourses ] = useState([]);

    useEffect(() => {
    fetch('https://flashcard-api-mayck.herokuapp.com/api/colecoes')
      .then(response => response.json())
      .then(data => setCourses(data))
  }, [])

    return (
        <div class='courses-container' >
            {
                courses.map(course => (
                    <Card title={course.nome} description={course.descricao} />
                ))
            }
        </div>
    )
}
