import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const handleSignUp=data=>{
      console.log(data)
    }

    return (
        <div className=' flex justify-center items-center my-16  text-white' >
        <div data-theme="night" className='w-96 p-7 rounded-lg'>
            <h2 className='text-3xl text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
              
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {required: 'Name is Required'})} className="input input-bordered w-full max-w-xs"/> 
                    {errors.name && <p role="alert" className='text-red-500'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {required: "Email Address is required"})} 
                    className="input input-bordered w-full max-w-xs"/> 
                    {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full mb-5 max-w-xs">
                    <label className="label"><span className="label-text">Password</span></label>
                    <input type="password" {...register("password", {required: "Password is required", minLength: {value: 6, message: 'password must be 6 character longer'}})} className="input input-bordered w-full max-w-xs"/>  
                    {errors.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>}
                </div>
                <input className='w-full btn btn-secondary' value='SIGN UP' type="submit" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-primary'>Please Login</Link></p>
            <div className='divider'>OR</div>
            {/* {signUpError && <p className='text-red-900'>{signUpError}</p>} */}
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default SignUp;