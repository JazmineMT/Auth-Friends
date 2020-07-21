import React from "react";

import axios from 'axios'
import axiosWithAuth from '../utilis/axiosWithAuth'





class Friends extends React.Component {
    state = {
        friends: [] ,
        initialState :{
            name: "",
            age:"",
            email:"",
        }
    }

    componentDidMount() {
        this.getData();
    }


    getData = () => {
        axiosWithAuth()
            .get("api/friends")
            .then(res => {
                this.setState({
                    friends: res.data
                })
            }) 
            .catch( err => console.log (err))
    }

    handleChange = e => {
        this.setState({
            initialState: {
                ...this.state.initialState,
                [e.target.name] : e.target.value
            }
        })
    }


    newFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('http://localhost:5000/api/friends',{
            name: this.state.initialState.name,
            age: this.state.initialState.age,
            email: this.state.initialState.email,
        })
        .then( res =>  {
            this.getData(res)

        })
        .catch( err => console.log(err))
    }

    render() {
        return (
            <div>
             <form onSubmit={this.newFriend}>
                 <input
                 type='text'
                 name='age'
                 value={this.state.initialState.age}
                 onChange={this.handleChange}
                 placeholder='age'
                 />
                 <input
                 type='text'
                 name='name'
                 value={this.state.initialState.name}
                 onChange={this.handleChange}
                 placeholder='name'
                 />
                 <input
                 type='text'
                 name='email'
                 value={this.state.initialState.email}
                 onChange={this.handleChange}
                 placeholder='email'
                 />
                 <button>Create New Friend</button>
             </form>



                {this.state.friends.map( person => (
                    <div>
                        <p>{person.name}</p>
                        <p>{person.age}</p>
                        <p>{person.email}</p>
                    </div>
                    
                ))}
            </div>
        )
    }



}


export default Friends;