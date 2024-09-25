// pages/auth.js
'use client'
import SignInForm from '@/components/forms/sign-in';
import useAuth from '@/hooks/authentication';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const Auth = () => {
  const { isPending, setValue, onAuth, register, errors } = useAuth();
  const params = useSearchParams();

  useEffect(() => {
    const queryCode = params.get('pw');
    const storedCode = localStorage.getItem('code');

    if (queryCode) {
      setValue('code', queryCode);
    } else if (storedCode) {
      setValue('code', storedCode);
    }
  }, [params]);

  return (
    <div className='max-w-screen-sm m-auto'>
      <SignInForm />
    </div>
  );
};

export default Auth;