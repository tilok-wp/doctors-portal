import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loding from '../../shared/Loding/Loding';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.displayName });
        console.log(data);
        // navigate('/appionment')
    }
    const [token] = useToken(gUser || user)

    const navigate = useNavigate()
    if (gLoading || loading || updating) {
        return <Loding></Loding>
    }
    let errorMessageContent
    if (error || gError || updateError) {
        errorMessageContent = <p className='text-red-600 py-3'>{error?.message || gError?.message || updateError.message}  </p>
    }

    if (token) {
        localStorage.setItem('accessToken', token)
        navigate('/appionment')
    }
    // if (gUser || user) {
    //     console.log(gUser || user)
    //     // navigate('/appionment')
    // }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-3xl text-center font-bold">Register </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label" htmlFor='displayName'>
                                <span className="label-text">Full name</span>
                            </label>

                            <input
                                type="text"
                                name='displayName'
                                placeholder="Write email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("displayName", {
                                    required: {
                                        value: true,
                                        message: 'Full name is required '
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.displayName?.type === 'required' && <span className="label-text text-red-600">{errors.displayName.message}</span>}


                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label" htmlFor='email'>
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                type="email"
                                name='email'
                                placeholder="Write email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required '
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please provide valid email' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text text-red-600">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label" htmlFor='password'>
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                type="password"
                                name='password'
                                placeholder="Write password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    pattern: {
                                        value: /(?=.*?[0-9])/,
                                        message: 'At least one digit' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text text-red-600">{errors.password.message}</span>}

                            </label>
                        </div>

                        <input type="submit" value='Register' className='btn w-full max-w-xs text-white' />
                    </form>
                    {errorMessageContent}
                    <p>Already register? <Link className='text-secondary font-bold' to='/login'>Login</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-success">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;