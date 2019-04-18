import React,{Component} from 'react'
import api from './api';
import {Prompt} from '../react-router-dom';
export default class UserAdd extends Component{
	state={
		isBlocking:false
	}
	handleSubmit=(event) => {
		event.preventDefault();
		this.setState({isBlocking: false},() => {
			let username=this.username.value;
			let email=this.email.value;
			let user={username,email};
			api.createUser(user);
			this.props.history.push('/user/list');
		});
		//xxx
	}
	render() {
		//Line 22:  Unexpected use of 'location'  no-restricted-globals
		return (
			<form onSubmit={this.handleSubmit}>
				<Prompt
					when={this.state.isBlocking}
					message={
						loc=>`请问你是否确定要切换到${loc.pathname}?`
					}
				/>
				<div className="form-group">
					<label htmlFor="username" className="control-label">用户名</label>
					<input
						onChange={()=>this.setState({isBlocking:true})}
						ref={input => this.username=input} type="text" className="form-control" />
				</div>
				<div className="form-group">
					<label htmlFor="email" className="control-label">邮箱</label>
					<input
						onChange={()=>this.setState({isBlocking:true})}
						ref={input => this.email=input} type="email" className="form-control" />
				</div>
				<div className="form-group">
					<input type="submit" className="btn btn-primary"/>
				</div>
			</form>
		)
	}
}