import React from "react";
import AllAlumnos from "../pages/AllAlumnos";
import Button from "react-bootstrap/Button";
import "../styles/Function.css";

class ButtonCheckbox extends React.Component {
  state = { showing: true };

  render() {
    const { showing } = this.state;
    return (
      <div className="GetAllContainer">
        <Button
          className="functionGetAllBtn"
          onClick={() => this.setState({ showing: !showing })}
        >
          Get all
        </Button>
        {showing ? <AllAlumnos /> : null}
      </div>
    );
  }
}
export default ButtonCheckbox;
