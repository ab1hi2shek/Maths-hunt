import React, { PropTypes, Component} from 'react';


export default class Timer extends React.Component{

	static propTypes = {
		reset: PropTypes.func.isRequired,
		timeRemaining: PropTypes.number
	};

	componentDidMount(){
		this.props.reset();
	};

	componentWillUnmount()
	{
		clearInterval(this.interval);
	};

	render(){
		return(

			<div>
				Time Remaining: &nbsp;
				{ this.props.timeRemaining } &nbsp;
				Seconds
			</div>
		);
	}
}