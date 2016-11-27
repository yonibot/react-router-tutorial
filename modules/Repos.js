import React from 'react';
import { Link, browserHistory } from 'react-router';
import NavLink from './NavLink';

export default class Repos extends React.Component {

	handleSubmit(e) {
		e.preventDefault();
		const userName = e.target.elements[0].value;
		const repo = e.target.elements[1].value;
		const path = `/repos/${userName}/${repo}`
		browserHistory.push(path)
	}

	render() {
		return (
			<div>
				<h1>Repos</h1>
				<ul>
					<li><NavLink to='/repos/yonibot/my_homepage'>Yonis Homepage Repo</NavLink></li>
	        <li><NavLink to="/repos/ivmarky/ivyrails">Ivy Rails</NavLink></li>
	        <li>
	        	<form onSubmit={this.handleSubmit}>
	        		<input type="text" placeholder="userName" />
	        		<input type="text" placeholder="repo" />
	        		<button type="submit">Go</button>
	        	</form>
	        </li>
        </ul>
        {this.props.children}
			</div>
		)
	}
}