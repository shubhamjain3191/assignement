import React from 'react'
import Country from './pages/Country';
import data from "./data"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class MyRoute extends React.Component {
    render() {
        let continents=new Set(data.map((value)=>value.region));
        continents=[...continents]
        return (
            <Router>
                <div style={{float: 'left',display : 'inline-block'}}>
                    <h2>Continents:</h2>
                    <ul>{
                        continents.map((value) =>
                            <li>
                                <Link to={`/${value}`}> {value}</Link>
                            </li>
                        )
                    }
                    </ul>
                    <Route path="/:continentid" exact component={Country} />
                </div>
            </Router>

        )
    }
}
export default MyRoute;