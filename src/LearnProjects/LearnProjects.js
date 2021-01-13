/* global i18n */
import '../i18n/localizationService';

import Error from '../shared/error';
import {HeaderText} from '../shared/texts';
import SingleProject from '../shared/singleProject';

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
        <div id='learn-projects' className="container-fluid">
            <div className='text-center'>
                <HeaderText text={i18n('myLearnProjects')}></HeaderText>

                <Error
                show={learnProjectsError}
                onExit={() => {
                    setLearnProjectsError(null);
                    fetchLearnProjects();
                }} />
                <div>
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
