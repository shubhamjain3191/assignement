import React from 'react'
import States from "./States"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Country extends React.Component {

    countrydata(continentdetails, props) {
        const { countryid } = props.match.params;
        let countrydata = continentdetails.filter((value) => value.name === countryid)
        return <States countrydetails={countrydata[0]}  {...props} />
    }
    createcountryLinks = (continentdetails, match) => {
        return (continentdetails.map((object) =>
            <li>
                <Link to={`${match.url}/${object.name}`}> {object.name}</Link>
            </li>
        )
        )
    }
    render() {
        const { continentdetails, match } = this.props;
        return (
            <Router>
                <div>
                    <h2>Countries :</h2>
                    <ul>
                        {this.createcountryLinks(continentdetails, match)}
                    </ul>
                    <Route path={`${match.path}/:countryid`} exact render={props =>
                        this.countrydata(continentdetails, { ...props })
                    }
                    />
                </div>
            </Router>
        )
    }
}
export default Country;