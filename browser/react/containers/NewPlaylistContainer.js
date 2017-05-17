import React from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.inputValue);
    this.setState({ inputValue: '' });
  }

  render(){
    return(
      <div>
        <NewPlaylist
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue}/>
      </div>
    )
  }
}
