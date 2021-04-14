import React, { Component } from 'react';
import EmployeeCard from '../EmployeeCard'
import API from '../../utils/API'
import './style.css';


class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],

        }
    }
    componentDidMount() {
        API.getUsers()
            .then((res) => {
                this.setState({ users: res.data.results[0] })
                console.log(res.data.results);
                console.log(this.state);
            })
    }

    
    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                    <EmployeeCard 
                    name={this.state.users.name.first}************
                    // name={this.state.users[0]}
                    // number={this.stateusers[0]}
                    // email={this.stateusers[0]}
                    />
                </thead>
            </table>
        )
    }
}
export default Table;


{/* <th onclick={() => this.sortByName()}>Name</th> */ }

          //return all our data and display to the page
            //bring in sea


        // sortByName() {
            //look up sort method- needs to contain user sort and by which direction using state
            //state direction setstate sort the state by a, b, c etc.. then direct the state direction where to go 
            //google sort methods for reACT
            //then it will be passed in the render table using .filter
        // }

        // render and return your axios call info here


        // handleInputChange = (event) => {
        //     let { name, value } = event.target;
        //     this.setState({
        //         [name]: value,
        //     })
            
        // }