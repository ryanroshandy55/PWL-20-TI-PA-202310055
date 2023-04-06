import React from 'react'

export default function TableData({data}) {
  const UserList = ({user}) => {
    return (
      <div class="card mb-3" style={{maxWidth: "540px", background:"white"}}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={require("../../../../../assets/media/user/user.png")} className="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Npm : {user.npm}</h5>
              <p class="card-text">Name : {user.firstname} {user.middlename} {user.lastname} </p>
              <p class="card-text">Birthdate :{ user.birthdate }</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=''>
      <div className='row d-flex mb-2'>
        {
          (Object.values(data).length > 0) ? (
            data.map((v, index) => (
                <div className='col-3' key={index} > 
                <UserList item={v} />
              </div>
            ))
            ) : (
            <p className='text-danger'>No Record Found</p>
          )
        }
      </div>
    </div>
  );
}

// return (
//   <div className="list-product">
//   <div className="row mb-3">
//     {
//     (Object.values(data).length > 0) ? (
//     data.map((v, index) => (
//         <div className="col-3" key={index}>
//         <ItemProduct item={v} />
//       </div>
//     ))

//     ) : (
//       <p className="text-danger">No record found</p>
//     )
//   }
//     </div>
//   </div>
// );

