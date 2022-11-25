import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import EditProductMain from "../components/products/EditproductMain";
import { useParams } from "react-router-dom";

const ProductEditScreen = () => {
  const queryPrams = useParams();
  const productId = queryPrams.id;
  console.log(productId);
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditProductMain productId={productId} />
      </main>
    </>
  );
};
export default ProductEditScreen;
