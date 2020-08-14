// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios'



// class API extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { emp: [] };
//   }
//   componentDidMount() {
//     return axios.get(
//       "https://randomuser.me/api").then(res => {
//         console.log(res.data)
//         this.setState({ emp: res.data });

//       });



//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           <li> {this.state.emp.results[0].name.first}</li>
//         </ul>
//       </div>
//     );
//   }
// }
// export default API