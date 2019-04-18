import React,{Component} from 'react'
import {Route,Redirect} from '../react-router-dom';
// rest = {path,exact,,xxxxxx}
export default function ({component: Component,...rest}) {
	return (
		<Route {...rest} render={props => (
			localStorage.getItem('logined')? <Component {...props} />:<Redirect to={{pathname: '/login',state: {from:props.location.pathname}}}/>
		)}/>
	)
}