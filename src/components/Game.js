import React, { Component } from 'react';
import Moment from 'react-moment';

class Game extends Component {

  handleDelete = () => {
    this.props.deleteGame(this.props.id);
  }
  //bind the function to *this* so it doesn't delete them all on render


  render() {
    return (
      <div className="game">
        <p>{this.props.name}</p>
        <img className="box-art" src={'//images.igdb.com/igdb/image/upload/t_cover_big/'+ this.props.cover.cloudinary_id + '.jpg'} alt='gamebox art' />
        <p>Year: <Moment format="YYYY">{this.props.first_release_date}</Moment></p>
        <p>Rating: {this.props.rating}</p>
        <p className='summary'>{this.props.summary ? this.props.summary : this.props.storyline || 'This game has no summary'}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default Game;