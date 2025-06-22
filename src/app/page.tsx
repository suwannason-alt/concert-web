
'use client'

import { useEffect } from 'react';
import MainLayout from './main-layout';
import { useRouter } from 'next/navigation';

export default function HomeLayout() {
    const router = useRouter()

    useEffect(() => {
      router.push('/home')
    }, [])

  return (
    <>
      <MainLayout>{null}</MainLayout>
    </>
  );
}