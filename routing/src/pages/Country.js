import React from 'react'
import States from "../States"
import { Route, Link } from 'react-router-dom';
class Countrydetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isshow: true
        }
    }
    close = () => {
        this.setState({ isshow: false });
    }
    countrydata(states, countrydetails, props) {
        const { stateid } = props.match.params;
        let filteredstate = states.filter((value) => value.code === stateid)
        let newcountrydetails = { ...countrydetails };
        newcountrydetails.states = filteredstate[0];
        let statedata = newcountrydetails;
        return <States statedetails={statedata} isPopupOpen={this.state.isshow} close={this.close} {...props} />
    }
    createstatesLinks = (states, match) => {
        return (states.map((object) =>
            <li key={object.name}>
                <Link to={`${match.url}/${object.code}`} > {object.name}</Link>
            </li>
        )
        )
    }
    render() {
        const { countrydetails, match } = this.props;
        const { states } = this.props.countrydetails;
        return (
            <>
                <ul className="cssStyling" style={{ background: 'rgb(61, 114, 68, 0.705)' }}>
                    <h2>States :</h2>
                    {this.createstatesLinks(states, match)}
                </ul>
                <Route path={`${match.path}/:stateid`} render={props => {
                    return this.countrydata(states, countrydetails, { ...props })
                }
                } />
            </>
        )
    }
}
export default Countrydetails;