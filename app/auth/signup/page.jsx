'use client';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import * as Yup from 'yup'; 
import { useRouter } from 'next/navigation';
import { toast } from 'sonner'; 
import Link from 'next/link';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      await validationSchema.validate({ email, password }, { abortEarly: false });

      const res = await createUserWithEmailAndPassword(email, password);
      if (res) {

        setEmail('');
        setPassword('');
        toast.success('Account created successfully!');
        router.push('/auth/signin');

      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setError(err.errors[0]);
      } else {
        console.error(err);
        setError('An error occurred during sign-up. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">Create Account</h1>

        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        
        <div className="relative mb-4">
          <input 
            type={showPassword ? 'text' : 'password'}  
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-3 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          />
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)} 
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        
        <button 
          onClick={handleSignUp}
          className="w-full p-3 bg-indigo-600 rounded mb-[10px] text-white hover:bg-indigo-500"
        >
          Sign Up
        </button>
<span className="text-white">All ready have account  
  <Link href="/auth/signin" className="text-blue-500"> Login</Link></span>
        {error && (
          <p className="text-red-500 mt-4 text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default SignUp;
