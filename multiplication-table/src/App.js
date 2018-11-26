import React from 'react';
import './App.css';
import Table from './Table';

export default function () {
  return (<>
    <div class="div">
      <Table number={2} upto={10} format='{result}' />
    </div>
    <div class="div">
      <Table number={5} upto={12} format="Multiple of {number} with {upto} is : {result}" />
    </div>
    <div class="div">
      <Table number={3} upto={10} format="{number}*{upto}={result}" />
    </div>
  </>

  )
}


