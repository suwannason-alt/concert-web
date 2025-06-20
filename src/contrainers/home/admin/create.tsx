import { Person2Outlined, SaveOutlined } from '@mui/icons-material';
import {
    Button,
    Card, CardContent,
    Divider,
    Grid,
    TextField
} from '@mui/material';
import { useState } from 'react';
import { create } from '../../../services/consert.service'
import SnackAlert from '../../../components/snack-bar';
import { ESeverity } from '../../../enum';

export default function CreateConcert() {
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [seat, setSeat] = useState<number>(0);
    const [openAlert, setOpenAlert] = useState(false);
    const [severity, setSeverity] = useState<ESeverity>(ESeverity.success);
    const [message, setMessage] = useState('')

    const handleSubmit = async () => {
        console.log({ name, description, seat });
        try {
            await create(name, description, seat);

        } catch (error: unknown) {
            setSeverity(ESeverity.error)
            if (error instanceof Error) {
                console.log(error.stack);
            } else {
                console.log(error);
            }
            setMessage(`Fail to create consert.`);
            setOpenAlert(true)
        }
    }
    return (
        <>
            <Card>
                <CardContent>
                    <SnackAlert open={openAlert} setOpen={setOpenAlert} message={message} severity={severity} />
                    <Grid container spacing={2}>
                        <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'left'}>
                            <div className='text-[32px] font-bold text-[#1692EC]'>
                                Create
                            </div>
                        </Grid>
                        <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'left'} className='mt-2'>
                            <Divider />
                        </Grid>
                        <Grid size={{ lg: 6, xl: 6, md: 6, sm: 6, xs: 6 }} textAlign={'left'} className='mt-2'>
                            <div className='text-2xl mb-3'>
                                Concert Name
                            </div>
                            <TextField variant={'outlined'} onChange={(e) => { setName(e.target.value)}} size={'small'} fullWidth placeholder='Please input concert name' />
                        </Grid>
                        <Grid size={{ lg: 6, xl: 6, md: 6, sm: 6, xs: 6 }} textAlign={'left'} className='mt-2'>
                            <div className='text-2xl mb-3'>
                                Total of seat
                            </div>
                            <TextField slotProps={{
                                input: {
                                    type: 'number',
                                    endAdornment: <Person2Outlined />
                                }
                            }} onChange={(e) => { setSeat(parseInt(e.target.value, 10))}} variant={'outlined'} size={'small'} fullWidth />
                        </Grid>
                        <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'left'} className='mt-2'>
                            <div className='text-2xl mb-3'>
                                Description
                            </div>
                            <div>
                                <textarea onChange={(e) => { setDescription(e.target.value)}} className='peer h-full min-h-[100px] w-full border p-3' placeholder='Please input description' />
                            </div>
                        </Grid>

                        <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'right'} className='mt-2'>
                            <Button variant={'contained'} size={'large'} startIcon={<SaveOutlined />} color={'primary'} onClick={() => handleSubmit()}>Save</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}