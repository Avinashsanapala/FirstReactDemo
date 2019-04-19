import React, { Component } from 'react';
import './App.css';



class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: [
        {
          'id': 1,
          'name': 'Avinash',
          'age': 20,
          'Emp_Code':'3080'
        },
        {
          'id': 2,
          'name': 'Ramesh',
          'age': 21,
          'Emp_Code':'3081'
        },
        {
          'id': 3,
          'name': 'Rajesh',
          'age': 22,
          'Emp_Code':'3082'
        },
        {
          'id': 4,
          'name': 'suresh',
          'age': 24,
          'Emp_Code':'3085'
        }
      ],
      displayData: [{
        'id': 1,
        'name': 'Avinash',
        'age': 20,
        'Emp_Code':'3080'
      },
      {
        'id': 2,
        'name': 'Ramesh',
        'age': 21,
        'Emp_Code':'3081'
      },
      {
        'id': 3,
        'name': 'Rajesh',
        'age': 22,
        'Emp_Code':'3082'
      },
      {
          'id': 4,
          'name': 'suresh',
          'age': 24,
          'Emp_Code':'3085'
      }]
    }
  }
  handleChange = (person) => {
    console.log(person.target.value)
    console.log(person.target)
    const displayData = this.state.data.filter( ele => ele.name === person.target.value);
    this.setState({
      displayData: displayData,
      text: person.target.value
    })
  }

  render() {
    const options = this.state.data.map((person, index) => (
      <option key={person.id} value={person.name} >{person.name}
      </option>
  ))

    return <div className="App">
        <h1>Sample Application</h1>
        <select class="DropDown" onChange= {(event) => this.handleChange(event)}>
        <option key="0" value="" >select
      </option>
         {options}
        </select>
        <div>
          <input value={this.state.text}/>
        </div>
        
        <table className="TableData"> 
          <tbody>
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Emp_Code</th>
            </tr>
            {this.state.displayData.map((person, i) => <TableRow key={i}
              data={person} />)}
          </tbody>
        </table>
      </div>
    ;
  }
}
class TableRow extends React.Component {
  render() {
     return (
        <tr>
           <td>{this.props.data.id}</td>
           <td>{this.props.data.name}</td>
           <td>{this.props.data.age}</td>
           <td>{this.props.data.Emp_Code}</td>

        </tr>
     );
  }
}

export default Form;
