/* global i18n */
import '../services/localizationService';

import React from 'react';

import Alert from 'react-bootstrap/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function Error(props) {

    if (props.show === true) {
      return (
        <div className='d-flex justify-content-center my-4'>
        <Alert className='w-50' dismissible variant="danger" onClose={props.onExit}>
          <Alert.Heading className='text-center'>{i18n('errorAppeared')}</Alert.Heading>
          <p>
            {i18n('ClickExitToReload')}
            </p>
            <p>
            {i18n('ifStillError')}
          </p>
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