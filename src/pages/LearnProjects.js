/* global i18n */
import '../services/localizationService';
import '../App.css';
import Error from '../core/error';
import SingleProject from '../core/singleProject';

import React, {useState, useEffect} from 'react';

import axios from 'axios';


export default function LearnProjects() {
    let lang = i18n('lang');
    const [learnProjectsError, setLearnProjectsError] = useState(null);
    const [learnProjects, setLearnProjects] = useState([]);
    
    const fetchLearnProjects = () => {
        const language = localStorage.getItem('prefferedLanguage');
        const link = 'https://rafsaf1.eu.pythonanywhere.com/api/learn-project-'+language+'/?format=json';
        axios
        .get(link)
        .then(res =>{
            setLearnProjects(res.data);
            setLearnProjectsError(false);
        })
        .catch(() => {
            setLearnProjectsError(null);

            setTimeout(()=>{
                setLearnProjectsError(true);
            },2000)
        });
    };

    useEffect(
        () => {
            fetchLearnProjects();
        }, [lang]
    );

    return (
        <div id='learn-projects'>
            <div className='text-center'>
                <h1 className='font-header'>{i18n('myLearnProjects')}</h1>
            </div>
            <div className='text-center'>
                <Error
                show={learnProjectsError}
                onExit={() => {
                    setLearnProjectsError(null);
                    fetchLearnProjects();
                }} />
                <div style={{marginLeft: 25, marginRight: 25}}>
                    {learnProjects.map(row => (
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
