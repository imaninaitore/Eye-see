import { useAuth } from '@/context/AuthContext'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

export const Register = () => {
    const { register } = useAuth;
    const [formData, setFormData] = useState({name:'',email:'',password:'', confirmPassword:''});
    const [error,settError] =useState('');
    const [isSubmitting,setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };
   
    const handleSubmit  = async (e) => {
        e.preventDefault();
        setError('');
 
    if (formData.password !== formData.confirmPassword ) {
        setError('passwords do not match')
    }
     
     setIsSubmitting(true);

    try {
      // Connect your actual endpoint here:
      // const res = await fetch('/api/v1/auth/register', { ... })

      await new Promise((resolve) => setTimeout(resolve, 1200));
      const fakeToken = "jwt-access-token-example";
      const fakeUser = { id: "u-secure-2", email: formData.email, name: formData.name };

      register(fakeToken, fakeUser);
      navigate('/login')
    } catch (err) {
      setError(err.message || 'Failed to create an account. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
};

return (
        <div>
            <h1>hi !</h1>
        </div>
  )

}