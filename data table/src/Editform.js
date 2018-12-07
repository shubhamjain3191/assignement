import React from 'react'
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form'

class Editform extends React.Component {
    constructor(props, context) {
        super(props, context);
        const { data } = props;
        this.state = {
            dataTobeEdit: { ...data },
        };
    }
    handlesave = (event) => {
        let edituser = this.state.dataTobeEdit;
        edituser[event.target.id] = event.target.value;
        this.setState({ dataTobeEdit: edituser });
    }
    handleFormSave = () => {
        this.props.edit(this.state.dataTobeEdit);
        this.setState({ dataTobeEdit: {} });
        this.props.close();
    }
    render() {
        let { datakeys } = this.props;
        let { dataTobeEdit } = this.state;
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.close} >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            {
                                datakeys.map(
                                    (value) => <span key={value}>
                                        <Form.Label>{value}</Form.Label>
                                        <Form.Control type="text" id={value} value={dataTobeEdit[value]} onChange={this.handlesave} />
                                    </span>
                                )
                            }
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>
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

export default Editform;

