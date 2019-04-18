import React,{Component} from 'react';
import {Provider} from './context';
//每当地址栏里锚点发生改变的时候，都需要重新匹配
//#/  #/user
export default class HashRouter extends Component{
	state={
		location: {
			pathname:window.location.pathname
		}
	}
	componentDidMount() {
	}
	render() {
		let value={
			location: window.location.pathname,
			history: {
				push(to) {
					window.history.pushState({},null,to);
				}
			}
		}
		return (
			<Provider value={value}>
				{this.props.children}
			</Provider>
		)
	}
}