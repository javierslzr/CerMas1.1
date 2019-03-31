import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import API from "../utils/API";
import "../styles/Function.css";

class AddModal extends React.Component {
  state = {
    items: []
  };

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  onChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  newUser = e => {
    e.preventDefault();
    this.postAlumnos();
    this.handleClose();
    // window.location.reload(true);
  };

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    API.getCSV()
      .then(res => {
        console.log(res.data.length);
        var fieldsData = res.data[res.data.length - 1].data;
        this.setState({
          items: fieldsData
        });
        console.log(this.state);
      })
      .catch(err => console.log("FALLANDO" + err));
  };

  postAlumnos = () => {
    debugger;
    var items = this.state.value;
    console.log(items);
    API.saveCSV({ ...this.state })

      .then(res => {
        console.log(res.data);
        this.setState({
          items: this.state.items
        });
      })
      .catch(err => console.log("FALLANDO" + err));
    console.log(items);
  };

  render() {
    var keys = [];

    if (this.state.items && this.state.items.length > 0) {
      keys = Object.keys(this.state.items[0]);
    }

    const formRows = keys.map(key => {
      console.log(key);
      return (
        <>
          <Form.Label key={key}>{key}</Form.Label>
          <Form.Control
            onChange={this.onChange}
            type="input"
            placeholder={key}
            name={key}
          />
        </>
      );
    });

    return (
      <>
        <div className="AddContainer">
          <Button
            className="functionAddBtn"
            variant="primary"
            onClick={this.handleShow}
          >
            Add{" "}
          </Button>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Function</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group>{formRows}</Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.newUser}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddModal;
