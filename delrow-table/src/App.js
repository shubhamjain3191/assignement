import React from 'react';
import Table from './Table';
import employee from './employee'
import './Table.css';

export default function()
{
    let input=[
      {
      key: "age",
      align:"right"
    },
    {
      key: "name",
      align:"left"
    },
    {
      key: "email",
      align:"left"
    }
  ];
  return(
      <Table format={input} data={employee} />
  );
}