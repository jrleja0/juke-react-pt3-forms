import React from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      buttonDisabled: true,
      isEmpty: false,
      tooLong: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      inputValue: event.target.value,
      buttonDisabled: (event.target.value.length > 0 && event.target.value.length < 17) ? false : true,
      isEmpty: !event.target.value.length,
      tooLong: event.target.value.length > 16
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.postPlaylist(this.state.inputValue);
    this.setState({ inputValue: '' });
  }

  render(){
    return (
      <div>
        <NewPlaylist
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue}
          buttonDisabled={this.state.buttonDisabled}
          isEmpty={this.state.isEmpty}
          tooLong={this.state.tooLong}
        />
      </div>
    );
  }
}
