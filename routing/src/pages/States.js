import React from 'react'
import Popup from "../Popup"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class States extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isshow: true
        }
    }
    
    open = () => {
        this.setState({ isshow: true });
    }
    close = () => {
        this.setState({ isshow: false });
    }
    countrydata(states, countrydetails, props) {
        const { stateid } = props.match.params;
        let filteredstate = states.filter((value) => value.name === stateid)
        let newcountrydetails={...countrydetails};
        newcountrydetails.states = filteredstate[0];
        let statedata = newcountrydetails;
        let time=new Date();
        console.log(time)
        return <Popup statedetails={statedata} isPopupOpen={this.state.isshow} close={this.close} {...props} />
    }
    createstatesLinks = (states, match) => {
        return (states.map((object) =>
            <li>
                <Link to={`${match.url}/${object.name}`} onClick={this.open}> {object.name}</Link>
            </li>
        )
        )
    }
    render() {
        const { countrydetails, match } = this.props;
        const { states } = this.props.countrydetails;
        return (
            <Router>
                <div>
                    <h2>States :</h2>
                    <ul>
                        {this.createstatesLinks(states, match)}
                    </ul>
                    <Route path={`${match.path}/:stateid`} exact render={props =>
                        // this.state.isshow && 
                        this.countrydata(states, countrydetails, { ...props })
                    } />
                </div>
            </Router>
        )
    }
}
export default States;