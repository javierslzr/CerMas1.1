import React, { Component } from "react";
import API from "../utils/API";
import Table from "react-bootstrap/Table";
import EditModal from "../components/editModal";
import "../styles/Function.css";
import Store from "../utils/Store";

class AllAlumnos extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    var tableData = Store.get("userData").user.tables;
    console.log("this is tableData " + tableData);
    API.getOneTable({ _id: tableData })
      .then(res => {
        const fieldsData = res.data[0].csv;
        this.setState({
          items: fieldsData
        });
      })
      .catch(err => console.log("FALLANDO" + err));
  };

  onEditClick = id => {
    // this.props.history.push(`/${id}`);
  };

  render() {
    var keys = [];
    var values = [];
    if (this.state.items && this.state.items.length > 0) {
      keys = Object.keys(this.state.items[0]);
      values = this.state.items;
      console.log(values);
    }
    return (
      <container fluid>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              {keys.map(function(key) {
                return <th key={key}>{key}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {values.map(function(value) {
              const valueCols = keys.map(function(key) {
                return <td>{value[key]}</td>;
              });

              return <tr>{valueCols}</tr>;
            })}
          </tbody>
        </Table>
      </container>
    );
  }
}

export default AllAlumnos;
