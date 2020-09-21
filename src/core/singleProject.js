/* global i18n */
import '../services/localizationService';

import React from 'react';

import Grid from '@material-ui/core/Grid';

export default function SingleProject(props) {

    return (
    <div id='next-project'>
        <div className='font-title my-5'>
            {props.title}
        </div>
    <Grid container className='my-4' spacing={2}>
    <Grid item xs={12} lg={5}>

        <p className='font-title-half'>Link</p>
        
        <a 
        rel="noopener noreferrer" 
        target='_blank' 
        href={props.link} 
        className='font-text-link-half text-wrap'>
            {props.link}
        </a>

        <p className='font-title-half mt-2'>{i18n('shortDescription')}</p>
        <p className='font-text-half'>{props.description}</p>
        <p className='font-title-half'>{i18n('created')}</p>
        <p className='font-text-half'>{props.created}</p>
    </Grid>
    <Grid item xs={'auto'} lg={6}>
    <img className='img-fluid' alt={props.title} src={props.image} />
    </Grid>

    </Grid>
    </div>
    )
} 