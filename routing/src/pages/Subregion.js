import React from 'react'
import data from "../data"
import Country from './Country';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Subregion extends React.Component {
    render() {
        const { match } = this.props;
        return (
            <Router>
            <div>
                <h2>Regions</h2>
                <ul>{
                    data.map((value) =>
                        (value.region===match.params.id ?
                        <li>
                            <Link to={`/${value.subregion}`}> {value.subregion}</Link>
                        </li>
                        : "")
                    )
                }
                </ul>
                <Route path={`/:subregionid`} exact component={Country} />
            </div>
            </Router>
        )
    }
} export default Subregion;