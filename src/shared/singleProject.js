/* global i18n */
import '../i18n/localizationService';
import {TitleText, TitleTextBordered, NormalText, FontLink} from '../shared/texts'
import React from 'react';

import Grid from '@material-ui/core/Grid';

export default function SingleProject(props) {

    return (
    <div id='next-project'>
    <TitleText text={props.title}></TitleText>
    <Grid container className='my-4' spacing={2}>
    <Grid item xs={12} lg={5}>

    <TitleTextBordered text='Link'></TitleTextBordered>        
    <FontLink href={props.link} text={props.link}></FontLink>
    <TitleTextBordered text={i18n('shortDescription')}></TitleTextBordered>
    <NormalText text={props.description}></NormalText>
    <TitleTextBordered text={i18n('created')}></TitleTextBordered>
    <NormalText text={props.created}></NormalText>
    
    </Grid>
    <Grid item xs={'auto'} lg={6}>
    <img className='img-fluid' alt={props.title} src={props.image} />
    </Grid>

    </Grid>
    </div>
    )
} 