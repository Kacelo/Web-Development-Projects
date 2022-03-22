import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';

export const Update = () => {
    let history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const [id, setID] = useState(null);

  

  useEffect(() => {


    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckbox(localStorage.getItem("Checkbox Value"));

  }, []);

  const updateAPIData = (e)=>{
      e.preventDefault();
        axios.put(`https://6239834663fdd477ac13ced1.mockapi.io/tasks/${id}`, {
            firstName,
            lastName,
            checkbox 
          }).then(() => {
            history.push('/read')
          })
  }

  return (
    <form class="ui form">
      <div class="field">
        <label>First Name</label>
        <input value ={firstName}
          type="text"
          name="first-name"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div class="field">
        <label>Last Name</label>
        <input value={lastName}
          type="text"
          name="last-name"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input
            type="checkbox"
            tabindex="0"
            class="hidden"
            checked ={checkbox}
            onChange={(e) => setCheckbox(!checkbox)}
          />
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
      <button class="ui button" type="submit" onClick={updateAPIData}>
        Update
      </button>
    </form>
  );
};
export default Update;
