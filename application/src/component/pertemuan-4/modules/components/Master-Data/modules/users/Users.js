import React, { useState, useEffect } from 'react'
import {Form} from './Form'
import TableData from './TableData'
import axios from 'axios';
import LoadingSpin from '../../../../../layouts/components/loadings/LoadingSpin';
import AlertInfo from '../../../../../layouts/components/alerts/AlertInfo';
// import { Products } from '../products';

export  function Users() {

  const [user, setUser] = useState({
    loading: false,
    data: [],
    message: "",
  });

  const getUser = () => {
    setUser({ ...user, loading: true});

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/students',
      headers: { }
    }

    axios(config)
      .then( (response) => {
        // console.log(JSON.stringify(response.data));
        setUser({...user, data:response.data, loading:false })
      })
      .catch((error) => {
        // console.log(error);
        setUser({...user, loading: false, message:"error.message"})
      });
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <div id="user-master">
      <div className='row'>
        <div className='col-sm-12 col-lg-8'>
          <div className='d-flex flex-wrap flex-stack justify-content-between'>
            <div className='d-flex flex-wrap align-items-center my-1'>
              <h3 className='fw-bolder me-5 my-1'> {Object.values(user.data).length} of User list </h3>
            </div>
            <div className='d-flex flex-wrap my-1'>
              <div className='d-flex my-0'>
                <div className='input-group me-3'>
                  <input 
                    type='text' 
                    name='search'
                    className='form-control'
                    placeholder='Search here'
                    autoComplete='off'
                  />
                  <span className='input-group-text'>
                    <i className='bi bi-search'></i>
                  </span>
                </div>
                <select name='sort' className='form-select'>
                  <option value="">Sort</option>
                  <option value="">FirstName</option>
                  <option value="">SecondName</option>
                  <option value="">LastName</option>
                </select>
              </div>
            </div>
          </div>

          {(user.loading) ? <LoadingSpin /> : ""}
          {(user.message) ? <AlertInfo message={user.message} variant={"danger"} /> : ""}
            <div id='list-user' className='user-list'>
                <TableData data={user.data} />
            </div>
          </div>
          <div id='user-form' className='col-sm-12 col-lg-4'>
              <Form getUser={getUser} />
          </div>
      </div>
    </div>
  );
}
