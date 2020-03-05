import React from 'react'
import SnackBar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default ({open, handleClose, children, severity}) => (
    <SnackBar open={open} 
        onClose={handleClose} 
        autoHideDuration={2000}>
                <Alert variant='filled'
                severity={severity}
                onClose={handleClose}
                >
                    {children}
                </Alert>
    </SnackBar>
)