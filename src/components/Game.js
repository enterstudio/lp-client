import React, { Component } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

class Game extends Component {
  //bind the function to *this*
  
  handleDelete = () => {
    this.props.deleteGame(this.props.id);
  }

  handleAdd = () => {
    // this.props.addGame(this.props.id);
    // this function in progress, needs correct action/reducer
    console.log(this)
  }

  render() {
    return (
      <div className="game">
        <p><Link to="/game">{this.props.name}</Link></p>
        <img className="box-art" src={'//images.igdb.com/igdb/image/upload/t_cover_big/'+ this.props.cover.cloudinary_id + '.jpg'} alt='gamebox art' />
        <p>Year: <Moment format="YYYY">{this.props.first_release_date}</Moment></p>
        <p>Rating: {this.props.rating}</p>
        <p className='summary'>{this.props.summary ? this.props.summary : this.props.storyline || 'This game has no summary'}</p>
        <button className="delete-game" onClick={this.handleDelete}>Delete</button>
        <button className="add-game" onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default Game;