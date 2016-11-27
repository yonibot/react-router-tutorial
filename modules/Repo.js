import React from 'react';

export default class Repo extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.params.repoName}</h1>
				<h4>User: {this.props.params.userName}</h4>
			</div>
		)
	}
}