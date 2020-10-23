/* global i18n */
import '../i18n/localizationService';

import Error from '../shared/error';
import {TitleText, HeaderText, FontLink} from '../shared/texts';

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import mySelfImage from '../myself.png'

export function Technology(props) {
    return (
        <div className='my-3'>
        <img className='avatar-small' alt={props.title} src={props.image} />
        <span className='font-text ml-2'>{props.title}</span>
        </div>
    );
}

function Contact(props) {
    let textItem;
    if (props.link) {
        textItem = <FontLink href={props.text} text={props.text}></FontLink>
    } else {
        textItem = <span className='font-text'>{props.text}</span>;
    };

    return (
        <div className='my-3'>
            <img className='avatar-small mr-2' alt={props.description} src={props.image} />
            {textItem}
        </div>
    );
}


function Home(props) {
    const [contactError, setContactError] = useState(null);
    const [contacts, setContacts] = useState([]);

    const [technologyError, setTechnologyError] = useState(null);
    const [technologies, setTechnologies] = useState([]);

    const fetchContacts = () => {
        axios
        .get('https://rafsaf1.eu.pythonanywhere.com/api/contact/?format=json')
        .then(res => {
            setContacts(res.data);
            setContactError(false);
        })
        .catch(() => {
            setContactError(null);

            setTimeout(() => {
                setContactError(true);
            }, 2000);
        });
    };

    const fetchTechnologies = () => {
        axios
        .get('https://rafsaf1.eu.pythonanywhere.com/api/techonology/?format=json')
        .then(res => {
            setTechnologies(res.data);
            setTechnologyError(false);
        })
        .catch(() => {
            setTechnologyError(null);

            setTimeout(() => {
                setTechnologyError(true);
            }, 2000);
    });
    };


    useEffect(
        () => {
            fetchContacts();
        }, []
    );

    useEffect(
        () => {
            fetchTechnologies();
        }, []
    );

    return (
        <div id='Home' className='text-center'>

            <HeaderText text='Rafał Safin'></HeaderText>
            <img style={{maxWidth: '100%'}} className='mb-3' alt='myself' src={mySelfImage} />
            
            
            <TitleText text={i18n('contact')}></TitleText>

        <Error
        show={contactError}
        onExit={() => {
            setContactError(false);
            fetchContacts();
            }}>
                
        </Error>

        {contacts.map(row => (
            <Contact
            key={row.description}
            description={row.description}
            image={row.image}
            text={row.text} 
            link={row.link}>

            </Contact>
        ))}
        
        
        <div className='mt-5'>
        <TitleText text={i18n('technology')}></TitleText>
        </div>

        <Error
        show={technologyError}
        onExit={() => {
            setTechnologyError(false);
            fetchTechnologies();
        }}>

        </Error>

        {technologies.map(row => (
            <Technology
            image={row.image}
            title={row.title}
            key={row.title}>

            </Technology>
        ))}

        </div>
    );
};

export default Home;