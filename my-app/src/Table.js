import React from 'react';

let arr = 
[
  { Name:"a",
   Number:1
 },
 { Name:"b",
   Number:2
 }, 
 { Name:"c",
   Number:3
 }
];

export function Table() {

  return (
    <div>
      <h1>Table</h1>
      <table border="1" cellPadding="15px" cellSpacing="0px">

        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {
            arr.map((value)=>
          (
            <tr>
            <td>{value.Name}</td>
            <td>{value.Number}</td>
            </tr>
           ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;