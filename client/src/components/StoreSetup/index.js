import React from "react";
import ProductsCard from "./products";
import Store from "../../utils/Store";
import products from "./products.json";
import Title from "./Title";
import Wrapper from "./Wrapper";

function StoreSetup() {
  const { token } = Store.get("userData");
  if (!token) window.location = "/";
  return (
    <Wrapper>
      <Title>Products List</Title>
      {products.map((product, index) => {
        return (
          <ProductsCard
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
            units={product.units}
            manufacturer={product.manufacturer}
            key={index}
          />
        );
      })}
    </Wrapper>
  );
}

export default StoreSetup;
