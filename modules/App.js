import React from 'react'
import NavLink from './NavLink';
// import { IndexLink } from 'react-router';

export default React.createClass({
  render() {
    return (
    	<div>
        <h4><NavLink to="/" onlyActiveOnIndex={ true }>Home</NavLink></h4>
    		<h1>React Router tutorial</h1>
    		<ul role="nav">
    			<li><NavLink to="/about">About</NavLink></li>
    			<li><NavLink to="/repos">Repos</NavLink></li>
    		</ul>
    		{this.props.children}
    	</div>
    )
  }
})
