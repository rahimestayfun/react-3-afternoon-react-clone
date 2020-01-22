import React from "react";
import data from "./../data/data";
import "./../styles/Employee.css";
import Button from "./Button";
import './../styles/Employee.css'

class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      myData: data,
      position: 0
    };
  }
  nextButtonFunction = () => {
    const { myData, position } = this.state;

    if (position === myData.length - 1) {
      this.setState({
        position: 0
      });
    } else {
      this.setState({
        position: position + 1
      });
    }
  };

  previousButtonFunction = () => {
    const { myData, position } = this.state;
    if (position === 0) {
      this.setState({ position: myData.length - 1 });
    } else {
      this.setState({
        position: this.state.position - 1
      });
    }
  };
  render() {
    const { myData, position } = this.state;
    let favoriteMovies = myData[position]["favoriteMovies"];
    let mappedMovies = favoriteMovies.map((el, i) => {
      return <li key={i}>{el}</li>;
    });
    return (
      <div className="main-container">
        <h1 className='counter'>
          {this.state.position + 1} / {this.state.myData.length}
        </h1>
        <section className='info'>
          <h1>
            {this.state.myData[this.state.position].name.first}{" "}
            {this.state.myData[this.state.position].name.last}
          </h1>
          <p>
            <span>From:</span> {this.state.myData[this.state.position].city},{" "}
            {this.state.myData[this.state.position].country}
          </p>
          <p><span>Job Title:</span> {this.state.myData[this.state.position].title}</p>
          <p><span>Employer:</span> {this.state.myData[this.state.position].employer}</p>
          <section />

          <section className='movies'>
            <h4>Favorite Movies</h4>
            <ol>
              {mappedMovies}
              {/* {this.state.myData[this.state.position].favoriteMovies.map((el,i)=>{
                        return <li key={i}>{el}</li>
                    })} */}
            </ol>
          </section>
        </section>
        <Button
          nextButtonFunction={this.nextButtonFunction}
          previousButtonFunction={this.previousButtonFunction}
        />
      </div>
    );
  }
}
export default Employee;
