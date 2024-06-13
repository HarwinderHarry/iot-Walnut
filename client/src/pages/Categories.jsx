import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { useFormik } from "formik";
import { GoDotFill } from "react-icons/go";
import { Button, Steps, theme } from 'antd';
import { SiTicktick } from "react-icons/si";

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



const Categories = () => {

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
                                Categories
                            </li>
                        </ul>
                    </div>
                    <div className='search-adminBox flex items-center justify-between'>
                        <div className='adminBtn flex'>

                            {/* First Button */}
                            <div>
                                <button className="btn btn-neutral font-bold py-2 px-4 rounded-[10px] flex items-center justify-between text-[14px] mr-4" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Category <FaPlus className='pl-1 text-[18px]' /></button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box bg-base-200 max-w-[40rem] h-96">
                                        <form method="dialog">
                                            <button className="btn text-[20px] btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <div className='flex items-center justify-center flex-col h-full'>
                                            {/*------- Form start ------*/}
                                            <div className="mt-3 w-3/4">
                                                <form onSubmit={formik.handleSubmit}>
                                                    <div>

                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="text-[#B6B8BB] dark:white text-[17px] font-[500] landing-[19px]">
                                                                    Enter Category Name
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
                                                    </div>

                                                    <div className="mt-6">
                                                        <button className="btn text-white gap-2 btn-neutral btn-block rounded text-[17px] font-[500] landing-[19px]" onClick={() => document.getElementById('my_modal_2').showModal()}>Submit</button>
                                                        <dialog id="my_modal_2" className="modal ">
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
                                    <tr className='text-[#B1B1B1] text-[15px] font-[700] landing-[35px] '>
                                        <th>Category</th>
                                        <th><span className='flex'><GoDotFill className='text-[#51DCA8] mr-1' />Active Devices</span></th>
                                        <th><spa className='flex'><GoDotFill className='text-[#FF2002] mr-1' />nactive Devices</spa></th>
                                        <th>Total Devices</th>
                                    </tr>
                                </thead>
                                <br />
                                <tbody className='mt-3'>
                                    {/* row 1 */}
                                    <tr className='shadow-[0_3.5px_5.5px_0_#00000005] mb-3 h-20'>
                                        <td className='bg-base-100 rounded-l-[15px] '>
                                            <div className="font-bold text-base-500 font-[900] text-[19px] landing-[35px]">Solar</div>
                                        </td>
                                        <td className='text-[16px] font-[500] landing-[35px] bg-base-100'>
                                            27682
                                        </td>
                                        <td className='text-[16px] font-[500] landing-[35px] bg-base-100 '>27682</td>
                                        <td className='text-[16px] font-[500] landing-[35px] bg-base-100 rounded-r-[15px] '>
                                            27682832
                                        </td>
                                    </tr>

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

export default Categories;