import { Cancel } from '@mui/icons-material';
import { Button, Dialog, DialogContent, Grid } from '@mui/material';
import { Dispatch } from 'react';

interface IProps {
    open: boolean;
    setOpen: Dispatch<boolean>
    message: string;
    confirm: (confirm: boolean) => void
}
export default function ConfirmDelete(props: IProps) {
    return (
        <>
            <Dialog open={props.open}>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }} textAlign={'center'}>
                            <Cancel style={{ width: '40px', height: '40px'}} color={'error'} />
                        </Grid>
                        <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }} textAlign={'center'}>
                            <div className='text-xl'>
                                Are you sure to delete? <br />
                                {props.message}
                            </div>
                        </Grid>
                        <Grid size={{ xl: 6, lg: 6, md: 6, sm: 6, xs: 6 }} textAlign={'center'}>
                            <Button variant={'outlined'} fullWidth style={{ color: 'black'}} onClick={() => props.confirm(false)}>
                                Cancel
                            </Button>

                        </Grid>
                        <Grid size={{ xl: 6, lg: 6, md: 6, sm: 6, xs: 6 }} textAlign={'center'}>
                            <Button variant={'contained'} fullWidth color={'error'} onClick={() => props.confirm(true)}>
                                Yes, Delete
                            </Button>
                        </Grid>

                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    )
}