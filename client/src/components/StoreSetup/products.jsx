import React from "react";
import PropTypes from "prop-types";
import API from "../../utils/API";

class ProductsCard extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    units: PropTypes.number.isRequired,
    manufacturer: PropTypes.string.isRequired
  };

  static defaultProps = {
    name: "",
    image: "",
    description: "",
    category: "",
    price: "",
    units: "",
    manufacturer: ""
  };

  ProductsInfo = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if (this.areInputsValid()) {
      // console.log(this.state);
      API.getProducts({})
        .then(response => {
          this.props.history.push("/userIndex");
          this.props.closeModal();
        })
        .catch(err => console.log(err));
    }
  };

  handleFormPaypal = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if (this.areInputsValid()) {
      // console.log(this.state);
      API.checkout({})
        .then(response => {
          this.props.history.push("/userIndex");
          this.props.closeModal();
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {this.props.name}
            </li>
            <li>
              <strong>Description:</strong> {this.props.description}
            </li>
            <li>
              <strong>Category:</strong> {this.props.category}
            </li>
            <li>
              <strong>Price:</strong> {this.props.price}
            </li>
            <li>
              <strong>Units:</strong> {this.props.units}
            </li>
            <li>
              <strong>Manufacturer:</strong> {this.props.manufacturer}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductsCard;
