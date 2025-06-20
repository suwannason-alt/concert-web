
import { Card, CardContent, Grid } from '@mui/material';
import { PersonOutline, CancelOutlined } from '@mui/icons-material';

export default function HomeDashboard() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid size={{ lg: 4, xl: 4, md: 4, sm: 4, xs: 12 }}>
                    <Card elevation={2}>
                        <CardContent className='bg-[#0070A4]'>
                            <Grid container>
                                <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'center'}>
                                    <PersonOutline className='text-white' style={{ width: '40px', height: '40px' }} />
                                </Grid>
                                <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'center'}>
                                    <div className='text-2xl text-white'>
                                        Total of seats
                                    </div>
                                </Grid>
                                <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'center'}>
                                    <div className='text-6xl text-white'>
                                        500
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ lg: 4, xl: 4, md: 4, sm: 4, xs: 12 }}>
                    <Card elevation={2}>
                        <CardContent className='bg-[#00A58B]'>
                            <Grid container>
                                <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'center'}>
                                    <PersonOutline className='text-white' style={{ width: '40px', height: '40px' }} />
                                </Grid>
                                <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'center'}>
                                    <div className='text-2xl text-white'>
                                        Reserve
                                    </div>
                                </Grid>
                                <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'center'}>
                                    <div className='text-6xl text-white'>
                                        500
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ lg: 4, xl: 4, md: 4, sm: 4, xs: 12 }}>
                    <Card elevation={2}>
                        <CardContent className='bg-[#E84E4E]'>
                            <Grid container>
                                <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'center'}>
                                    <CancelOutlined className='text-white' style={{ width: '40px', height: '40px' }} />
                                </Grid>
                                <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'center'}>
                                    <div className='text-2xl text-white'>
                                        Cancel
                                    </div>
                                </Grid>
                                <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'center'}>
                                    <div className='text-6xl text-white'>
                                        500
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}