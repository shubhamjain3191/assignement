import React from 'react';
import Clock from './Clock'
import './App.css'

export default function () {
   return (<div id='parent'>
      <div id='first'>
         <Clock city="Delhi" timezone="+5.5" />
      </div>
      <div id='second'>
         <Clock city="Californoia" timezone="-8" />
      </div>

      <div id='third'>
         <Clock city="UK" timezone="0" />
      </div>
   </div>


   );
}