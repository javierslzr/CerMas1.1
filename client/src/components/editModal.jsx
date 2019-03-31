import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import API from "../utils/API"



class EditModal extends React.Component {


    state = {
        alumno: "",
        edad: undefined,
        direccion: "",
        curp: undefined,
        enfermedad: ""
    }


    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    editUser = () => {
        this.handleShow();
        this.loadAlumno();
        console.log(this.props.id)
    }

    loadAlumno = () => {

        API.getOneCSV(this.props.id)
            .then(res => {
                this.setState({
                    alumno: res.data.alumno,
                    edad: res.data.edad,
                    direccion: res.data.direccion,
                    curp: res.data.curp,
                    enfermedad: res.data.enfermedad
                })
            })
            .catch(err =>

                console.log("FALLANDO" + err));
    };

    handleClose() {
        this.setState({ show: false });
        this.handleUpdate()
        window.location.reload(true);

    }

    handleDelete = () => {
        debugger;
        API.deleteAlumno(this.props.id)
            .then(res => {
                this.setState({
                    alumnos: res.data
                })
            })
            .catch(err =>

                console.log("FALLANDO" + err));
        this.handleClose()
        window.location.reload(true);
    }


    handleShow() {
        this.setState({ show: true });
    }

    handleUpdate() {
        var alumno = this.state.alumno
        var edad = this.state.edad
        var direccion = this.state.direccion
        var curp = this.state.curp
        var enfermedad = this.state.enfermedad

        API.updateAlumno(this.props.id, { ... this.state })
            .then(res => {
                console.log(res)
                this.setState({
                    alumno: alumno,
                    edad: edad,
                    direccion: direccion,
                    curp: curp,
                    enfermedad: enfermedad
                })
                console.log(this.state.data)
            })
            .catch(err =>
                console.log("FALLANDO" + err));
    };


    render() {
        return (
            <>
                <Button variant="primary" onClick={this.editUser}>
                    Edit                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Function</Modal.Title>
                    </Modal.Header>


                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control value={this.state.alumno} type="input" placeholder="Enter email" onChange={this.onChange} name="alumno" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Edad</Form.Label>
                                <Form.Control value={this.state.edad} type="input" placeholder="Edad" onChange={this.onChange} name="edad" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Direccion</Form.Label>
                                <Form.Control value={this.state.direccion} type="input" placeholder="Edad" onChange={this.onChange} name="direccion" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Curp</Form.Label>
                                <Form.Control value={this.state.curp} type="input" placeholder="Curp" onChange={this.onChange} name="curp" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Enfermedad</Form.Label>
                                <Form.Control value={this.state.enfermedad} type="input" placeholder="Enfermedad" onChange={this.onChange} name="enfermedad" />
                            </Form.Group>

                        </Form>

                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleDelete}>
                            Delete
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                    </Button>
                    </Modal.Footer>

                </Modal>
            </>
        );

    }
}

export default EditModal;