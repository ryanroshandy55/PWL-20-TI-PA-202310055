import React, { useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';

export default function Statement() {
  const objData = { id: 1,
                    name : "Septian Cahyadi",
                    gender : "M",
                    birthdate : "1940-11-08",
                    address : "Dramaga Cantik Blok H No 2, Kab Bogor, Jawa Barat",
                    favorite : ["Eat", "Sleep", "Gaming", "Hiking", "Running"],
                    activity: [{ type: "Work", place: "IBIK campus", start_time: "07:00", end_time: "17.00"},
                               { type: "Sleep", place: "House", start_time: "22:00", end_time: "04.00"},
                               { type: "Breakfast", place: "cafe", start_time: "06.00", end_time: "07.00"}]
                    }
    const age = calculateAge(objData.birthdate);
    const level = levelAge(age); 
  
    const [isToogle, setIsToogle] = useState(false);
    const handlerClick = () => {
        setIsToogle((!isToogle) ? true : false);
    }

    return (
        <div className='Content-header'>
                <div className='Con' style={{position:"relative", alignContent:"center", alignItems:"center", minWidth:"100vh"}}>
                    <p>Name : {objData.name} </p>
                    <p>Gender: {(objData.gender === "M") ? "Male" : "Female"} </p>
                    <p>Birthdate: {objData.birthdate} / {age} years old </p>
                    <p>Lavel : {level} </p>
                    <p>Address: {objData.address} </p>
                    <div className='text-center'>
                        <button className='w-25 btn btn-primary' type="button" onClick={handlerClick} > 
                            {(isToogle) ? "ON" : "OFF"} 
                        </button>
                        <span style={{padding:11}}> or </span>
                        <button className='btn btn-danger w-50' type="button" onClick={()=>handlerClick()}> {(!isToogle) ? "ON" : "OFF" } </button>
                    </div>
                    <ol>
                        {objData.favorite.map((v, index) => (
                            <li key={index}>{v}</li>
                        ))}
                    </ol>
                    <p>Activity</p>
                    <div style={{color:"white"}}>
                        <MyActivity data={objData.activity} />
                    </div>
                </div>
        </div>
    )
}

const MyActivity = ({data}) => {
    return (
        <Table className='table-dark' border={3} bordered striped hover style={{color:"white"}} >
            <thead>
                <tr>
                    <th>No</th>
                    <th>Type</th>
                    <th>Place</th>
                    <th>Term</th>
                </tr>
            </thead>
            <tbody>
                {(Object.values(data).length > 0) ? (
                    data.map((v, index) => (
                        <tr key={index}>
                            <td >{(index + 1)}</td>
                            <td>{v.type}</td>
                            <td>{v.place}</td>
                            <td>{v.start_time} until {v.end_time} </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colspan="4">No activity found</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

const calculateAge = (birthdate) => {
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if( m < 0 || ( m === 0 && today.getDate() < birthDate.getDate() ) ) {
        age--;
    }
    return age;
}

const levelAge = (age) => {
    let level = "";
    switch (true) {
        case (age < 10):
            level = "TOODLER";
            break;
        case (age > 10 && age <= 17):
            level = "TEENAGERS";
            break;
        case (age > 17 && age < 30):
            level = "YOUNGER";
            break;
        case (age > 30 && age < 50):
            level = "OLDER";
            break;
        case (age > 50 && age < 80):
            level = "ELDER";
            break;
        case (age > 80 && age < 100):
            level = "LEGENDS";
            break;
        default:
            break;
    }
    return level;
}