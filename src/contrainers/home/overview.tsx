/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import { Delete, Person2Outlined } from '@mui/icons-material';
import { Grid, Card, CardContent, Divider, Button } from '@mui/material';
import ConfirmDelete from '../../components/confirm-delete';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/store';
import { getConsert, reserveConsert } from '../../services/consert.service'

export default function Overview() {
    const [open, setOpen] = useState<boolean>(false);
    const [deleteName, setDeleteName] = useState<string>('');
    const [data, setData] = useState<string[]>([]);
    const [uuid, setUuid] = useState('')

    const role = useSelector((state: RootState) => state.user.role)

    useEffect(() => {
        // setData(['1', '2', '3'])
        listConsert();
    }, [])

    async function listConsert() {
        const response = await getConsert();
        setData(response.data)
    }

    useEffect(() => {
        console.log({ role });

    }, [role])
    const confirmDeleteAction = (isConfirm: boolean) => {
        console.log({ isConfirm, delete: uuid });
        setOpen(false)
    }
    const handleDelete = (name: string, remove_uuid: string) => {
        setDeleteName(name)
        setUuid(remove_uuid)
        setOpen(true)
    }

    const handleReserve = async (uuid: string) => {
        console.log('handleReserve: ', uuid);
        await reserveConsert(uuid)
    }

    const handleCancel = (uuid: string) => {
                console.log('handleCancel: ', uuid);

    }
    return (
        <>
            <Grid container spacing={1}>
                <ConfirmDelete open={open} setOpen={setOpen} message={deleteName} confirm={confirmDeleteAction} />
                {data.map((item: any) => (
                    <div key={item.uuid} className='w-full'>
                        <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }}>
                            <Card elevation={1} className='p-4'>
                                <CardContent>
                                    <Grid container>
                                        <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'left'}>
                                            <div className='text-[32px] font-bold text-[#1692EC]'>
                                                Concert Name {item.name}
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'left'} className='mt-2'>
                                        <Divider />
                                    </Grid>

                                    <Grid size={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }} textAlign={'left'} className='mt-2'>
                                        <div className='text-2xl'>
                                            {item.description}
                                        </div>
                                    </Grid>
                                    <Grid container className='mt-3'>
                                        <Grid size={{ lg: 2, xl: 2, md: 2, sm: 2, xs: 2 }} textAlign={'left'} className='mt-2'>
                                            <span className='mr-2 text-2xl'>
                                                <Person2Outlined style={{ width: '32px', height: '32px' }} />
                                            </span>
                                            <span className='text-2xl'>{item.seat}</span>
                                        </Grid>

                                        <Grid size={{ lg: 10, xl: 10, md: 10, sm: 10, xs: 10 }} textAlign={'end'} className='mt-2'>
                                            {role === 'Admin' ? <>
                                                <Button
                                                    size={'large'}
                                                    style={{ textTransform: 'none' }}
                                                    variant={'contained'}
                                                    startIcon={<Delete />}
                                                    color={'error'}
                                                    onClick={() => handleDelete(item.name, item.uuid)}
                                                >Delete</Button>
                                            </> : <>
                                                <Button
                                                    size={'large'}
                                                    variant={'contained'}
                                                    color={'primary'}
                                                    onClick={() => handleReserve(item.uuid)}
                                                >Reserve</Button>


                                                <Button
                                                    size={'large'}
                                                    variant={'contained'}
                                                    color={'error'}
                                                    onClick={() => handleCancel(item.uuid)}
                                                >Cancel</Button>
                                            </>}
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