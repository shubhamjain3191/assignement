import React from 'react'
import States from "./States"
import data from "../data"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Country extends React.Component {
    render() {
        const { match } = this.props;
        return (
            <Router>
                <div style={{float: 'left', display : 'inline-block'}}>
                    <h2>Countries :</h2>
                    <ul>
                    {
                        data.map((value) =>
                        
                            (value.region === match.params.continentid ?
                                <li>
                                    <Link to={`/${value.name}`}> {value.name}</Link>
                                </li>
                                : "")
                        )
                    }
                    </ul>
                    <Route path="/:countid" exact component={States} />
                </div>
            </Router>
        )
    }
}
export default Country;