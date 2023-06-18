import React from 'react'
import { Player } from '../shared/ListOfPlayers.js';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize'
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
           <p className='detail-button'><Link to={`detail/${player.id}`}> 
        <p><button>Detail</button></p>
            </Link>
          </p>
         </div>
       </div>
      ))}
      <div  id='popup1' className='overlay'>
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
