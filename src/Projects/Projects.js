/* global i18n */
import '../i18n/localizationService';

import Error from '../shared/error';
import {HeaderText} from '../shared/texts';
import SingleProject from '../shared/singleProject';

import React, {useState, useEffect} from 'react';

import axios from 'axios';

export default function Projects() {
    let lang = i18n('lang');
    const [projectsError, setProjectsError] = useState(null);
    const [projects, setProjects] = useState([]);
    
    const fetchProjects = () => {
        const language = localStorage.getItem('prefferedLanguage');
        const link = 'https://rafsaf1.eu.pythonanywhere.com/api/project-'+language+'/?format=json'
        axios
        .get(link)
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
        }, [lang]
    );

    return (
        <div id='projects'>
            <div className='text-center'>
                <HeaderText text={i18n('Projects')}></HeaderText>

                <Error
                show={projectsError}
                onExit={() => {
                    setProjectsError(null);
                    fetchProjects();
                }}>

                </Error>

                <div style={{marginLeft: 25, marginRight: 25}}>
                    {projects.map(row => (
                        <SingleProject
                        key={row.title}
                        image={row.image}
                        title={row.title} 
                        link={row.link}
                        description={row.description}
                        created={row.created}
                        />
                    ))}
                </div>
            </div>



        </div>
    );
};