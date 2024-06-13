import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { useFormik } from "formik";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Button, Steps, theme } from 'antd';
import { SiTicktick } from "react-icons/si";
import { MdErrorOutline } from "react-icons/md";

const validate = (values) => {
    const errors = {};

    if (!values.fname) {
        errors.fname = "Required";
    } else if (!/^[0-9a-zA-Z].*/i.test(values.fname)) {
        errors.fname = "Invalid username";
    }

    if (!values.email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    if (!values.phone) {
        errors.phone = "Required";
    } else if (
        !/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i.test(values.phone)
    ) {
        errors.phone = "Enter max 8 Characters";
    }


    if (!values.password) {
        errors.password = "Required";
    } else if (values.length < 8) {
        errors.password = "*Password must be 8 characters long.";
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(values.password)) {
        errors.password = "*Invaild Password";
    }
    return errors;
};

const Emailform = () => {
    return (
        <>
            <h3 className="text-center text-[29px] font-[500] text-[#1E2328] landing-[19px] mb-3">Email Verification</h3>
            <p className="py-1 text-center text-[14px] font-[500] text-[#898B8F] landing-[19px] w-80 m-auto">Enter verification code sent to test2389@gmail.com</p>
            <div className="modal-action flex items-center justify-center max-h-96">
                <form method="dialog" className="flex items-center justify-center flex-col">
                    <div className="sets mb-5">
                        <input type="text" value="5" className="mx-2 bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]" style={{ width: '58px', height: '80px' }} />
                        <input type="text" value="0" className="mx-2  bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]" style={{ width: '58px', height: '80px' }} />
                        <input type="text" value="3" className="mx-2  bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]" style={{ width: '58px', height: '80px' }} />
                        <input type="text" value="1" className="mx-2  bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]" style={{ width: '58px', height: '80px' }} />
                        <input type="text" value="8" className="mx-2  bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]" style={{ width: '58px', height: '80px' }} />
                        <input type="text" value="3" className="mx-2  bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]" style={{ width: '58px', height: '80px' }} />
                    </div>
                </form>
            </div>
        </>
    )
}

const Userform = () => {
    return (
        <>

            <h3 className="text-center text-[29px] font-[500] text-[#1E2328] landing-[19px] mb-3">User Verification</h3>
            <p className="py-1 text-center text-[14px] font-[500] text-[#898B8F] landing-[19px] w-80 m-auto">Enter the confirmation code displayed in the google autenticator app</p>
            <div className="modal-action flex items-center justify-center max-h-96">
                <form method="dialog" className="flex items-center justify-center flex-col">
                    <div className="sets mb-5">
                        <input type="text" value="5" className="mx-2 bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]" style={{ width: '58px', height: '80px' }} />
                        <input type="text" value="0" className="mx-2  bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]" style={{ width: '58px', height: '80px' }} />
                        <input type="text" value="3" className="mx-2  bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]" style={{ width: '58px', height: '80px' }} />
                        <input type="text" value="1" className="mx-2  bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]" style={{ width: '58px', height: '80px' }} />
                        <input type="text" value="8" className="mx-2  bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]" style={{ width: '58px', height: '80px' }} />
                        <input type="text" value="3" className="mx-2  bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]" style={{ width: '58px', height: '80px' }} />
                    </div>
                </form>
            </div>
        </>
    )
}


const steps = [
    {
        title: '',
        content: <Emailform />
    },
    {
        title: '',
        content: <Userform />
    },
];



const Manageadmin = () => {
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(<FaRegEyeSlash />);

    const handleToggle = () => {
        if (type === "password") {
            setIcon(<IoEyeOutline />);
            setType("text");
        } else {
            setIcon(<FaRegEyeSlash />);
            setType("password");
        }
    };
    const formik = useFormik({
        initialValues: {
            fname: "",
            email: "",
            phone: "",
            password: ""
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const navigate = useNavigate();

    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    const contentStyle = {
        lineHeight: '20px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        borderRadius: token.borderRadiusLG,
        marginTop: 16,
    };

    return (
        <>
            <div className="content-wrapper bg-base-200 h-screen">
                <div className="flex items-center justify-between">
                    <div aria-label="Breadcrumbs" className="breadcrumbs p-0">
                        <ul>
                            <li className="text-[18px]">
                                Manage Admin
                            </li>
                        </ul>
                    </div>
                    <div className='search-adminBox flex items-center justify-between w-96'>
                        <div className='searchBtn text-[22px] cursor-pointer'><CiSearch /> </div>
                        <div className='dropMenu'>
                            <select className="select select-bordered w-full max-w-xs rounded-[10px] focus:outline-none">
                                <option disabled selected>View By Category</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>
                        <div className='adminBtn flex'>
                            {/* First Button */}
                            <div>
                                <button className="btn btn-neutral font-bold py-2 px-4 rounded-[10px] flex items-center justify-between text-[14px] mr-4" onClick={() => document.getElementById('my_modal_addadmin').showModal()}>Add Admin <FaPlus className='pl-2 text-[24px]' /></button>
                                <dialog id="my_modal_addadmin" className="modal">
                                    <div className="modal-box bg-base-200 max-w-[50rem] h-full">
                                        <form method="dialog">
                                            <button className="btn text-[20px] btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <div className='flex items-center justify-center flex-col'>
                                            <div className='profile-image'>
                                                <img src='/images/avtar-3.avif' alt='profile-avtar' className='w-24 h-24 border border-1 border-current rounded-full' />
                                                <div className='tex-[15px] font-[700] landing-[15px] text-center mt-2'> Add Photo</div>
                                            </div>
                                            {/*------- Form start ------*/}
                                            <div className="mt-3 w-3/4">
                                                <form onSubmit={formik.handleSubmit}>
                                                    <div>

                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="text-[#B6B8BB] dark:white text-[17px] font-[500] landing-[19px]">
                                                                    Full Name
                                                                </span>
                                                            </label>
                                                            <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                                                                <input
                                                                    type='text'
                                                                    className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                                                    name="fname"
                                                                    onChange={formik.handleChange}
                                                                    value={formik.values.fname}
                                                                />
                                                            </div>
                                                            <span className="h-[2px] mt-2 text-rose-600 text-[12px]">
                                                                {formik.errors.fname ? (
                                                                    <div>{formik.errors.fname}</div>
                                                                ) : null}
                                                            </span>
                                                        </div>

                                                        <div className='flex items-center justify-between'>
                                                            <div className="form-control mt-3 w-1/2 mr-4">
                                                                <label className="label">
                                                                    <span className="text-[#B6B8BB] text-[17px] font-[500] landing-[19px]">
                                                                        Email
                                                                    </span>
                                                                </label>
                                                                <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                                                                    <input
                                                                        className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                                                        name="email"
                                                                        type="email"
                                                                        onChange={formik.handleChange}
                                                                        value={formik.values.email}
                                                                    />
                                                                </div>
                                                                <span className="h-[2px] mt-2 text-rose-600 text-[12px]">
                                                                    {formik.errors.email ? (
                                                                        <div>{formik.errors.email}</div>
                                                                    ) : null}
                                                                </span>
                                                            </div>

                                                            <div className="form-control mt-3 w-1/2 ml-4">
                                                                <label className="label">
                                                                    <span className="text-[#B6B8BB] text-[17px] font-[500] landing-[19px]">
                                                                        Phone
                                                                    </span>
                                                                </label>
                                                                <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                                                                    <input
                                                                        className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                                                        id="telNo"
                                                                        name="phone"
                                                                        type="tel"
                                                                        size="20"
                                                                        minlength="9"
                                                                        maxlength="14"
                                                                        onChange={formik.handleChange}
                                                                        value={formik.values.phone}
                                                                    />
                                                                </div>

                                                                <span className="h-[2px] mt-3 text-rose-600 text-[12px]">
                                                                    {formik.errors.phone ? (
                                                                        <div>{formik.errors.phone}</div>
                                                                    ) : null}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className='flex items-center justify-between'>
                                                            <div className="form-control mt-3 w-1/2 mr-4">
                                                                <label className="label">
                                                                    <span className="text-[#B6B8BB] text-[17px] font-[500] landing-[19px]">
                                                                        Set Password
                                                                    </span>
                                                                </label>
                                                                <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                                                                    <input
                                                                        className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                                                        name="password"
                                                                        type="password"
                                                                        onChange={formik.handleChange}
                                                                        value={formik.values.password}
                                                                    />
                                                                </div>
                                                                <span className="h-[2px] mt-2 text-rose-600 text-[12px]">
                                                                    {formik.errors.password ? (
                                                                        <div>{formik.errors.password}</div>
                                                                    ) : null}
                                                                </span>
                                                            </div>

                                                            <div className="form-control mt-3 w-1/2 ml-4">
                                                                <label className="label">
                                                                    <span className="text-[#B6B8BB] text-[17px] font-[500] landing-[19px]">
                                                                        Confirm Password
                                                                    </span>
                                                                </label>
                                                                <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                                                                    <input
                                                                        className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                                                        name="password"
                                                                        type={type}
                                                                        onChange={formik.handleChange}
                                                                        value={formik.values.password}
                                                                    />
                                                                    <span onClick={handleToggle}>{icon}</span>
                                                                </div>

                                                                <span className="h-[2px] mt-2 text-rose-600 text-[12px]">
                                                                    {formik.errors.password ? (
                                                                        <div>{formik.errors.password}</div>
                                                                    ) : null}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-6">
                                                        <button
                                                            type="submit"
                                                            className="btn text-white gap-2 btn-neutral btn-block rounded text-[17px] font-[500] landing-[19px]" onClick={() => document.getElementById('my_modal_adminVertification').showModal()}
                                                        >
                                                            Submit
                                                        </button>
                                                        <dialog id="my_modal_adminVertification" className="modal ">
                                                            <div className="modal-box max-w-[34rem]">
                                                                <Steps current={current} items={items} />
                                                                <div style={contentStyle}>{steps[current].content}</div>
                                                                <div
                                                                    style={{
                                                                        marginTop: 24,
                                                                    }}
                                                                >
                                                                    {current < steps.length - 1 && (
                                                                        <div className='flex items-center justify-center flex-col max-w-[26.5rem] m-auto'>
                                                                            <Button className="btn bg-[#000] w-full text-[#fff] text-[17px] font-[500] rounded" onClick={() => next()}>
                                                                                Submit
                                                                            </Button>
                                                                            <span className="countdown mt-4 text-base-content/70  text-[16px] landing-[19px] font-[500]">
                                                                                <span style={{ "--value": 0 }}></span>:
                                                                                <span style={{ "--value": 0 }}></span>
                                                                            </span>

                                                                            <div className="mt-3">
                                                                                <h3 className="text-base-content/70  ml-2 font-[500] text-[16px] landing-[19px]">Didn’t Received OTP? <span className="text-base-content ml-2 font-[500] text-[16px] landing-[19px]">Resend</span></h3>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                    {current === steps.length - 1 && (
                                                                        <div className='flex items-center justify-center flex-col max-w-[26.5rem] m-auto'>
                                                                            <Button className='btn bg-[#000] w-full text-[#fff] text-[17px] font-[500] rounded' type="primary" onClick={() => document.getElementById('my_modal_adminSuccess').showModal()}>
                                                                                Submit
                                                                            </Button>
                                                                            <dialog id="my_modal_adminSuccess" className="modal">
                                                                                <div className="modal-box py-16 px-12 bg-[#30BF89] max-w-[40rem] h-[30rem] flex flex-col items-center justify-center">
                                                                                    <div className="text-[#fff]  text-[90px] flex items-center justify-center"><SiTicktick /></div>
                                                                                    <h3 className="font-bold text-center text-[27px] font-[700] text-[#fff] landing-[27px] mt-5">Success</h3>
                                                                                </div>
                                                                            </dialog>

                                                                            <span className="countdown mt-4 text-[#000] text-[16px] landing-[19px] font-[500]">
                                                                                <span style={{ "--value": 0 }}></span>:
                                                                                <span style={{ "--value": 0 }}></span>
                                                                            </span>

                                                                            <div className="mt-3">
                                                                                <h3 className="text-[#8C8C8C] ml-2 font-[500] text-[16px] landing-[19px]">Didn’t Received OTP? <span className="text-[#000] ml-2 font-[500] text-[16px] landing-[19px]">Resend</span></h3>
                                                                            </div>
                                                                        </div>

                                                                    )}
                                                                </div>
                                                            </div>
                                                        </dialog>
                                                    </div>
                                                </form>
                                            </div>
                                            {/*------- Form end ------*/}
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Start */}

                <div className="mt-6">
                    <div className="col-12">
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead className='border-b-2 border-base-300'>
                                    <tr className='text-[#B1B1B1] text-[15px] font-[700] landing-[35px]'>
                                        <th className='w-2'>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th >Admin</th>
                                        <th>Email</th>
                                        <th>Admin Phone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <br />
                                <tbody className='mt-3'>
                                    {/* row 1 */}
                                  
                                    <tr className='shadow-[0_3.5px_5.5px_0_#00000005] mb-3'>
                                        <th className='shadow-none cursor-pointer' onClick={()=>navigate('/fleets')}>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                    
                                        <td className='bg-base-100 rounded-l-[15px] cursor-pointer' onClick={()=>navigate('/fleets')}>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" className='border-2 border-[#CBCBCB] rounded-[18px]' />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-base-500 font-[900] text-[19px] landing-[35px]">Vicken</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-[16px] font-[500] landing-[35px] bg-base-100 cursor-pointer' onClick={()=>navigate('/fleets')}>
                                            Lorem Ipsum
                                        </td>
                                        <td className='text-[16px] font-[500] landing-[35px] bg-base-100 cursor-pointer' onClick={()=>navigate('/fleets')}>
                                            9988776655
                                        </td>
                                        <td className='bg-base-100 rounded-r-[15px] w-28'>
                                            <div className='flex'>
                                                <button className="flex items-center justify-start text-[16px] font-[500] landing-[35px] text-neutral-500 mr-2" onClick={(e) => { e.stopPropagation(); document.getElementById('my_modal_edit').showModal()}}>Edit <span className='pl-1'> <MdOutlineModeEdit /></span></button>
                                                <dialog id="my_modal_edit" className="modal">
                                                    <div className="modal-box bg-base-200 max-w-[50rem]">
                                                        <form method="dialog">
                                                            <button className="btn text-[20px] btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                        </form>
                                                        <div className='flex items-center justify-center flex-col'>
                                                            <div className='profile-image'>
                                                                <img src='/images/avtar-3.avif' alt='profile-avtar' className='w-24 h-24 border border-1 border-current rounded-full' />
                                                                <div className='tex-[15px] font-[700] landing-[15px] text-center mt-2'> Upload New Picture</div>
                                                            </div>
                                                            {/*------- Form start ------*/}
                                                            <div className="mt-3 w-3/4">
                                                                <form onSubmit={formik.handleSubmit}>
                                                                    <div>

                                                                        <div className="form-control">
                                                                            <label className="label">
                                                                                <span className="text-[#B6B8BB] dark:white text-[17px] font-[500] landing-[19px]">
                                                                                    Full Name
                                                                                </span>
                                                                            </label>
                                                                            <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                                                                                <input
                                                                                    type='text'
                                                                                    className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                                                                    name="fname"
                                                                                    onChange={formik.handleChange}
                                                                                    value={formik.values.fname}
                                                                                />
                                                                            </div>
                                                                            <span className="h-[2px] mt-2 text-rose-600 text-[12px]">
                                                                                {formik.errors.fname ? (
                                                                                    <div>{formik.errors.fname}</div>
                                                                                ) : null}
                                                                            </span>
                                                                        </div>

                                                                        <div className='flex items-center justify-between'>
                                                                            <div className="form-control mt-3 w-1/2 mr-4">
                                                                                <label className="label">
                                                                                    <span className="text-[#B6B8BB] text-[17px] font-[500] landing-[19px]">
                                                                                        Email
                                                                                    </span>
                                                                                </label>
                                                                                <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                                                                                    <input
                                                                                        className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                                                                        name="email"
                                                                                        type="email"
                                                                                        onChange={formik.handleChange}
                                                                                        value={formik.values.email}
                                                                                    />
                                                                                </div>
                                                                                <span className="h-[2px] mt-2 text-rose-600 text-[12px]">
                                                                                    {formik.errors.email ? (
                                                                                        <div>{formik.errors.email}</div>
                                                                                    ) : null}
                                                                                </span>
                                                                            </div>

                                                                            <div className="form-control mt-3 w-1/2 ml-4">
                                                                                <label className="label">
                                                                                    <span className="text-[#B6B8BB] text-[17px] font-[500] landing-[19px]">
                                                                                        Phone
                                                                                    </span>
                                                                                </label>
                                                                                <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                                                                                    <input
                                                                                        className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                                                                        id="telNo"
                                                                                        name="phone"
                                                                                        type="tel"
                                                                                        size="20"
                                                                                        minlength="9"
                                                                                        maxlength="14"
                                                                                        onChange={formik.handleChange}
                                                                                        value={formik.values.phone}
                                                                                    />
                                                                                </div>

                                                                                <span className="h-[2px] mt-3 text-rose-600 text-[12px]">
                                                                                    {formik.errors.phone ? (
                                                                                        <div>{formik.errors.phone}</div>
                                                                                    ) : null}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="mt-6">
                                                                        <button
                                                                            type="submit"
                                                                            className="btn text-white gap-2 btn-neutral btn-block rounded text-[17px] font-[500] landing-[19px]" onClick={() => document.getElementById('my_modal_editProfile').showModal()}
                                                                        >
                                                                            Submit
                                                                        </button>
                                                                        <dialog id="my_modal_editProfile" className="modal">
                                                            <div className="modal-box max-w-[34rem]">
                                                                <Steps current={current} items={items} />
                                                                <div style={contentStyle}>{steps[current].content}</div>
                                                                <div
                                                                    style={{
                                                                        marginTop: 24,
                                                                    }}
                                                                >
                                                                    {current < steps.length - 1 && (
                                                                        <div className='flex items-center justify-center flex-col max-w-[26.5rem] m-auto'>
                                                                            <Button className="btn bg-[#000] w-full text-[#fff] text-[17px] font-[500] rounded" onClick={() => next()}>
                                                                                Submit
                                                                            </Button>
                                                                            <span className="countdown mt-4 text-base-content/70  text-[16px] landing-[19px] font-[500]">
                                                                                <span style={{ "--value": 0 }}></span>:
                                                                                <span style={{ "--value": 0 }}></span>
                                                                            </span>

                                                                            <div className="mt-3">
                                                                                <h3 className="text-base-content/70  ml-2 font-[500] text-[16px] landing-[19px]">Didn’t Received OTP? <span className="text-base-content ml-2 font-[500] text-[16px] landing-[19px]">Resend</span></h3>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                    {current === steps.length - 1 && (
                                                                        <div className='flex items-center justify-center flex-col max-w-[26.5rem] m-auto'>
                                                                            <Button className='btn bg-[#000] w-full text-[#fff] text-[17px] font-[500] rounded' type="primary" onClick={() => document.getElementById('my_modal_adminSuccess').showModal()}>
                                                                                Submit
                                                                            </Button>
                                                                            <dialog id="my_modal_adminSuccess" className="modal">
                                                                                <div className="modal-box py-16 px-12 bg-[#30BF89] max-w-[40rem] h-[30rem] flex flex-col items-center justify-center">
                                                                                    <div className="text-[#fff]  text-[90px] flex items-center justify-center"><SiTicktick /></div>
                                                                                    <h3 className="font-bold text-center text-[27px] font-[700] text-[#fff] landing-[27px] mt-5">Success</h3>
                                                                                </div>
                                                                            </dialog>

                                                                            <span className="countdown mt-4 text-[#000] text-[16px] landing-[19px] font-[500]">
                                                                                <span style={{ "--value": 0 }}></span>:
                                                                                <span style={{ "--value": 0 }}></span>
                                                                            </span>

                                                                            <div className="mt-3">
                                                                                <h3 className="text-[#8C8C8C] ml-2 font-[500] text-[16px] landing-[19px]">Didn’t Received OTP? <span className="text-[#000] ml-2 font-[500] text-[16px] landing-[19px]">Resend</span></h3>
                                                                            </div>
                                                                        </div>

                                                                    )}
                                                                </div>
                                                            </div>
                                                        </dialog>
                                                                    </div>
                                                                </form>
                                                                <div className='passlink text-center m-8 mb-4'>
                                                                    <Link className="text-[#6B6B6B] dark:white text-[17px] font-[500] landing-[19px] hover:none" onClick={() => document.getElementById('my_modal_changepassadmin').showModal()}>Change Password</Link>
                                                                    <dialog id="my_modal_changepassadmin" className="modal">
                                                                        <div className="modal-box bg-base-200 max-w-[50rem]">
                                                                            <form method="dialog">
                                                                                <button className="btn text-[20px] btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                                            </form>
                                                                            <div className='flex items-center justify-center flex-col'>
                                                                                {/*------- Form start ------*/}
                                                                                <div className="mt-3 w-3/4">
                                                                                    <form onSubmit={formik.handleSubmit}>
                                                                                        <div>

                                                                                            <div className="form-control mt-3">
                                                                                                <label className="label">
                                                                                                    <span className="text-[#B6B8BB] dark:white text-[17px] font-[500] landing-[19px]">
                                                                                                        Password
                                                                                                    </span>
                                                                                                </label>
                                                                                                <div className="form-control flex flex-row items-center rounded-[15px] h-14 bg-base-100 px-3 shadow">
                                                                                                    <input
                                                                                                        placeholder="Password"
                                                                                                        className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                                                                                        name="password"
                                                                                                        type={type}
                                                                                                        value={formik.values.password}
                                                                                                        onChange={formik.handleChange}
                                                                                                        autoComplete="current-password"
                                                                                                    />
                                                                                                    <span onClick={handleToggle}>{icon}</span>
                                                                                                </div>
                                                                                                <span className="h-[16px] mt-3 text-[12px] text-rose-600">
                                                                                                    {formik.errors.password ? (
                                                                                                        <div>{formik.errors.password}</div>
                                                                                                    ) : null}
                                                                                                </span>
                                                                                            </div>

                                                                                            <div className="form-control mt-3">
                                                                                                <label className="label">
                                                                                                    <span className="text-[#B6B8BB] dark:white text-[17px] font-[500] landing-[19px]">
                                                                                                        New Password
                                                                                                    </span>
                                                                                                </label>
                                                                                                <div className="form-control flex flex-row items-center rounded-[15px] h-14 bg-base-100 px-3 shadow">
                                                                                                    <input
                                                                                                        placeholder="New Password"
                                                                                                        className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                                                                                        name="password"
                                                                                                        type="password"
                                                                                                    />
                                                                                                    <span onClick={handleToggle}>{icon}</span>
                                                                                                </div>
                                                                                                <span className="h-[16px] mt-3 text-[12px] text-rose-600">
                                                                                                    {formik.errors.password ? (
                                                                                                        <div>{formik.errors.password}</div>
                                                                                                    ) : null}
                                                                                                </span>
                                                                                            </div>

                                                                                            <div className="form-control mt-3">
                                                                                                <label className="label">
                                                                                                    <span className="text-[#B6B8BB] dark:white text-[17px] font-[500] landing-[19px]">
                                                                                                        Re-enter New Password
                                                                                                    </span>
                                                                                                </label>
                                                                                                <div className="form-control flex flex-row items-center rounded-[15px] h-14 bg-base-100 px-3 shadow">
                                                                                                    <input
                                                                                                        placeholder="Re-enter New Password"
                                                                                                        className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                                                                                        name="password"
                                                                                                        type="password"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="mt-6">
                                                                                            <button
                                                                                                type="submit"
                                                                                                className="btn text-white gap-2 btn-neutral btn-block rounded text-[17px] font-[500] landing-[19px]" onClick={() => document.getElementById('my_modal_adminchangePass').showModal()}
                                                                                            >
                                                                                                Submit
                                                                                            </button>
                                                                                            <dialog id="my_modal_adminchangePass" className="modal ">
                                                            <div className="modal-box max-w-[34rem]">
                                                                <Steps current={current} items={items} />
                                                                <div style={contentStyle}>{steps[current].content}</div>
                                                                <div
                                                                    style={{
                                                                        marginTop: 24,
                                                                    }}
                                                                >
                                                                    {current < steps.length - 1 && (
                                                                        <div className='flex items-center justify-center flex-col max-w-[26.5rem] m-auto'>
                                                                            <Button className="btn bg-[#000] w-full text-[#fff] text-[17px] font-[500] rounded" onClick={() => next()}>
                                                                                Submit
                                                                            </Button>
                                                                            <span className="countdown mt-4 text-base-content/70  text-[16px] landing-[19px] font-[500]">
                                                                                <span style={{ "--value": 0 }}></span>:
                                                                                <span style={{ "--value": 0 }}></span>
                                                                            </span>

                                                                            <div className="mt-3">
                                                                                <h3 className="text-base-content/70  ml-2 font-[500] text-[16px] landing-[19px]">Didn’t Received OTP? <span className="text-base-content ml-2 font-[500] text-[16px] landing-[19px]">Resend</span></h3>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                    {current === steps.length - 1 && (
                                                                        <div className='flex items-center justify-center flex-col max-w-[26.5rem] m-auto'>
                                                                            <Button className='btn bg-[#000] w-full text-[#fff] text-[17px] font-[500] rounded' type="primary" onClick={() => document.getElementById('my_modal_adminSuccess').showModal()}>
                                                                                Submit
                                                                            </Button>
                                                                            <dialog id="my_modal_adminSuccess" className="modal">
                                                                                <div className="modal-box py-16 px-12 bg-[#30BF89] max-w-[40rem] h-[30rem] flex flex-col items-center justify-center">
                                                                                    <div className="text-[#fff]  text-[90px] flex items-center justify-center"><SiTicktick /></div>
                                                                                    <h3 className="font-bold text-center text-[27px] font-[700] text-[#fff] landing-[27px] mt-5">Success</h3>
                                                                                </div>
                                                                            </dialog>

                                                                            <span className="countdown mt-4 text-[#000] text-[16px] landing-[19px] font-[500]">
                                                                                <span style={{ "--value": 0 }}></span>:
                                                                                <span style={{ "--value": 0 }}></span>
                                                                            </span>

                                                                            <div className="mt-3">
                                                                                <h3 className="text-[#8C8C8C] ml-2 font-[500] text-[16px] landing-[19px]">Didn’t Received OTP? <span className="text-[#000] ml-2 font-[500] text-[16px] landing-[19px]">Resend</span></h3>
                                                                            </div>
                                                                        </div>

                                                                    )}
                                                                </div>
                                                            </div>
                                                        </dialog>
                                                                                        </div>
                                                                                    </form>
                                                                                    <div className='passlink text-center m-8 mb-4'>
                                                                                        <Link className="text-[#6B6B6B] dark:white text-[17px] font-[500] landing-[19px] hover:none" onClick={() => document.getElementById('my_modal_changepassadmin').showModal()}>Go Back</Link>
                                                                                    </div>
                                                                                </div>
                                                                                {/*------- Form end ------*/}
                                                                            </div>
                                                                        </div>
                                                                    </dialog>
                                                                </div>
                                                            </div>
                                                            {/*------- Form end ------*/}
                                                        </div>
                                                    </div>
                                                </dialog>
                                                <button className='flex items-center justify-start text-[16px] font-[500] landing-[35px] text-neutral-500 ml-2' onClick={() => document.getElementById('my_modal_deleteadmin').showModal()}>Remove <span className='pl-1'> <RiDeleteBin6Line /></span></button>
                                                <dialog id="my_modal_deleteadmin" className="modal">
                                    <div className="modal-box flex items-center justify-center flex-col max-h-96 h-full">
                                        <form method="dialog">
                                            <button className="btn text-[22px] btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <MdErrorOutline  className='text-[7rem] text-gray-300'/>
                                        <h3 className="font-md text-[29px] font-[500] landing-[45px] mt-5 mb-2">Delete</h3>
                                        <p className="font-md pt-1 text-[15px] text-[#6e6e6e]">Do really wish to remove  </p>
                                        <span className="font-md text-[15px]">Admin</span>
                                        <div className='flex items-center justify-around w-80 mt-8'>
                                            <button className='text-[17px] font-[500] btn btn-neutral w-2/4 mr-1 rounded' onClick={() => document.getElementById('my_modal_delVertification').showModal()}>Submit</button>
                                            <dialog id="my_modal_delVertification" className="modal ">
                                                            <div className="modal-box max-w-[34rem]">
                                                                <Steps current={current} items={items} />
                                                                <div style={contentStyle}>{steps[current].content}</div>
                                                                <div
                                                                    style={{
                                                                        marginTop: 24,
                                                                    }}
                                                                >
                                                                    {current < steps.length - 1 && (
                                                                        <div className='flex items-center justify-center flex-col max-w-[26.5rem] m-auto'>
                                                                            <Button className="btn bg-[#000] w-full text-[#fff] text-[17px] font-[500] rounded" onClick={() => next()}>
                                                                                Submit
                                                                            </Button>
                                                                            <span className="countdown mt-4 text-base-content/70  text-[16px] landing-[19px] font-[500]">
                                                                                <span style={{ "--value": 0 }}></span>:
                                                                                <span style={{ "--value": 0 }}></span>
                                                                            </span>

                                                                            <div className="mt-3">
                                                                                <h3 className="text-base-content/70  ml-2 font-[500] text-[16px] landing-[19px]">Didn’t Received OTP? <span className="text-base-content ml-2 font-[500] text-[16px] landing-[19px]">Resend</span></h3>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                    {current === steps.length - 1 && (
                                                                        <div className='flex items-center justify-center flex-col max-w-[26.5rem] m-auto'>
                                                                            <Button className='btn bg-[#000] w-full text-[#fff] text-[17px] font-[500] rounded' type="primary" onClick={() => document.getElementById('my_modal_adminSuccess').showModal()}>
                                                                                Submit
                                                                            </Button>
                                                                            <dialog id="my_modal_adminSuccess" className="modal">
                                                                                <div className="modal-box py-16 px-12 bg-[#30BF89] max-w-[40rem] h-[30rem] flex flex-col items-center justify-center">
                                                                                    <div className="text-[#fff]  text-[90px] flex items-center justify-center"><SiTicktick /></div>
                                                                                    <h3 className="font-bold text-center text-[27px] font-[700] text-[#fff] landing-[27px] mt-5">Success</h3>
                                                                                </div>
                                                                            </dialog>

                                                                            <span className="countdown mt-4 text-[#000] text-[16px] landing-[19px] font-[500]">
                                                                                <span style={{ "--value": 0 }}></span>:
                                                                                <span style={{ "--value": 0 }}></span>
                                                                            </span>

                                                                            <div className="mt-3">
                                                                                <h3 className="text-[#8C8C8C] ml-2 font-[500] text-[16px] landing-[19px]">Didn’t Received OTP? <span className="text-[#000] ml-2 font-[500] text-[16px] landing-[19px]">Resend</span></h3>
                                                                            </div>
                                                                        </div>

                                                                    )}
                                                                </div>
                                                            </div>
                                                        </dialog>
                                            <button className='text-[17px] font-[500] btn border-current w-2/4 ml-1 rounded'>Cancel</button>
                                        </div>
                                    </div>
                                </dialog>
                                        
                                            </div>
                                        </td>
                                    </tr>
                                    <br />
                                    <tr className='shadow-[0_3.5px_5.5px_0_#00000005] mb-3'>
                                        <th className='shadow-none cursor-pointer' onClick={()=>navigate('/fleets')}>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                    
                                        <td className='bg-base-100 rounded-l-[15px] cursor-pointer' onClick={()=>navigate('/fleets')}>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" className='border-2 border-[#CBCBCB] rounded-[18px]' />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-base-500 font-[900] text-[19px] landing-[35px]">Vicken</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-[16px] font-[500] landing-[35px] bg-base-100 cursor-pointer' onClick={()=>navigate('/fleets')}>
                                            Lorem Ipsum
                                        </td>
                                        <td className='text-[16px] font-[500] landing-[35px] bg-base-100 cursor-pointer' onClick={()=>navigate('/fleets')}>
                                            9988776655
                                        </td>
                                        <td className='bg-base-100 rounded-r-[15px] w-28'>
                                            <div className='flex'>
                                                <button className="flex items-center justify-start text-[16px] font-[500] landing-[35px] text-neutral-500 mr-2" onClick={(e) => { e.stopPropagation(); document.getElementById('my_modal_edit').showModal()}}>Edit <span className='pl-1'> <MdOutlineModeEdit /></span></button>
                                                <dialog id="my_modal_edit" className="modal">
                                                    <div className="modal-box bg-base-200 max-w-[50rem]">
                                                        <form method="dialog">
                                                            <button className="btn text-[20px] btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                        </form>
                                                        <div className='flex items-center justify-center flex-col'>
                                                            <div className='profile-image'>
                                                                <img src='/images/avtar-3.avif' alt='profile-avtar' className='w-24 h-24 border border-1 border-current rounded-full' />
                                                                <div className='tex-[15px] font-[700] landing-[15px] text-center mt-2'> Upload New Picture</div>
                                                            </div>
                                                            {/*------- Form start ------*/}
                                                            <div className="mt-3 w-3/4">
                                                                <form onSubmit={formik.handleSubmit}>
                                                                    <div>

                                                                        <div className="form-control">
                                                                            <label className="label">
                                                                                <span className="text-[#B6B8BB] dark:white text-[17px] font-[500] landing-[19px]">
                                                                                    Full Name
                                                                                </span>
                                                                            </label>
                                                                            <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                                                                                <input
                                                                                    type='text'
                                                                                    className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                                                                    name="fname"
                                                                                    onChange={formik.handleChange}
                                                                                    value={formik.values.fname}
                                                                                />
                                                                            </div>
                                                                            <span className="h-[2px] mt-2 text-rose-600 text-[12px]">
                                                                                {formik.errors.fname ? (
                                                                                    <div>{formik.errors.fname}</div>
                                                                                ) : null}
                                                                            </span>
                                                                        </div>

                                                                        <div className='flex items-center justify-between'>
                                                                            <div className="form-control mt-3 w-1/2 mr-4">
                                                                                <label className="label">
                                                                                    <span className="text-[#B6B8BB] text-[17px] font-[500] landing-[19px]">
                                                                                        Email
                                                                                    </span>
                                                                                </label>
                                                                                <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                                                                                    <input
                                                                                        className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                                                                        name="email"
                                                                                        type="email"
                                                                                        onChange={formik.handleChange}
                                                                                        value={formik.values.email}
                                                                                    />
                                                                                </div>
                                                                                <span className="h-[2px] mt-2 text-rose-600 text-[12px]">
                                                                                    {formik.errors.email ? (
                                                                                        <div>{formik.errors.email}</div>
                                                                                    ) : null}
                                                                                </span>
                                                                            </div>

                                                                            <div className="form-control mt-3 w-1/2 ml-4">
                                                                                <label className="label">
                                                                                    <span className="text-[#B6B8BB] text-[17px] font-[500] landing-[19px]">
                                                                                        Phone
                                                                                    </span>
                                                                                </label>
                                                                                <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                                                                                    <input
                                                                                        className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                                                                        id="telNo"
                                                                                        name="phone"
                                                                                        type="tel"
                                                                                        size="20"
                                                                                        minlength="9"
                                                                                        maxlength="14"
                                                                                        onChange={formik.handleChange}
                                                                                        value={formik.values.phone}
                                                                                    />
                                                                                </div>

                                                                                <span className="h-[2px] mt-3 text-rose-600 text-[12px]">
                                                                                    {formik.errors.phone ? (
                                                                                        <div>{formik.errors.phone}</div>
                                                                                    ) : null}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="mt-6">
                                                                        <button
                                                                            type="submit"
                                                                            className="btn text-white gap-2 btn-neutral btn-block rounded text-[17px] font-[500] landing-[19px]" onClick={() => document.getElementById('my_modal_editProfile').showModal()}
                                                                        >
                                                                            Submit
                                                                        </button>
                                                                        <dialog id="my_modal_editProfile" className="modal">
                                                            <div className="modal-box max-w-[34rem]">
                                                                <Steps current={current} items={items} />
                                                                <div style={contentStyle}>{steps[current].content}</div>
                                                                <div
                                                                    style={{
                                                                        marginTop: 24,
                                                                    }}
                                                                >
                                                                    {current < steps.length - 1 && (
                                                                        <div className='flex items-center justify-center flex-col max-w-[26.5rem] m-auto'>
                                                                            <Button className="btn bg-[#000] w-full text-[#fff] text-[17px] font-[500] rounded" onClick={() => next()}>
                                                                                Submit
                                                                            </Button>
                                                                            <span className="countdown mt-4 text-base-content/70  text-[16px] landing-[19px] font-[500]">
                                                                                <span style={{ "--value": 0 }}></span>:
                                                                                <span style={{ "--value": 0 }}></span>
                                                                            </span>

                                                                            <div className="mt-3">
                                                                                <h3 className="text-base-content/70  ml-2 font-[500] text-[16px] landing-[19px]">Didn’t Received OTP? <span className="text-base-content ml-2 font-[500] text-[16px] landing-[19px]">Resend</span></h3>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                    {current === steps.length - 1 && (
                                                                        <div className='flex items-center justify-center flex-col max-w-[26.5rem] m-auto'>
                                                                            <Button className='btn bg-[#000] w-full text-[#fff] text-[17px] font-[500] rounded' type="primary" onClick={() => document.getElementById('my_modal_adminSuccess').showModal()}>
                                                                                Submit
                                                                            </Button>
                                                                            <dialog id="my_modal_adminSuccess" className="modal">
                                                                                <div className="modal-box py-16 px-12 bg-[#30BF89] max-w-[40rem] h-[30rem] flex flex-col items-center justify-center">
                                                                                    <div className="text-[#fff]  text-[90px] flex items-center justify-center"><SiTicktick /></div>
                                                                                    <h3 className="font-bold text-center text-[27px] font-[700] text-[#fff] landing-[27px] mt-5">Success</h3>
                                                                                </div>
                                                                            </dialog>

                                                                            <span className="countdown mt-4 text-[#000] text-[16px] landing-[19px] font-[500]">
                                                                                <span style={{ "--value": 0 }}></span>:
                                                                                <span style={{ "--value": 0 }}></span>
                                                                            </span>

                                                                            <div className="mt-3">
                                                                                <h3 className="text-[#8C8C8C] ml-2 font-[500] text-[16px] landing-[19px]">Didn’t Received OTP? <span className="text-[#000] ml-2 font-[500] text-[16px] landing-[19px]">Resend</span></h3>
                                                                            </div>
                                                                        </div>

                                                                    )}
                                                                </div>
                                                            </div>
                                                        </dialog>
                                                                    </div>
                                                                </form>
                                                                <div className='passlink text-center m-8 mb-4'>
                                                                    <Link className="text-[#6B6B6B] dark:white text-[17px] font-[500] landing-[19px] hover:none" onClick={() => document.getElementById('my_modal_changepassadmin').showModal()}>Change Password</Link>
                                                                    <dialog id="my_modal_changepassadmin" className="modal">
                                                                        <div className="modal-box bg-base-200 max-w-[50rem]">
                                                                            <form method="dialog">
                                                                                <button className="btn text-[20px] btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                                            </form>
                                                                            <div className='flex items-center justify-center flex-col'>
                                                                                {/*------- Form start ------*/}
                                                                                <div className="mt-3 w-3/4">
                                                                                    <form onSubmit={formik.handleSubmit}>
                                                                                        <div>

                                                                                            <div className="form-control mt-3">
                                                                                                <label className="label">
                                                                                                    <span className="text-[#B6B8BB] dark:white text-[17px] font-[500] landing-[19px]">
                                                                                                        Password
                                                                                                    </span>
                                                                                                </label>
                                                                                                <div className="form-control flex flex-row items-center rounded-[15px] h-14 bg-base-100 px-3 shadow">
                                                                                                    <input
                                                                                                        placeholder="Password"
                                                                                                        className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                                                                                        name="password"
                                                                                                        type={type}
                                                                                                        value={formik.values.password}
                                                                                                        onChange={formik.handleChange}
                                                                                                        autoComplete="current-password"
                                                                                                    />
                                                                                                    <span onClick={handleToggle}>{icon}</span>
                                                                                                </div>
                                                                                                <span className="h-[16px] mt-3 text-[12px] text-rose-600">
                                                                                                    {formik.errors.password ? (
                                                                                                        <div>{formik.errors.password}</div>
                                                                                                    ) : null}
                                                                                                </span>
                                                                                            </div>

                                                                                            <div className="form-control mt-3">
                                                                                                <label className="label">
                                                                                                    <span className="text-[#B6B8BB] dark:white text-[17px] font-[500] landing-[19px]">
                                                                                                        New Password
                                                                                                    </span>
                                                                                                </label>
                                                                                                <div className="form-control flex flex-row items-center rounded-[15px] h-14 bg-base-100 px-3 shadow">
                                                                                                    <input
                                                                                                        placeholder="New Password"
                                                                                                        className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                                                                                        name="password"
                                                                                                        type="password"
                                                                                                    />
                                                                                                    <span onClick={handleToggle}>{icon}</span>
                                                                                                </div>
                                                                                                <span className="h-[16px] mt-3 text-[12px] text-rose-600">
                                                                                                    {formik.errors.password ? (
                                                                                                        <div>{formik.errors.password}</div>
                                                                                                    ) : null}
                                                                                                </span>
                                                                                            </div>

                                                                                            <div className="form-control mt-3">
                                                                                                <label className="label">
                                                                                                    <span className="text-[#B6B8BB] dark:white text-[17px] font-[500] landing-[19px]">
                                                                                                        Re-enter New Password
                                                                                                    </span>
                                                                                                </label>
                                                                                                <div className="form-control flex flex-row items-center rounded-[15px] h-14 bg-base-100 px-3 shadow">
                                                                                                    <input
                                                                                                        placeholder="Re-enter New Password"
                                                                                                        className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                                                                                        name="password"
                                                                                                        type="password"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="mt-6">
                                                                                            <button
                                                                                                type="submit"
                                                                                                className="btn text-white gap-2 btn-neutral btn-block rounded text-[17px] font-[500] landing-[19px]" onClick={() => document.getElementById('my_modal_adminchangePass').showModal()}
                                                                                            >
                                                                                                Submit
                                                                                            </button>
                                                                                            <dialog id="my_modal_adminchangePass" className="modal ">
                                                            <div className="modal-box max-w-[34rem]">
                                                                <Steps current={current} items={items} />
                                                                <div style={contentStyle}>{steps[current].content}</div>
                                                                <div
                                                                    style={{
                                                                        marginTop: 24,
                                                                    }}
                                                                >
                                                                    {current < steps.length - 1 && (
                                                                        <div className='flex items-center justify-center flex-col max-w-[26.5rem] m-auto'>
                                                                            <Button className="btn bg-[#000] w-full text-[#fff] text-[17px] font-[500] rounded" onClick={() => next()}>
                                                                                Submit
                                                                            </Button>
                                                                            <span className="countdown mt-4 text-base-content/70  text-[16px] landing-[19px] font-[500]">
                                                                                <span style={{ "--value": 0 }}></span>:
                                                                                <span style={{ "--value": 0 }}></span>
                                                                            </span>

                                                                            <div className="mt-3">
                                                                                <h3 className="text-base-content/70  ml-2 font-[500] text-[16px] landing-[19px]">Didn’t Received OTP? <span className="text-base-content ml-2 font-[500] text-[16px] landing-[19px]">Resend</span></h3>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                    {current === steps.length - 1 && (
                                                                        <div className='flex items-center justify-center flex-col max-w-[26.5rem] m-auto'>
                                                                            <Button className='btn bg-[#000] w-full text-[#fff] text-[17px] font-[500] rounded' type="primary" onClick={() => document.getElementById('my_modal_adminSuccess').showModal()}>
                                                                                Submit
                                                                            </Button>
                                                                            <dialog id="my_modal_adminSuccess" className="modal">
                                                                                <div className="modal-box py-16 px-12 bg-[#30BF89] max-w-[40rem] h-[30rem] flex flex-col items-center justify-center">
                                                                                    <div className="text-[#fff]  text-[90px] flex items-center justify-center"><SiTicktick /></div>
                                                                                    <h3 className="font-bold text-center text-[27px] font-[700] text-[#fff] landing-[27px] mt-5">Success</h3>
                                                                                </div>
                                                                            </dialog>

                                                                            <span className="countdown mt-4 text-[#000] text-[16px] landing-[19px] font-[500]">
                                                                                <span style={{ "--value": 0 }}></span>:
                                                                                <span style={{ "--value": 0 }}></span>
                                                                            </span>

                                                                            <div className="mt-3">
                                                                                <h3 className="text-[#8C8C8C] ml-2 font-[500] text-[16px] landing-[19px]">Didn’t Received OTP? <span className="text-[#000] ml-2 font-[500] text-[16px] landing-[19px]">Resend</span></h3>
                                                                            </div>
                                                                        </div>

                                                                    )}
                                                                </div>
                                                            </div>
                                                        </dialog>
                                                                                        </div>
                                                                                    </form>
                                                                                    <div className='passlink text-center m-8 mb-4'>
                                                                                        <Link className="text-[#6B6B6B] dark:white text-[17px] font-[500] landing-[19px] hover:none" onClick={() => document.getElementById('my_modal_changepassadmin').showModal()}>Go Back</Link>
                                                                                    </div>
                                                                                </div>
                                                                                {/*------- Form end ------*/}
                                                                            </div>
                                                                        </div>
                                                                    </dialog>
                                                                </div>
                                                            </div>
                                                            {/*------- Form end ------*/}
                                                        </div>
                                                    </div>
                                                </dialog>
                                                <button className='flex items-center justify-start text-[16px] font-[500] landing-[35px] text-neutral-500 ml-2' onClick={() => document.getElementById('my_modal_deleteadmin').showModal()}>Remove <span className='pl-1'> <RiDeleteBin6Line /></span></button>
                                                <dialog id="my_modal_deleteadmin" className="modal">
                                    <div className="modal-box flex items-center justify-center flex-col max-h-96 h-full">
                                        <form method="dialog">
                                            <button className="btn text-[22px] btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <MdErrorOutline  className='text-[7rem] text-gray-300'/>
                                        <h3 className="font-md text-[29px] font-[500] landing-[45px] mt-5 mb-2">Delete</h3>
                                        <p className="font-md pt-1 text-[15px] text-[#6e6e6e]">Do really wish to remove  </p>
                                        <span className="font-md text-[15px]">Admin</span>
                                        <div className='flex items-center justify-around w-80 mt-8'>
                                            <button className='text-[17px] font-[500] btn btn-neutral w-2/4 mr-1 rounded' onClick={() => document.getElementById('my_modal_delVertification').showModal()}>Submit</button>
                                            <dialog id="my_modal_delVertification" className="modal ">
                                                            <div className="modal-box max-w-[34rem]">
                                                                <Steps current={current} items={items} />
                                                                <div style={contentStyle}>{steps[current].content}</div>
                                                                <div
                                                                    style={{
                                                                        marginTop: 24,
                                                                    }}
                                                                >
                                                                    {current < steps.length - 1 && (
                                                                        <div className='flex items-center justify-center flex-col max-w-[26.5rem] m-auto'>
                                                                            <Button className="btn bg-[#000] w-full text-[#fff] text-[17px] font-[500] rounded" onClick={() => next()}>
                                                                                Submit
                                                                            </Button>
                                                                            <span className="countdown mt-4 text-base-content/70  text-[16px] landing-[19px] font-[500]">
                                                                                <span style={{ "--value": 0 }}></span>:
                                                                                <span style={{ "--value": 0 }}></span>
                                                                            </span>

                                                                            <div className="mt-3">
                                                                                <h3 className="text-base-content/70  ml-2 font-[500] text-[16px] landing-[19px]">Didn’t Received OTP? <span className="text-base-content ml-2 font-[500] text-[16px] landing-[19px]">Resend</span></h3>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                    {current === steps.length - 1 && (
                                                                        <div className='flex items-center justify-center flex-col max-w-[26.5rem] m-auto'>
                                                                            <Button className='btn bg-[#000] w-full text-[#fff] text-[17px] font-[500] rounded' type="primary" onClick={() => document.getElementById('my_modal_adminSuccess').showModal()}>
                                                                                Submit
                                                                            </Button>
                                                                            <dialog id="my_modal_adminSuccess" className="modal">
                                                                                <div className="modal-box py-16 px-12 bg-[#30BF89] max-w-[40rem] h-[30rem] flex flex-col items-center justify-center">
                                                                                    <div className="text-[#fff]  text-[90px] flex items-center justify-center"><SiTicktick /></div>
                                                                                    <h3 className="font-bold text-center text-[27px] font-[700] text-[#fff] landing-[27px] mt-5">Success</h3>
                                                                                </div>
                                                                            </dialog>

                                                                            <span className="countdown mt-4 text-[#000] text-[16px] landing-[19px] font-[500]">
                                                                                <span style={{ "--value": 0 }}></span>:
                                                                                <span style={{ "--value": 0 }}></span>
                                                                            </span>

                                                                            <div className="mt-3">
                                                                                <h3 className="text-[#8C8C8C] ml-2 font-[500] text-[16px] landing-[19px]">Didn’t Received OTP? <span className="text-[#000] ml-2 font-[500] text-[16px] landing-[19px]">Resend</span></h3>
                                                                            </div>
                                                                        </div>

                                                                    )}
                                                                </div>
                                                            </div>
                                                        </dialog>
                                            <button className='text-[17px] font-[500] btn border-current w-2/4 ml-1 rounded'>Cancel</button>
                                        </div>
                                    </div>
                                </dialog>
                                        
                                            </div>
                                        </td>
                                    </tr>

<br />
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Table End */}


                </div>
            </div>
        </>
    )
}

export default Manageadmin;