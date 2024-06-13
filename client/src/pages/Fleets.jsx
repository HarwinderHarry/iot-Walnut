import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { useFormik } from "formik";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Button, Drawer } from 'antd';
import { useNavigate } from 'react-router-dom';

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


const Fleets = () => {
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

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();
    return (
        <>
            <div className="content-wrapper bg-base-200 h-screen">
                <div className="flex items-center justify-between">
                    <div aria-label="Breadcrumbs" className="breadcrumbs p-0">
                        <ul>
                            <li className="text-[18px]">
                                Fleets
                            </li>
                        </ul>
                    </div>
                    <div className='search-adminBox flex items-center justify-between w-32rem]'>
                        <div className='filtersSet text-[17px] font-[500] flex items-center justify-center cursor-pointer' onClick={showDrawer}>
                            Filter </div>
                        <Drawer title="FILTER" onClose={onClose} open={open}>

                            <div className="collapse collapse-plus">
                                <input type="radio" name="my-accordion-3" defaultChecked />
                                <div className="collapse-title text-[20px] font-[600]">
                                Categories
                                </div>
                                <div className="collapse-content">
                                    <div className='flex justify-start items-center mb-4'>
                                    <input type="checkbox" fill="fill-current" className="checkbox mr-2 rounded-sm text-[19] font-[500] landing-[35px]" />
                                    <span className='text-[19px] landing-[20px] font-[300]'> solar</span>
                                    </div>
                                    <div className='flex justify-start items-center mb-4'>
                                    <input type="checkbox" fill="fill-current" className="checkbox mr-2 rounded-sm text-[19] font-[500] landing-[35px]" />
                                    <span className='text-[19px] landing-[20px] font-[300]'> solar</span>
                                    </div>
                                    <div className='flex justify-start items-center mb-4'>
                                    <input type="checkbox" fill="fill-current" className="checkbox mr-2 rounded-sm text-[19] font-[500] landing-[35px]" />
                                    <span className='text-[19px] landing-[20px] font-[300]'> solar</span>
                                    </div>
                                    <div className='flex justify-start items-center mb-4'>
                                    <input type="checkbox" fill="fill-current" className="checkbox mr-2 rounded-sm text-[19] font-[500] landing-[35px]" />
                                    <span className='text-[19px] landing-[20px] font-[300]'> solar</span>
                                    </div>
                                </div>
                            </div>

                            <div className="collapse collapse-plus">
                                <input type="radio" name="my-accordion-3" defaultChecked />
                                <div className="collapse-title text-[20px] font-[600]">
                                Admins
                                </div>
                                <div className="collapse-content">
                                <div className='flex justify-start items-center mb-4'>
                                    <input type="checkbox" fill="fill-current" className="checkbox mr-2 rounded-sm text-[19] font-[500] landing-[35px]" />
                                    <span className='text-[19px] landing-[20px] font-[300]'> Admin 1</span>
                                    </div>
                                    <div className='flex justify-start items-center mb-4'>
                                    <input type="checkbox" fill="fill-current" className="checkbox mr-2 rounded-sm text-[19] font-[500] landing-[35px]" />
                                    <span className='text-[19px] landing-[20px] font-[300]'> Admin 2</span>
                                    </div>
                                    <div className='flex justify-start items-center mb-4'>
                                    <input type="checkbox" fill="fill-current" className="checkbox mr-2 rounded-sm text-[19] font-[500] landing-[35px]" />
                                    <span className='text-[19px] landing-[20px] font-[300]'> Admin 3</span>
                                    </div>
                                    <div className='flex justify-start items-center mb-4'>
                                    <input type="checkbox" fill="fill-current" className="checkbox mr-2 rounded-sm text-[19] font-[500] landing-[35px]" />
                                    <span className='text-[19px] landing-[20px] font-[300]'> Admin 4</span>
                                    </div>
                                </div>
                            </div>
                        </Drawer>
                        <div className='form-control flex flex-row items-center rounded-box border border-base-content/20 px-2 mx-4 bg-base-100'>
                            <CiSearch className='text-[25px]' />
                            <input className='input w-full w-40 rounded' placeholder='Search Fleet..' />
                        </div>
                        <div className='adminBtn flex'>
                            {/* First Button */}
                            <div>
                                <button className="btn btn-neutral font-bold py-2 px-4 rounded-[10px] flex items-center justify-between text-[14px] mr-4" onClick={() => document.getElementById('my_modal_3').showModal()}>Add Fleets <FaPlus className='pl-2 text-[24px]' /></button>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box bg-base-200 max-w-[50rem] h-3/4">
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
                                                                    Full Name
                                                                </span>
                                                            </label>
                                                            <div className="form-control flex flex-row items-center rounded-[15px] h-14 bg-base-100 px-3 shadow">
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
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="text-[#B6B8BB] dark:white text-[17px] font-[500] landing-[19px]">
                                                                    Select Category
                                                                </span>
                                                            </label>
                                                            <div>
                                                                <select className="select focus:outline-none focus:border-none w-full  form-control flex flex-row items-center rounded-[15px] h-14 bg-base-100 px-3 shadow">
                                                                    <option disabled selected>Who shot first?</option>
                                                                    <option>Han Solo</option>
                                                                    <option>Greedo</option>
                                                                </select>
                                                            </div>
                                                            <span className="h-[2px] mt-2 text-rose-600 text-[12px]">
                                                                {formik.errors.fname ? (
                                                                    <div>{formik.errors.fname}</div>
                                                                ) : null}
                                                            </span>
                                                        </div>
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="text-[#B6B8BB] dark:white text-[17px] font-[500] landing-[19px]">
                                                                    Select Admin
                                                                </span>
                                                            </label>
                                                            <div>
                                                                <select className="select focus:outline-none focus:border-none w-full  form-control flex flex-row items-center rounded-[15px] h-14 bg-base-100 px-3 shadow">
                                                                    <option disabled selected>Who shot first?</option>
                                                                    <option>Han Solo</option>
                                                                    <option>Greedo</option>
                                                                </select>
                                                            </div>
                                                            <span className="h-[2px] mt-2 text-rose-600 text-[12px]">
                                                                {formik.errors.fname ? (
                                                                    <div>{formik.errors.fname}</div>
                                                                ) : null}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="mt-6">
                                                        <button
                                                            type="submit"
                                                            className="btn text-white gap-2 btn-neutral btn-block rounded text-[17px] font-[500] landing-[19px]"
                                                        >
                                                            Submit
                                                        </button>
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
                                    <tr className='text-[#B1B1B1] text-[15px] font-[700] landing-[35px]' >
                                        <th className='w-2'>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th >Fleet name</th>
                                        <th>Category</th>
                                        <th>Admin</th>
                                        <th>Admin Phone</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <br />
                                <tbody className='mt-3'>
                                    {/* row 1 */}
                                    <tr className='shadow-[0_3.5px_5.5px_0_#00000005] h-20 mb-3'>
                                        <th className='shadow-none'>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td className='bg-base-100 rounded-l-[15px]'>
                                            <div className="flex items-center gap-3">
                                                <div className="text-base-500 font-[700] text-[19px] landing-[35px]">Vicken</div>
                                            </div>
                                        </td>
                                        <td className='text-[16px] font-[500] landing-[35px] bg-base-100'>
                                            Lorem Ipsum
                                        </td>
                                        <td className='text-[16px] font-[500] landing-[35px] bg-base-100 '>Purple</td>
                                        <td className='text-[16px] font-[500] landing-[35px] bg-base-100 '>
                                            9988776655
                                        </td>
                                        <td className='bg-base-100 rounded-r-[15px] w-8 cursor-pointer cursor-pointer' onClick={()=>navigate('/devices')}>
                                            <div className='text-[20px] font-[500] landing-[35px] text-neutral-500 '><IoIosArrowForward /></div>
                                        </td>
                                    </tr>
                                    <br />
                                    <tr className='shadow-[0_3.5px_5.5px_0_#00000005] h-20 mb-3'>
                                        <th className='shadow-none'>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td className='bg-base-100 rounded-l-[15px]'>
                                            <div className="flex items-center gap-3">
                                                <div className="text-base-500 font-[700] text-[19px] landing-[35px]">Vicken</div>
                                            </div>
                                        </td>
                                        <td className='text-[16px] font-[500] landing-[35px] bg-base-100'>
                                            Lorem Ipsum
                                        </td>
                                        <td className='text-[16px] font-[500] landing-[35px] bg-base-100 '>Purple</td>
                                        <td className='text-[16px] font-[500] landing-[35px] bg-base-100 '>
                                            9988776655
                                        </td>
                                        <td className='bg-base-100 rounded-r-[15px] w-8 cursor-pointer' onClick={()=>navigate('/devices')}>
                                            <div className='text-[20px] font-[500] landing-[35px] text-neutral-500 '><IoIosArrowForward /></div>
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

export default Fleets;