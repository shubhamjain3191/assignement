import React from 'react'
import data from "../data"
import Popup from "../Popup"
import { BrowserRouter as Router,Route, Link } from 'react-router-dom';
class States extends React.Component {
    render() {
        const { match } = this.props;
        return (
            <Router>
                <div style={{float: 'left', display : 'inline-block'}}>
                    <h2>States :</h2>
                    <ul>{
                        data.map((value) =>

                            (value.name === match.params.countid ?
                                value.states.map((count) =>
                                    <li>
                                        <Link to={`/${count.name}`}> {count.name}</Link>
                                    </li>
                                )
                                : "")
                        )
                    }
                    </ul>
                    <Route path="/:stateid" exact component={Popup} />
                </div>
            </Router>
        )
    }
}
export default States;