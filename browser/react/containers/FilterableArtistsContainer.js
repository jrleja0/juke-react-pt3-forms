import React from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

export default class FilterableArtistsContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      inputValue: event.target.value
    });
  }

  filterArtists(inputValue, artists){
    return artists.filter(artist => {
      return artist && artist.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
    });
  }

  render(){
    // console.log('input:', this.state.inputValue, 'artists:', this.props.artists)
    return(
      <div>
        <FilterInput handleChange={this.handleChange}/>
        <Artists artists={this.filterArtists(this.state.inputValue, this.props.artists)} />
      </div>
    )
  }
}
