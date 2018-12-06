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
        let continentlist = new Set(Alldata.map((value) => value.region ? value.region : value.region = "Other"));
        continentlist = [...continentlist]
        return (
            continentlist.map((value) =>
                <li key={value}>
                    <Link to={`/${value}`}> {value}</Link>
                </li>
            )
        )
    }
    render() {
        let { Alldata } = this.props;
        return (
            <Router>
                <>
                    <ul className="cssStyling" style={{ background: 'rgba(212, 145, 57, 0.705)' }}>
                        <h2>Continents:</h2>
                        {this.createcontinentlinks(Alldata)}
                    </ul>
                    <Route path="/:continentid" render={props =>
                        this.continentdata(Alldata, { ...props })
                    }
                    />
                </>
            </Router>

        )
    }

}
export default MyRoute;