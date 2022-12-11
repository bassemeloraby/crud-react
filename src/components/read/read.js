import React, { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://6394d1e24df9248eadad718c.mockapi.io/crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  });
  const setID = (id)=>{
    console.log(id)
  }
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Second Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button color="green" onClick={}>Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link to="/delete">
                    <Button color="red">Delete</Button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
