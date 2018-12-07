import React from 'react';
let errors = {
    Name: {
        regex: /^[A-Za-z]{4,}$/,
        statement: "Name must contain atleast 4 character"
    },
    email: {
        regex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,
        statement: "Please enter valid email address"
    },
    number: {
        regex: /^[0-9]{10}$/,
        statement: "Please enter correct mobile no."
    }
}
class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
                error: ""
            }
    }
    errorChecking = () => {
        let { data, event } =this.props;
        let fieldTobechecked=errors[event.target.id];
        let reg=fieldTobechecked.regex;
        let stmt=fieldTobechecked.statement;
        if(!reg.test(data)){
            this.setState({error : stmt})
            this.props.errstatement(this.state.error)
        }
        else{
            this.setState({error : ""})
            this.props.errstatement(this.state.error)
        }
        // let key = errors[event.target.id];
        // let reg = key.regex;
        // let stmt = this.state.error;
        // stmt[event.target.id] = "";
        // let val = event.target.value;
        // if (!reg.test(val)) {
        //     stmt[event.target.id] = key.statement;
        //     this.setState({ [event.target.id]: event.target.value, error: stmt })
        // }
        // else {
        //     stmt[event.target.id] = "";
        //     this.setState({ [event.target.id]: event.target.value, error: stmt })
        // }

    }
    render() {
        console.log("hello errorrrrrr")
        return (
            this.errorChecking()
        )
    }
}
export default Error;