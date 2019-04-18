import React,{Component} from 'react';
import {Consumer} from './context';
import pathToRegexp from 'path-to-regexp';
export default class Route extends Component{
	render() {
		return (
			<Consumer>
				{
					value => {
						let {location: {pathname}}=value;// /user
						let {path="/",component: Component,exact=false,render,children}=this.props;
						let keys=[];//[id]
						let regexp=pathToRegexp(path,keys,{end: exact});
						let result=pathname.match(regexp);
						let props={
							location: value.location,
							history:value.history
						}
						if (result) {//[匹配的字符串,第一个分组]
							let [,...values]=result;// result.slice(1);
							keys=keys.map(key => key.name);//[id]
							let params = keys.reduce((memo,name,index) => {
								memo[name]=values[index];
								return memo;
							},{});
							let match={
								url:pathname,
								path,
								params
							}
							props.match=match;
							if (Component) {
								return <Component {...props}/>;
							} else if (render) {
								return render(props);
							} else if (children) {
								return children(props);
							} else {
								return null;
							}
						} else {
							if (children) {
								return children(props);
							} else {
								return null;
							}
						}
					}
				}
			</Consumer>
		)
	}
}