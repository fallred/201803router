import React,{Component} from 'react';
import {Consumer} from './context';
export default class Back extends Component{
	render() {
		return (
			<Consumer>
				{
					value => {
						
						return <a onClick={()=>value.history.goback()}>返回</a>;
					}
				}
		   </Consumer>
	   )
   }
}