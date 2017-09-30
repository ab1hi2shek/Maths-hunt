import React, {PropTypes, Component} from 'react';
import '../css/main.css';

export default class EndPage extends Component{

	static propTypes = {
		name: PropTypes.string.isRequired,
		point: PropTypes.number.isRequired,
		level: PropTypes.number.isRequired,
		highestScore: PropTypes.number.isRequired
	}

	render(){
		var ratio = this.props.point / this.props.level;
		var msg = "";
		if(ratio >= 250)
			msg = "!!!!Omg!! You are genius man! Go get some coffee by my name :D.";
		else if(ratio >= 150)
			msg = "Great work! You are really good. Keep doing the hard work :).";
		else if(ratio >= 50){
			msg = "Good to see that you finished off with a great score. Keep working hard";
			msg = msg + "hope you score more in next turn :).";
		}
		else if(ratio > 0)
			msg = "Good work! You are good, all you need is just Practice, Practice and Practice.";
		else
			msg = "YOOO!! you got negative points. Don't worry Electrons are negative too :P.";
		return(

			<div className="main-page">
				<h3>!!! Congratulations {this.props.name} !!! </h3>
				<div>
					You have successfully completed all the levels. A big ThankYou for playing this game.
				</div>
				<div>
					But don't get dissapointed, we are adding more intresting questions. Come back after
					few days and have fun again :)
				</div>

				<hr />

				<h4> Your Result </h4>
				<div>
					Point: {this.props.point}
				</div>
				<div>
					Level crossed: {this.props.level}
				</div>
				<div>
					Highest score obtained: {this.props.highestScore}
				</div>
				<div>
					Point to Level Ratio: {ratio}
				</div>
				<hr />
				<div>
					{msg}
				</div>
				<h3>!!!!! HAVE FUN !!!!! </h3>
			</div>

		);
	}
}