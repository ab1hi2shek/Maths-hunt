import React, { PropTypes, Component} from 'react';


export default class Timer extends React.Component{

	static propTypes = {
		reset: PropTypes.func.isRequired
	};

	state = {
		timeRemaining: 45
	}

	componentDidMount(){
		this.tick();
	};

	componentWillUnmount()
	{
		clearInterval(this.interval);
	};

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
	      this.props.reset();
	    }

    };

	render(){
		var temp = "green";
		if(this.state.timeRemaining < 30 && this.state.timeRemaining >= 15)
			temp = "yellow";
		else if(this.state.timeRemaining < 15)
			temp = "red";

		return(
			<div className = {"time-count-" + temp}>
				{ this.state.timeRemaining } &nbsp;
				Seconds
			</div>
		);
	}
}