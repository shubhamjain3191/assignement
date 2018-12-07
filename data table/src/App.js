import React from 'react';
import Tablepage from './Tablepage';
import './App.css';

export default function () {
  let head = ["Name", "Email address", "Phone no."];
  let intialValues = [["", "", "", ""]];
  return (
    <Tablepage header={head} rows={intialValues} />
  )
}
