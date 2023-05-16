import React, { Component } from 'react';
import { Player } from '../shared/ListOfPlayers.js';
export default function Players (){
  
    return (
      <div className='container'>
      {Player.map((player)=>(
         <div className='column'>
         <div className='card'>
         <img src={player.img}/>
           <h3>{player.name}</h3>
           <p className='title'>{player.club}</p>
           <p><button>Detail</button></p>
         </div>
       </div>
      ))}
  </div>
    )
  
}