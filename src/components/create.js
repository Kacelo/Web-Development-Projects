import React, { useState } from "react";
import axios from 'axios'; //get, post, put, delete
import { useHistory } from 'react-router';

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  let history = useHistory();

  const postData = (e) => {
      e.preventDefault()
      axios.post('https://6239834663fdd477ac13ced1.mockapi.io/tasks', {
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
        <input
          type="text"
          name="first-name"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div class="field">
        <label>Last Name</label>
        <input
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
            onChange={(e) => setCheckbox(!checkbox)}
          />
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
      <button class="ui button" type="submit" onClick={postData}>
        Submit
      </button>
    </form>
  )
  
}

export default Create;
