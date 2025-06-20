
'use client'
import { useState } from 'react';
import HomeDashboard from './dashboard';
import Overview from './overview';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';
import CreateConcert from './create';

export default function RootHome() {
    const [value, setValue] = useState('1')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <>
            <div>
                <HomeDashboard />
            </div>
            <div className='mt-4'>
                <TabContext value={value}>
                    <TabList onChange={handleChange}>
                        <Tab label={'Overview'} value={'1'} />
                        <Tab label={'Create'} value={'2'} />
                    </TabList>

                    <TabPanel value={'1'}>
                        <div className='mt-4'>
                            <Overview />
                        </div>
                    </TabPanel>

                    <TabPanel value={'2'}>
                        <div>
                            <CreateConcert />
                        </div>
                    </TabPanel>
                </TabContext>
            </div>
        </>
    )
}