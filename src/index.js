import React,{Component} from 'react'
import ReactDOM from 'react-dom';
//let {Provider,Consumer}=React.createContext();
class Provider extends Component{
	render() {
		let value=this.props.value;
		let children=this.props.children;
		children = children.map(child => {
			if (child.type.toString().includes('Consumer'))
				return React.cloneElement(child,{value});
			else
				return child;
		});
		return <div>{children}</div>;
   }
}
class Consumer extends Component{
	render() {
		return this.props.children(this.props.value);
	}
}
ReactDOM.render((
<Provider value={1}>
		<Consumer>
			{
				value => <div>{value}</div>
			}
		</Consumer>
		<div>2</div>
</Provider>

),document.querySelector('#root'));
