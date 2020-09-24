/* global i18n */
import '../i18n/localizationService';
import {TitleText, TitleTextBordered, NormalText, FontLink} from '../shared/texts'
import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function SingleProject(props) {

    return (
    <div id='next-project' className='text-center mt-5'>
    <TitleText text={props.title}></TitleText>
    <Row className='justify-content-md-center my-4'>
    <Col xs={12}>
        
        <img className='mx-auto img-fluid d-block d-lg-none' alt={props.title} src={props.image} />
        
        </Col>
    <Col xs={12} lg={5}>

    <TitleTextBordered text='Link'></TitleTextBordered>        
    <FontLink href={props.link} text={props.link}></FontLink>
    <TitleTextBordered text={i18n('shortDescription')}></TitleTextBordered>
    <NormalText text={props.description}></NormalText>
    <TitleTextBordered text={i18n('created')}></TitleTextBordered>
    <NormalText text={props.created}></NormalText>
    
    </Col>
    <Col xs={12} lg={5}>
        
    <img className='img-fluid d-none d-lg-block' alt={props.title} src={props.image} />
    
    </Col>

    </Row>
    </div>
    )
} 