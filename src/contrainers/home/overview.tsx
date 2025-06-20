

import { Delete, Person2Outlined } from '@mui/icons-material';
import { Grid, Card, CardContent, Divider, Button } from '@mui/material';
import ConfirmDelete from '../../components/confirm-delete';
import { useEffect, useState } from 'react';

export default function Overview() {
    const [open, setOpen] = useState<boolean>(false);
    const [deleteName, setDeleteName] = useState<string>('');
    const [data, setData] = useState<string[]>([])

    useEffect(() => {
        setData(['1', '2', '3'])
    }, [])
    const confirmDeleteAction = (isConfirm: boolean) => {
        console.log({ isConfirm });
        setOpen(false)
    }
    const handleDelete = (name: string) => {
        setDeleteName(name)
        setOpen(true)
    }
    return (
        <>
            <Grid container spacing={1}>
                <ConfirmDelete open={open} setOpen={setOpen} message={deleteName} confirm={confirmDeleteAction} />
                {data.map((item: string) => (
                    <div key={item}>
                        <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }}>
                            <Card elevation={1} className='p-4'>
                                <CardContent>
                                    <Grid container>
                                        <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'left'}>
                                            <div className='text-[32px] font-bold text-[#1692EC]'>
                                                Concert Name {item}
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'left'} className='mt-2'>
                                        <Divider />
                                    </Grid>

                                    <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'left'} className='mt-2'>
                                        <div className='text-2xl'>
                                            Lorem ipsum dolor sit amet consectetur. Elit purus nam gravida porttitor nibh urna sit ornare a. Proin dolor morbi id ornare aenean non. Fusce dignissim turpis sed non est orci sed in. Blandit ut purus nunc sed donec commodo morbi diam scelerisque.
                                        </div>
                                    </Grid>
                                    <Grid container className='mt-3'>
                                        <Grid size={{ lg: 2, xl: 2, md: 2, sm: 2, xs: 2 }} textAlign={'left'} className='mt-2'>
                                            <span className='mr-2 text-2xl'>
                                                <Person2Outlined style={{ width: '32px', height: '32px' }} />
                                            </span>
                                            <span className='text-2xl'>500</span>
                                        </Grid>

                                        <Grid size={{ lg: 10, xl: 10, md: 10, sm: 10, xs: 10 }} textAlign={'end'} className='mt-2'>
                                            <Button
                                                size={'large'}
                                                style={{ textTransform: 'none' }}
                                                variant={'contained'}
                                                startIcon={<Delete />}
                                                color={'error'}
                                                onClick={() => handleDelete(`Consert name a`)}
                                            >Delete</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </div>
                ))}
            </Grid>
        </>
    )
}