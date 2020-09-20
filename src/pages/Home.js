/* global i18n */
import '../services/localizationService';
import '../App.css';
import table from '../images/table.jpg';
import Error from '../core/error';

import React, {useState, useEffect} from 'react';
import axios from 'axios';


function Technology(props) {
    return (
        <div className='my-3'>
        <img className='avatar-small' alt={props.title} src={props.image} />
        <span className='font-text'>{props.title}</span>
        </div>
    );
}

function Contact(props) {
    let textItem;
    if (props.link) {
        textItem = <a rel="noopener" target='_blank' className='font-text-link' href={props.text} >{props.text}</a>;
    } else {
        textItem = <span className='font-text'>{props.text}</span>;
    };

    return (
        <div className='my-3'>
            <img className='avatar-small' alt={props.description} src={props.image} />
            {textItem}
        </div>
    );
}


function Home(props) {
    const [contactError, setContactError] = useState(false);
    const [contacts, setContacts] = useState([]);

    const [technologyError, setTechnologyError] = useState(false);
    const [technologies, setTechnologies] = useState([]);

    useEffect(
        () => {
            axios
            .get('https://rafsaf1.eu.pythonanywhere.com/api/contact/?format=json')
            .then(res => setContacts(res.data))
            .catch(() => {
                setContactError(null);

                setTimeout(() => {
                    setContactError(true);
                }, 2000);
            });

        }, [contacts]
    );

    useEffect(
        () => {
            axios
            .get('https://rafsaf1.eu.pythonanywhere.com/api/techonology/?format=json')
            .then(res => setTechnologies(res.data))
            .catch(() => {
                setTechnologyError(null);

                setTimeout(() => {
                    setTechnologyError(true);
                }, 2000);
        });

        }, [technologies]
    );

    return (
        <div id='Home'>
        <div className='text-center'>
            <h1 className='font-header'>Rafsaf</h1>
            <h1 className='font-title'>{i18n('contact')}</h1>
        </div>
        <div className='text-center'>
        <Error
        show={contactError}
        onExit={() => {
            setContactError(false);
            setContacts([]);
            }} />

        {contacts.map(row => (
            <Contact
            description={row.description}
            image={row.image}
            text={row.text} 
            link={row.link}
            />
        ))}
        </div>

        <div className='my-5 text-center' >
            <img className='img-responsive ' width='70%' src={table} alt = 'table' />
        </div>
        <div className='text-center'>
        <h1 className='font-title'>{i18n('technology')}</h1>

        <Error
        show={technologyError}
        onExit={() => {
            setTechnologyError(false);
            setTechnologies([]);
        }} />

        {technologies.map(row => (
            <Technology
            image={row.image}
            title={row.title} />
        ))}
        </div>
        </div>
    );
};

export default Home;