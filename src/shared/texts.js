import React from 'react';

function HeaderText(props) {
    return (
    <h1 className='font-header'>{props.text}</h1>
    )
}

function TitleText(props) {
    return (
    <h1 className='font-title'>{props.text}</h1>
    )
}

function TitleTextBordered(props) {
    return (
    <h2 className='font-title-border'>{props.text}</h2>
    )
}

function NormalText(props) {
    return (
    <p className='font-text'>{props.text}</p>
    )
}

function NormalTextFooter(props) {
    return (
    <p className='font-text-footer'>{props.text}</p>
    )
}

function FontLink(props) {
    return(
    <a 
        rel="noopener noreferrer" 
        target='_blank'
        className='font-text-link text-break' 
        href={props.href}
    >
        {props.text}
    </a>
    )
} 

function FontLinkFooter(props) {
    return(
    <a 
        rel="noopener noreferrer" 
        target='_blank'
        className='font-text-link-footer text-break' 
        href={props.href}
    >
        {props.text}
    </a>
    )
} 

export {
    HeaderText, 
    TitleText, 
    TitleTextBordered, 
    NormalText, 
    NormalTextFooter, 
    FontLink, 
    FontLinkFooter
}