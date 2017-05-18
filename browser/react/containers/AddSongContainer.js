import React from 'react';
import Playlist from '../components/Playlist';

export default class AddSongContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isEmpty: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.props.selectSong(event.target.value);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addToPlaylist(this.props.selectedSong);
  }

  render(){
    return (
      <div>
        <Playlist
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
