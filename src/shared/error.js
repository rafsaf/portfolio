/* global i18n */
import '../i18n/localizationService';

import React from 'react';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function Error(props) {

    if (props.show === true) {
      return (
        <div className='d-flex justify-content-center my-4'>
        <Alert className='w-auto' variant="danger" onClose={props.onExit}>
          <Alert.Heading className='text-center'>{i18n('errorAppeared')}</Alert.Heading>
          <p>
            {i18n('ClickExitToReload')}
            </p>
            <p>
            {i18n('ifStillError')}
          </p>
          
          <Button onClick={props.onExit} variant="outline-success">
            {i18n('tryAgain')}
          </Button>
        
        </Alert>
        </div>
      );
    } else if (props.show === null) {
        return (
            <CircularProgress color='primary' />
        );
    }
    return null;

}