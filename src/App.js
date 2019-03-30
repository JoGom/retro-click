import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import Nav from "./components/Nav";
import CardWrapper from "./components/CardWrapper";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters
  };

  componentDidMount() {
    this.setState({characters: this.shuffleCharacters(this.state.characters)});
  }

  //function to shuffle the characters array
  shuffleCharacters = array => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    //returns the shuffled array
    return array;
  }


  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav />
        <Title />
        <CardWrapper>
          {this.state.characters.map(character => (
            <ImageCard
              // removeFriend={this.removeFriend}
              id={character.id}
              key={character.id}
              // name={character.name}
              image={character.image}
              // occupation={character.occupation}
              // location={character.location}
            />
          ))}
        </CardWrapper>
      </Wrapper>
    );
  }
}

export default App;
