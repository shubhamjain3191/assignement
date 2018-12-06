import React from 'react'
import Country from "./Country"
import { Route, Link } from 'react-router-dom';
class Continentdetails extends React.Component {

    countrydata(continentdetails, props) {
        const { countryid } = props.match.params;
        let countrydata = continentdetails.filter((value) => value.code3 === countryid)
        return <Country countrydetails={countrydata[0]}  {...props} />
    }
    createcountryLinks = (continentdetails, match) => {
        return (continentdetails.map((object) =>
            <li key={object.name}>
                <Link to={`${match.url}/${object.code3}`}> {object.name}</Link>
            </li>
        )
        )
    }
    render() {
        const { continentdetails, match } = this.props;
        return (
            <>
                <ul className="cssStyling" style={{ background: 'rgba(98, 107, 189, 0.705)' }}>
                    <h2>Countries :</h2>
                    {this.createcountryLinks(continentdetails, match)}
                </ul>
                <Route path={`${match.path}/:countryid`} render={props =>
                    this.countrydata(continentdetails, { ...props })
                }
                />
            </>
        )
    }
}
export default Continentdetails;