/* global i18n */
import '../services/localizationService';
import '../App.css';
import Error from '../core/error';

import React, {useState, useEffect} from 'react';

import axios from 'axios';


function SingleProject() {

}


export default function Projects() {

    const [projectsError, setProjectsError] = useState(null);
    const [projects, setProjects] = useState([]);
    
    const fetchProjects = () => {
        axios
        .get('https://rafsaf1.eu.pythonanywhere.com/api/project/?format=json')
        .then(res =>{
            setProjects(res.data);
            setProjectsError(false);
        })
        .catch(() => {
            setProjectsError(null);

            setTimeout(()=>{
                setProjectsError(true);
            },2000)
        });
    };

    useEffect(
        () => {
            fetchProjects();
        }, []
    );

    return (
        <div id='projects'>
            <div className='text-center'>
                <h1 className='font-header'>My Projects</h1>
            </div>
            <div className='text-center'>
                <Error
                show={projectsError}
                onExit={() => {
                    setProjectsError(null);
                    fetchProjects();
                }} />
            </div>



        </div>
    );
};