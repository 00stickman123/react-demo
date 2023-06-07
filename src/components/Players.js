import React from 'react'
import { Player } from '../shared/ListOfPlayers.js';
import { useState } from 'react';
export default function Players (){
  const [player, setPlayer] = useState([]);
    return (
      <div className='container'>
      {Player.map((player)=>(
         <div className='column'>
         <div className='card'>
         <img src={player.img} alt=''/>
           <h3>{player.name}</h3>
           <p className='title'>{player.club}</p>
           <p className='detail-button'><button  onClick={() =>{setPlayer(player)}}><a href='#popup1' id='openPopUp'>Detail</a></button></p>
         </div>
       </div>
      ))}
      <div id='popup1' className='overlay'>
          <div className='popup'>
            <img src={player.img} alt=''/>
            <h2>{player.name}</h2>
            <a className='close' href='#1'>&times;</a>
            <div className='content'>
                {player.info}
            </div>
          </div>
      </div>
  </div>
    )
  
}