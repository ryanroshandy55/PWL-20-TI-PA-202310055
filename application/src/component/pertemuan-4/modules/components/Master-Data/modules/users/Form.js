import React, { useState } from 'react';
import { openModal } from '../../../../../layouts/components/modals/ModalPopUp';
import axios from 'axios';


export function Form(props) {
    const [postData, setPostData] = useState({
        npm: Number,
        firstname: "",
        middlename: "",
        lastname: "",
        email: "",
        birtdate: "",
    });

    const submitForm = (e) => {
        e.preventDefault();
        const config = {
            method: "POST",
            url: "http://localhost:8080/api/students",
            headers: { "Content-Type": "application/json" },
            data: postData,
        };
        axios
            .request(config)
            .then((response) => {
                // console.log(JSON.stringify(response.data));
                let results = response.data.data;
                if (results) {
                    openModal({ header: "Info", message: "Successfully submited" });
                    props.getUser();
                } else {
                    openModal({ header: "Error", message: "Failed Submit" });
                }
            })
            .catch((error) => {
                openModal({ header: "Error", message: "Isi Data Dengan Benar" });
            });
    };

    return (
        <div className='card bg-white'>
            <div className='card-header border-0 py-3'>
                <div className='card-title d-flex flex-column'>
                    <h3 className='text-dark'>Form User Student</h3>
                    <p className='text-muted fs-7'>
                        Please fill up the form with correctly
                    </p>
                </div>
            </div>
            <div className='card-body pt-0'>
                <form
                    method='post'
                    autoComplete='off'
                    id='form-user'
                    onSubmit={(e) => submitForm(e)}
                >
                    <div className='mb-3'>
                        <label className='form-label'>NPM</label>
                        <input
                            type='text'
                            name='npm'
                            className='form-control'
                            onChange={(e) => setPostData({ ...postData, npm: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>FirstName</label>
                        <input
                            type='text'
                            name='firstname'
                            className='form-control'
                            onChange={(e) => setPostData({ ...postData, firstname: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>MiddleName</label>
                        <input
                            type='text'
                            name='middlename'
                            className='form-control'
                            onChange={(e) => setPostData({ ...postData, middlename: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>LastName</label>
                        <input
                            type='text'
                            name='lastname'
                            className='form-control'
                            onChange={(e) => setPostData({ ...postData, lastname: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Email</label>
                        <input
                            type='email'
                            name='email'
                            className='form-control'
                            onChange={(e) => setPostData({ ...postData, email: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Birthdate</label>
                        <input
                            type='string'
                            name='birthdate'
                            className='form-control datepicker'
                            placeholder='YYYY-MM-DD // Year-Month-Day'
                            onChange={(e) => setPostData({ ...postData, birthdate: e.target.value })} />
                    </div>
                    <div className='text-end mt-3'>
                        <button className='btn btn-light' type='button'>
                            Cancel
                        </button>
                        <button className='btn btn-primary' type='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}