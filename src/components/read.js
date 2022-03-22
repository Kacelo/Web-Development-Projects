import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function Read(){


    const [APIData, setAPIData] = useState([]);
    useEffect(() =>{

        axios.get(`https://6239834663fdd477ac13ced1.mockapi.io/tasks`)
        .then((response) =>{
            setAPIData(response.data);
        })

    }, [])

    const setData =(data) =>{
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const onDelete = (id)=>{
        axios.delete(`https://6239834663fdd477ac13ced1.mockapi.io/tasks/${id}`) 
        .then(() => {
            getData();
        })
    }

    const getData = () => {
        axios.get(`https://6239834663fdd477ac13ced1.mockapi.io//fakeData`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }
return(
    <table class="ui celled table">
  <thead>
    <tr><th>Name</th>
    <th>Age</th>
    <th>Job</th>
    <th>Update</th>
  </tr></thead>
  <tbody>

     
      {APIData.map((data) =>{
          return(
            <tr>
            <td data-label="First Name">{data.firstName}</td>
            <td data-label="Last Name">{data.lastName}</td>
            <td data-label="Checkbox">{data.checkbox ? 'Checked' : 'Unchecked'}</td>

            <Link to='/update'>
            <td>
              <button onClick ={() => setData(data)}> Update</button>
          </td>
          
          
            </Link>


            <td>
                <button  onClick={() => onDelete(data.id)}>Delete</button>
            </td>
          </tr>
        

          )
      })}
  </tbody>
</table>
)
}