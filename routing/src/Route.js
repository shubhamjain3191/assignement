import React from 'react'
import Continent from './pages/Continent';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class MyRoute extends React.Component {

    continentdata(Alldata, props) {
        const { continentid } = props.match.params;
        let continentdata = Alldata.filter((value) => value.region === continentid)
        return <Continent continentdetails={continentdata}  {...props} />
    }
    createcontinentlinks = (Alldata) => {
        let continentlist = new Set(Alldata.map((value) => value.region));
        continentlist = [...continentlist]
        return (
            continentlist.map((value) =>
                <li>
                    <Link to={`/${value}`}> {value}</Link>
                </li>
            )
        )
    }
    render() {
        let { Alldata } = this.props;
        return (
            <Router>
                <div>
                    <h2>Continents:</h2>
                    <ul>
                        {this.createcontinentlinks(Alldata)}
                    </ul>
                    <Route path="/:continentid" exact render={props =>
                        this.continentdata(Alldata, { ...props })
                    }
                    />
                </div>
            </Router>

        )
    }

}
export default MyRoute;