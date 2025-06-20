import { Person2Outlined, SaveOutlined } from '@mui/icons-material';
import {
    Button,
    Card, CardContent,
    Divider,
    Grid,
    TextField
} from '@mui/material';

export default function CreateConcert() {
    return (
        <>
            <Card>
                <CardContent>
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
                            <TextField variant={'outlined'} size={'small'} fullWidth placeholder='Please input concert name' />
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
                            }} variant={'outlined'} size={'small'} fullWidth />
                        </Grid>
                        <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'left'} className='mt-2'>
                            <div className='text-2xl mb-3'>
                                Description
                            </div>
                            <div>
                                <textarea className='peer h-full min-h-[100px] w-full border p-3' placeholder='Please input description' />
                            </div>
                        </Grid>

                        <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'right'} className='mt-2'>
                            <Button variant={'contained'} size={'large'} startIcon={<SaveOutlined />} color={'primary'}>Save</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}