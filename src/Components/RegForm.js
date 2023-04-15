import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import title from '../images/Title.png';
import {useNavigate} from 'react-router-dom';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [data,setData] = useState({});
    const [checkbox,setCheckbox] = useState("");

    const onsubmit = (formdata) => {
        console.log(formdata)
        setData(formdata)
        if(!formdata.chooseCb)
            setCheckbox("*select privacy and policy")
        else
            setCheckbox("")
        if(formdata.name!=='' && formdata.username!=='' && formdata.email!=='' && formdata.mobilenumber!=='' && formdata.chooseCb===true)
            navigate('/entertainment');
    }
    console.log(data)
    localStorage.setItem("userdetails",JSON.stringify(data))

    return (
        <div className='page'>
            <div className='inner-component1'>
                <div className='inner-comp-div'>
                    <div style={{fontSize: "18px", }}>Already have an account?&nbsp;&nbsp;&nbsp;
                        <button>Login</button>
                    </div>
                    <div className='lower-text'>Discover new things on Superapp</div>
                </div>
            </div>
            <div className="inner-component2">
                <div className='form'>
                    <div style={{ textAlign: "center", }}><img src={title} alt="alternate" style={{ width: "180px", height: "60px" }} />
                        <p>Create your account</p><br></br>
                        <p>Email  |  Google</p><br></br>
                    </div>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <input type="text" placeholder='Name' className='input' {...register("name", {
                            required: true,
                            minLength: {
                                value: 5,
                                message: "*enter full name",
                            },
                            pattern: {
                                value: /^(?!\s*$)[-a-zA-Z ]*$/,
                                message: "*enter valid name",
                            },
                        })} />
                        <span>{errors.name?.message}</span>
                        {errors.name?.message === '' ? <span>*enter valid name</span> : <span></span>}

                        <input type="text" placeholder='Username' className='input' {...register("username", {
                            required: true,
                            minLength: {
                                value: 4,
                                message: "*enter full username",
                            },
                            pattern: {
                                value: /^(?!\s*$)[-a-zA-Z ]*$/,
                                message: "*enter valid name",
                            },
                        })} />
                        <span>{errors.username?.message}</span>
                        {errors.username?.message === '' ? <span>*enter valid username</span> : <span></span>}

                        <input type="email" placeholder='Email' className='input' {...register("email", {
                            required: true,
                            min: {
                                value: 5,
                                message: "enter valid email"
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
                                message: "*enter valid email"
                            },
                        })} />
                        <span>{errors.email?.message}</span>
                        {errors.email?.message === '' ? <span>*enter valid email</span> : <span></span>}

                        <input type="text" placeholder='Mobilenumber' className='input' {...register("mobilenumber", {
                            required: true,
                            patter:{
                                value:/^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/,
                                message:"*enter valid number",
                            },
                        })} />
                        <span>{errors.mobilenumber?.message}</span>
                        {errors.mobilenumber?.message === '' ? <span>*enter mobile number</span> : <span></span>}

                        <input type="checkbox" name="selectCheckbox" id="selectCheckbox" {...register('chooseCb')} />&nbsp;
                        <label htmlFor="chooseCb" style={{color:"#7C7C7C"}} id='p-tag'>Share my registration data with Superapp</label>
                        <span>{checkbox}</span><br></br><br></br>

                        <button type="submit" style={{ width: "105%" }}>SIGN UP</button><br></br><br></br>
                        <p id='p-tag'>By clicking on Sign up. you agree to Superapp <span style={{ color: "#72DB73" }}>Terms and Conditions of Use</span></p><br></br>
                        <p id='p-tag'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span style={{ color: "#72DB73" }}>Privacy Policy</span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;