import React,{Component} from 'react'
import api from './api';
import {Link} from '../react-router-dom';
export default class UserList extends Component{
	state={
		users:[]
	}
	componentWillMount() {
		let users=api.getUsers();
		this.setState({users});
	}
	handleDelete=(id) => {
		let users = api.delUser(id);
		this.setState({users});
	}
	render() {
		return (
			<table className="table table-bordered">
				<thead>
					<tr>
					  <th>ID</th>
						<th>用户名</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					{
						this.state.users.map(user => (
							<tr key={user.id}>
								<td>
									<Link to={{pathname:`/user/detail/${user.id}`,state:user}}>
									    {user.id}
								     </Link>
								</td>
								<td>{user.username}</td>
								<td>
									<button
										onClick={()=>this.handleDelete(user.id)}
										className="btn btn-danger">删除</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		)
	}
}