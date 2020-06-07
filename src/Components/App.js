import React, { Component } from 'react';
import {Grid, Col, Row, Button } from 'react-bootstrap';
import Header from './Header';
import Timer from './Timer';
import Question from './Question';
import MainPage from './MainPage';
import EndPage from './EndPage';
import Answer from './Answer';
import {TIME_OVER, TIME_RUNNING, evalAnswer, endOfGame, funCheckedArray} from '../consts/questions';
import '../css/main.css';
import Levels from './Levels';

class App extends Component {

  state = {
    brand: "FunMath",
    name: null,
    level: -2,
    point: -1,
    toShow: TIME_OVER,
    timeRemaining: 0,
    thisLevelScore: 0,
    answer: "",
    highestScore: 0,
    finalAns: "",
    skipButtonPressed: 0,
    exit: 0
  }

  reset = ()=> {
    this.setState({
      skipButtonPressed: 0,
      toShow: TIME_OVER
    })
  }

  handleNextLevelButton = () =>{

    if(this.state.level === -1)
    {
        this.setState({
          level: this.state.level + 1,
          point: 0,
          toShow: TIME_RUNNING
        });
    }
    else if(this.state.level === -2){
        this.setState({
          level: this.state.level + 1,
          point: 0,
        });
    }
    else
    {
      this.setState({
        toShow: TIME_RUNNING,
        timeRemaining: 45
      });
    }
  }

  handleExit = () => {
    this.setState({
      exit: 1
    });
  }


  handleSkipLevelButton = () =>{
    let newScore = Math.floor(-0.3 * Math.abs(this.state.level) + -0.2 * Math.abs(this.state.point));
    let minm = -10;
    newScore = Math.min(minm, newScore);
    this.setState({
      skipButtonPressed: 1,
      level: this.state.level + 1,
      point: this.state.point + newScore,
      thisLevelScore: newScore,
      answer: "You have skipped the quetion.",
      finalAns: "SKIPPED",
      toShow: TIME_OVER
    })
  }

  answerList = (ansArray) =>{

    if(this.state.skipButtonPressed !== 1){

        let newScore = evalAnswer(ansArray, this.state.level, this.state.point);
        
        if(newScore > this.state.highestScore || newScore < 0)
        {
          this.setState({
            highestScore: newScore
          })
        }

        this.setState({
          level: this.state.level + 1,
          point: this.state.point + newScore,
          thisLevelScore: newScore,
          answer: ansArray === null ? "You didn't answer" : ansArray,
          finalAns: funCheckedArray()
        })
    }
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Row>

        <Col xs={12} md={12} lg={12}>
        <Header
          brand = {this.state.brand}
          name = {this.state.name}
          level = {this.state.level}
          point = {this.state.point} 
        />
        </Col>
        </Row>

        {endOfGame() === 1 || this.state.exit === 1 ?
          <EndPage 
              name = {this.state.name}
              point = {this.state.point}
              level = {this.state.level}
              highestScore = {this.state.highestScore}
          />
        
        :
          <div>
          <div>
                    {this.state.level > -2 ?
                      <div>
                    <div className="welcome-tag">Welcome {this.state.name} </div>
                    </div>
                    :
                    null
                    }
                    {this.state.level > -1 ?
                      <div>
                    <div className="welcome-tag">You are currently at level: {this.state.level+1} </div>
                    <div className="welcome-tag">Your points: {this.state.point} </div>
                    </div>
                    :
                    null}
                    </div>
            {this.state.level === -2 ?

              <Row>

                <Col xs={8} md={8} mdOffset ={1} xsOffse={1}>
                  <MainPage />
                  <input
                    autoFocus
                    type="text"
                    id = "inputbox"
                    placeholder = "Enter your name"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                  />
                </Col>
              </Row>
              :
              null
            }

            {this.state.level === -1 ?

              <Row>

                <Col xs={8} md={8} mdOffset ={1} xsOffse={1}>
                  <Levels />
                  <Grid>
                <Row>
                  <Col xs={3} md={2}>
                    <Button className="level" variant="primary" onClick = {this.handleNextLevelButton} > Easy </Button>
                    }
                  </Col>
                </Row>
              </Grid>
              
              <Grid>
                <Row>
                  <Col xs={3} md={2}>
                    <Button className="level" variant="primary" onClick = {this.handleNextLevelButton} > Hard </Button>
                    }
                  </Col>
                </Row>
              </Grid>

                </Col>
              </Row>
              :
              null
            }

              <Grid>

                <Row>

                  <Col xs={8} md={8}>
                    
                    {this.state.toShow === TIME_RUNNING && this.state.level>-1 ?  
                      <Question />
                      :
                      <div>
                        {this.state.level > 0 ?
                          <div className = "main-page-score-display">
                            Your score from previous level is <b>{this.state.thisLevelScore}</b><hr />
                            <div className = "show-answer">
                              Your answer: &nbsp;<b>{this.state.answer}</b><br/>
                              Filtered answer: &nbsp;<b>{this.state.finalAns}</b>
                            </div>
                          </div>
                          :
                          null
                        }
                      </div>   
                    } 
                    </Col>

                    <Col xs={3} md={2} mdOffset ={2} xsOffset={1}>
                      
                      {this.state.toShow === TIME_OVER ? 
                        
                        <div>
                        { this.state.level > 1 ? TIME_OVER : null }
                        </div>
                        :
                        <Timer
                          reset = {this.reset}
                        />
                      }

                    </Col>

                </Row>

                <Row>

                  <Col xs={8} md={8}>
                    {this.state.toShow === TIME_RUNNING ?
                      <Answer 
                        answerList = {this.answerList}
                      />
                      :
                      null
                    }

                  </Col>

                  <Col xs={3} md={2}>
                    {this.state.toShow === TIME_OVER || this.state.level === -1?
                      <Button
                        bsStyle="success" 
                        bsSize="large" 
                        onClick = {this.handleNextLevelButton} > {this.state.level === -2 ?
                          <div>Lets start</div> : <div>{this.state.level === -1 ? <div>Any Level</div> : <div>Next Level</div>}</div>}
                      </Button>
                      :
                      <Button
                        bsStyle="warning" 
                        bsSize="large" 
                        onClick = {this.handleSkipLevelButton} >Skip level
                      </Button>
                    }
                  </Col>

                </Row>

              </Grid>
                    <Button className="level" variant="primary" onClick = {this.handleExit} > Exit </Button>
                    }

              </div>
          }
      </div>
    );
  }
}

export default App;
