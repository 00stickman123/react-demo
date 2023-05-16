import React, { Component } from 'react'
import { Player } from '../shared/ListOfPlayers.js'
import PlayersPresentation from './PlayersPresentation.js';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
           players: Player
        };
      }
      render() {
        return <PlayersPresentation players={this.state.players}/>
      }
    }
    export default Main
    