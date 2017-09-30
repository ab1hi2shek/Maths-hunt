import React, {Component, PropTypes} from 'react';
import '../css/main.css';

import {generateRandom} from '../consts/questions';

export default class Question extends Component{
	render(){
		return(
			<div className = "main-page">
				<div>
					Write as many answer as possible. Score will be displayed as soon as the time
					runs out. Try to answer correctly as your score will be deducted for each wrong
					answer.
					<hr/>
					<h3><b>Question:</b></h3>
				</div>
				<div>
					{generateRandom()}
				</div>
			</div>
		);
	}
}