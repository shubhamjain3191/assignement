import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
class Popup extends React.Component {
    render() {
        const { match } = this.props;
        return (
            <Router>
               { alert("hello")}
                <div style={{float: 'left', display : 'inline-block'}}>
                    <h2>States :</h2>
            
                </div>
            </Router>
        )
    }
}
export default Popup;