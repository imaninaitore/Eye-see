import { useAuth } from '@/context/AuthContext'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const { register } = useAuth;
    const [formData, setFormData] = useState({name:'',email:'',password:'', confirmedPassword:''});
    const [error,settError] =useState('');
    const [isSubmitting,setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };
   
    const handleSubmit 
  
    
}

return (
        <div>
            <h1>hi !</h1>
        </div>
  )