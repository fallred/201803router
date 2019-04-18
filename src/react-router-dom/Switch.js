import React,{Component} from 'react'
import {Consumer} from './context';
import pathToRegexp from 'path-to-regexp';
export default class Switch extends Component{
	render() {
		return (
			<Consumer>
				{
					value => {
						let {location: {pathname}}=value;
						let children=this.props.children;
						for (let i=0;i<children.length;i++){
							let child=children[i];
							//path的默认值为/ exact默认值为false,非精确匹配 /user/1
							let {path="/",exact=false}=child.props;//:id
							let reg=pathToRegexp(path,[],{end: exact});
							if (reg.test(pathname)) {
								return child;
							}
						}
						return null;
					}
				}
		   </Consumer>
	   )
   }
}