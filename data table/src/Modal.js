import React from 'react'
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form'
import Error from "./Error"

class Modals extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            dataToSave: {},
            error: ""
        };
    }
    handleClose = () => {
        this.setState({ show: false });
    }
    handleShow = () => {
        this.setState({ show: true });
    }
    handlesave = (event) => {
        let adduser = this.state.dataToSave;
        adduser[event.target.id] = event.target.value;
        this.setState({ dataToSave: adduser });
    }
    handleFormSave = () => {
        this.props.add(this.state.dataToSave);
        this.setState({ dataToSave: {} });
        this.handleClose();
    }
    errorhandling = (event) => {
        console.log("hello errhnnnnn")
        const { fields } = this.props;
        return (<Error event={event} data={event.target.value} fields={fields} errstatement={this.errorStatement} />)
    }
    errorStatement = (statement) => {
        console.log("errrrrrrrrrrrr-----", statement)
        if (statement === "") {
            this.handlesave();
        }
        else {
            this.setState({ error: statement })
        }
    }
    render() {
        const { fields } = this.props;
        return (
            <>
                <br />
                <Button variant="primary" onClick={this.handleShow} style={{ float: 'right' }}>
                    Add User
          </Button><br /><br />

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            {
                                fields.map(
                                    (value) => <span key={value}>
                                        <Form.Label>{value}</Form.Label>
                                        <Form.Control type="text" id={value} placeholder={"Enter " + value} onBlur={this.errorhandling} />
                                        <label>{this.state.error}</label>
                                    </span>
                                )
                            }
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
              </Button>
                        <Button variant="primary" onClick={this.handleFormSave}>
                            Save
              </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default Modals;

