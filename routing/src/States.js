import React from 'react'
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class Statedetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopupOpen: this.props.isPopupOpen
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.statedetails !== prevProps.statedetails) {
            this.setState({ isPopupOpen: !this.state.isPopupOpen })
        }
    }
    render() {
        const { statedetails } = this.props;
        return (
            this.state.isPopupOpen && <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>
                            Continent: {statedetails.region}
                        </label><br />
                        <label>
                            Region: {statedetails.subregion}
                        </label><br />
                        <label>
                            Country: {statedetails.name}
                        </label><br />
                        <label>
                            Country code: {statedetails.code3}
                        </label><br />
                        <label>
                            State: {statedetails["states"].name}
                        </label><br />
                        <label>
                            State code: {statedetails["states"].code}
                        </label>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.close}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}

export default Statedetails;