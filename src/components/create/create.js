import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

export default function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  console.log(firstName);
  console.log(lastName);

  const sendDataToAPI = () => {
    axios.post(`https://6394d1e24df9248eadad718c.mockapi.io/crud`, {
      firstName,
      lastName,
    });
  };
  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input
          name="fname"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          name="lname"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Button type="submit" onClick={sendDataToAPI}>
        Submit
      </Button>
    </Form>
  );
}
