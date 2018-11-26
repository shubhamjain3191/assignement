import React from 'react';
import './Table.css';
import employee from './employee'

function Table(){
  let obj=[
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
<table class="table">
{
obj.map((value)=>
<th>{value["key"]}</th>
)
}
{
  employee.map((val)=>
  <tr>
    {obj.map((value)=>value["align"]==="right"?<td id="right">{val[value.key]}</td> : <td>{val[value.key]}</td>
)}
  </tr>
  )
  }
</table>
);
}

export default Table;
