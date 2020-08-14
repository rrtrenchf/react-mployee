import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import SearchForm from "./components/searchForm"
import EmpTable from "./components/EmpTable"



class App extends React.Component {
  state={firstName:"",
    lastName:"",
    age: "",
    search: "",
    Emp:[]
    
  }
  componentDidMount() {
    return axios.get(
      "https://randomuser.me/api/?results=10").then(res => {
        this.setState({ emp: res.data.results });
        console.log(res.data)
        const firstName = res.data.results[0].name.first
        const lastName = res.data.results[0].name.last
        const image = res.data.results[0].picture.thumbnail
        const age = res.data.results[0].dob.age

        console.log(firstName)
        console.log(lastName)
        console.log(image)
        console.log(age)
        

      });



  }
  // changeHandler = e => this.setstate ({[e.target.name]: e.targe})
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  sort = event => {
    event.preventDefault()
    let empCopy=[
      this.name.Emp
    ]

  }


  render() {
    const {firstName,lastName,age,image}=this.state
    return (
      <div>
       <SearchForm
       search = {this.state.search}
       handleInputChange={this.handleInputChange}
       
       />
       <EmpTable
       Emp = {this.state.emp}
       search = {this.state.search}
       />
    <li>{this.state.firstName}</li>
    </div>
      
    );
  }

}

export default App;
