import React, { Component } from 'react';
import {Grid, Col, Row, Button } from 'react-bootstrap';
import Header from './Header';
import Timer from './Timer';

class App extends Component {

  state = {
    brand: "FunMath",
    name: "Abhishek",
    level: 1,
    point: 0,
    toShow: "Time is running",
    timeRemaining: 5
  }

  reset = () => {
    this.tick();
  }

  tick = () => {
    this.timerID = setInterval(
      () => this.countDown(),
      1000
    );
  }

  countDown = () =>{
    this.setState({
      timeRemaining: this.state.timeRemaining - 1 
    })

    if(this.state.timeRemaining === -1){
      clearInterval(this.timerID);
      this.setState({
      toShow: "Time out",
      level: this.state.level + 1,
      point: this.state.point + 100,
    })
    }

  };

  handleNextLevelButton = () =>
  {
    this.setState({
      toShow: "Time is running",
      timeRemaining: 5
    })
  }

  render() {
    return (
      <div>
        <Header
          brand = {this.state.brand}
          name = {this.state.name}
          level = {this.state.level}
          point = {this.state.point} 
        />

        <Grid>
          <Row>
            <Col xs={12} md={8}>
              {this.state.toShow}
              <br/>
              {this.state.toShow === "Time out" ?
                <Button onClick = {this.handleNextLevelButton} > Next Level </Button>
                :
                null
              }
            </Col>
            <Col xs={6} md={4}>
            {this.state.toShow === "Time out" ? "Time over" :
              <Timer
                timeRemaining = {this.state.timeRemaining}
                reset = {this.reset}
              />
            }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
