import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th></th>
      </tr>
    </thead>
  );
};



const TableBody = (props) => {
  const handleDelete=(name)=>{
    console.log(name)
    props.deleteUser(name)
  }
  return (
    <tbody>
      {props.users.map((user, index) => {
        return (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.job}</td>
            <td><button onClick={()=>handleDelete(user.name)}>Delete</button></td>
          </tr>
        );
      })}
    </tbody>
  );
};

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody users={this.props.users} deleteUser={this.props.deleteUser} />
      </table>
    );
  }
}

export default Table;
