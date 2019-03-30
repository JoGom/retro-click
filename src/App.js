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
    characters,
    score: 0,
    highscore: 0
  };

  //react lifecycle function that runs ater a component is mounted
  componentDidMount = () => {
    //sets the state to the new array that has a random order
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
    //returns the shuffled array, What gets assigned to state
    return array;
  }

  clickImage = (id, clicked) => {
    //if the character has yet to be clicked change the clicked status of that character to true
    if(clicked === false){
      //empty array that will reaplace state array with updated array
      const newArr =[];
      this.state.characters.forEach( (character) => {
        //changes the clicked character's status to true
        if(character.id === id){
          character.clicked = true;
          this.state.score ++;
        }
        newArr.push(character)
      });
      console.log(newArr);
      //replace state character array with the updated one and shuffle it 
      this.setState({characters: this.shuffleCharacters(newArr)}); 
    }
    else if(clicked === true){
      
    }
    
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
        <Nav 
          score={this.state.score}
          highscore={this.state.highscore}
        />
        <Title />
        <CardWrapper>
          {this.state.characters.map(character => (
            <ImageCard
              // removeFriend={this.removeFriend}
              id={character.id}
              key={character.id}
              clicked={character.clicked}
              clickImage={this.clickImage}
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
