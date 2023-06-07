import React, { Component } from 'react'
import { Player } from '../shared/ListOfPlayers.js'
import Players from './Players.js';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
           players: Player
        };
      }
      render() {
        return <Players players={this.state.players}/>
      }
    }
    export default Main
    