import React, {PropTypes, Component} from 'react';
import '../css/main.css';
import {TIME_OVER, TIME_RUNNING} from '../consts/questions';

export default class Answer extends Component{

	static propTypes = {
		answerList: PropTypes.func.isRequired
	}

	state = {
		value: null
	};

	componentWillUnmount(){
		this.props.answerList(this.state.value);
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		});

	};

	render(){
		return(

			<div>
        		<input
          			type="text"
          			id = "inputbox"
          			placeholder = "Enter Answer seperated by space"
          			value={this.state.value}
          			onChange={this.handleChange}
        		/>
      		</div>

		);
	}
}