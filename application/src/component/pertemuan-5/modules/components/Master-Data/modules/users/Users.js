import React from 'react'

export default function Users() {
  return (
    <div id="user-master">
      <div className='row'>
        <div className='col-sm-12 col-lg-8'>
          <div className='d-flex flex-wrap flex-stack pb-7'>
            <div className='d-flex flex-wrap align-items-center my-1'>
              <h3 className='fw-bolder me-5 my-1'> 0 User list </h3>
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

          <div id='list-user' className='user-list'>

          </div>
          <div id='user-form' className='col-sm-12 col-lg-4'>

          </div>
        </div>
      </div>
    </div>
  )
}
