
import { Close } from '@mui/icons-material';
import { Alert, IconButton, Snackbar } from '@mui/material';
import { Dispatch } from 'react';
import { ESeverity } from '../enum';

interface IProps {
    open: boolean;
    setOpen: Dispatch<boolean>;
    severity: ESeverity;
    message: string;
}
export default function SnackAlert(props: IProps) {
    const handleClose = () => {
        props.setOpen(false)
    }
    return (
        <>
        <Snackbar open={props.open} anchorOrigin={{ vertical: 'top', horizontal: 'right'}} onClose={handleClose} autoHideDuration={3500}>
            <Alert severity={props.severity} action={
                <IconButton style={{ padding: 0 }} size={'small'} onClick={handleClose}>
                    <Close />
                </IconButton>
            }>
                {props.message}
            </Alert>
        </Snackbar>
        </>
    )
}