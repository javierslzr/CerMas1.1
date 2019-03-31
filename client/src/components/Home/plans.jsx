import React from "react";
import "../../styles/plans.css";
import Card from "react-bootstrap/Card";
import SigninModal from "../Modals/SigninModal";

class Plans extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSigninModal: false
    };
  }

  toggleModal = modal => {
    this.setState({
      [modal]: !this.state[modal]
    });
  };

  render() {
    return (
      <div className="plans-container">
        <Card body>
          <div className="container1">
            <h4>
              <b>Starter</b>
            </h4>
            <h1>
              <b>$ O /mo</b>
            </h1>
            <p>TEST THE WATERS</p>
            <hr />
            <p>1 User Profile</p>
            <p>1 Database Management</p>
            <p>Basic Access</p>
            <p>Free Updates</p>
            <hr />
            <button
              className="plan-btn"
              onClick={() => {
                this.toggleModal("showSigninModal");
              }}
            >
              SIGN UP NOW
            </button>
          </div>
        </Card>
        <Card body>
          <div className="container2">
            <h4>
              <b>PROFESSIONAL</b>
            </h4>
            <h1>
              <b>$ 51 /mo</b>
            </h1>
            <p>GET THE JOB DONE AND GROW</p>
            <hr />
            <p>3 Users Profiles</p>
            <p>Multiple Database Management</p>
            <p>Full Access</p>
            <p>Free Updates</p>
            <p>Cloud Data Backup</p>
            <hr />
            <button
              className="plan-btn"
              onClick={() => {
                this.toggleModal("showSigninModal");
              }}
            >
              SIGN UP NOW
            </button>
          </div>
        </Card>
        <Card body>
          <div className="container3">
            <h4>
              <b>PREMIUM</b>
            </h4>
            <h1>
              <b>$ 71 /mo</b>
            </h1>
            <p>THE BEST FOR EXPONENTIAL GROW</p>
            <hr />
            <p>15 Users Profiles</p>
            <p>All Professional Functions Plus:</p>
            <p>24/7 Phone Support</p>
            <p>Data Analitics and Statistics</p>
            <p>Graphic Information Display</p>
            <hr />
            <button
              className="plan-btn"
              onClick={() => {
                this.toggleModal("showSigninModal");
              }}
            >
              SIGN UP NOW
            </button>
          </div>
        </Card>
        {this.state.showSigninModal ? (
          <SigninModal
            closeModal={() => {
              this.toggleModal("showSigninModal");
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default Plans;
