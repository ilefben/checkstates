import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgSrc: "https://placekitten.com/200/200", // Replace with the actual image source
        profession: "Software Engineer",
      },
      show: false,
      //mountTime: new Date(),
      i:0
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState)=>{
      return{ i:prevState.i+1/2,
       };
    });
  },1000);
}
  

  /*componentWillUnmount() {
    clearInterval(this.interval);
  }*/

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show} = this.state;

    return (
      <div className="App">
        <h1>React Profile App</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>
          {this.state.i}
         
        </p>
      </div>
    );
  }
}

export default App;
