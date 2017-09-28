import React, {Component, PropTypes} from 'react';
import {Navbar} from 'react-bootstrap';

export default class Header extends Component{

	static propTypes = {
		brand: PropTypes.string,
		name: PropTypes.string,
		point: PropTypes.number,
		level: PropTypes.number
	}

	render(){
		return(
			<Navbar>
    			<Navbar.Header>
      				<Navbar.Brand>
        				<b>{this.props.brand}</b>
      				</Navbar.Brand>
    			</Navbar.Header>

    			<Navbar.Collapse>

    				<Navbar.Text>
    					Welcome! &nbsp;
    					<b>
    						{this.props.name}
    					</b> 
    				</Navbar.Text>

      				<Navbar.Text pullRight>
      					{this.props.point !== -1 ?
      						<div>
		      					Point: &nbsp;
		      					<b>
		      						{this.props.point}
		      					</b>
	      					</div>
	      					:
	      					null
      					} 
      				</Navbar.Text>

      				<Navbar.Text pullRight>
      					{this.props.level !== -1 ?
      						<div>
		      					Level: &nbsp;
		      					<b>
		      						{this.props.level}
		      					</b>
		      				</div>
		      				:
		      				null
      					} 
      				</Navbar.Text>

    			</Navbar.Collapse>

  			</Navbar>
		);
	}
}