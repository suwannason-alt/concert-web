/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import { Delete, Person2Outlined } from '@mui/icons-material';
import { Grid, Card, CardContent, Divider, Button } from '@mui/material';
import ConfirmDelete from '../../components/confirm-delete';
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/store';
import { getConsert, reserveConsert, getHistory, deleteConcert, cancelConsert } from '../../services/consert.service'

export default function Overview() {
    const [open, setOpen] = useState<boolean>(false);
    const [deleteName, setDeleteName] = useState<string>('');
    const [data, setData] = useState<any[]>([]);
    const [history, setHistory] = useState<any[]>([])
    const [uuid, setUuid] = useState('')

    const role = useSelector((state: RootState) => state.user.role)

    useEffect(() => {
        listConsert();
    }, [])

    async function listConsert() {
        const response = await getConsert();
        setData(response.data)
    }

    async function listHistory() {
        const respopnse = await getHistory()
        setHistory(respopnse.data)
    }

    useEffect(() => {
        if (role === 'User') {
            listHistory();
        }

    }, [role])

    const renderUserButton = (concert_uuid: string) => {
        const consert_his = history.find(item => item.concert_uuid === concert_uuid);
        if (consert_his) {
            if (consert_his.action === 'Reserve') {
                return (
                    <Button
                        size={'large'}
                        variant={'contained'}
                        color={'error'}
                        onClick={() => handleCancel(concert_uuid)}
                    >Cancel</Button>
                )
            }
        }
        return (
            <Button
                size={'large'}
                variant={'contained'}
                color={'primary'}
                onClick={() => handleReserve(concert_uuid)}
            >Reserve</Button>
        )
    }
    const confirmDeleteAction = async (isConfirm: boolean) => {
        setOpen(false)
        if (isConfirm === true) {
            await deleteConcert(uuid)
            await Promise.all([
                listConsert(),
                listHistory(),
            ])
        }
    }
    const handleDelete = (name: string, remove_uuid: string) => {
        setDeleteName(name)
        setUuid(remove_uuid)
        setOpen(true)
    }

    const handleReserve = async (uuid: string) => {
        await reserveConsert(uuid)
        await Promise.all([
            listConsert(),
            listHistory(),
        ])
    }

    const handleCancel = async (uuid: string) => {
        await cancelConsert(uuid)
                await Promise.all([
            listConsert(),
            listHistory(),
        ])
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
                                            </> :
                                                <Fragment>
                                                    {renderUserButton(item.uuid)}
                                                </Fragment>
                                            }
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