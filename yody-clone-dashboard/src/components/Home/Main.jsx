import React from "react";
import TopTotal from "./TopTotal";
import LatestOrder from "./LatestOrder";
import SaleStatistics from "./SalesStatistics";
import ProductsStatistics from "./ProductsStatistics";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Charts from "../../screens/Charts";

const Main = () => {
  const [data, setData] = useState([]);
  const orderList = useSelector((state) => state.orderList);
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  const { loading, error, orders } = orderList;
  useEffect(() => {
    if (loading === false) {
      let dataOrders = orders.map((order) => {
        return {
          name: order.createdAt.slice(0, 10),
          totalPrice: order.totalPrice,
          isPaid: order.isPaid,
        };
      });
      let data = dataOrders.reduce((data, currentState, currentIndex) => {
        let i = data.length - 1;
        if (currentIndex === 0) {
          if (currentState.isPaid === true) {
            data = data.concat([
              {
                name: currentState.name,
                paid: currentState.totalPrice,
                notPaid: 0,
              },
            ]);
            return data;
          } else {
            data = data.concat([
              {
                name: currentState.name,
                paid: 0,
                notPaid: currentState.totalPrice,
              },
            ]);
            return data;
          }
        } else {
          if (currentState.name === data[i].name) {
            if (!currentState.isPaid) {
              data[i].notPaid += currentState.totalPrice;
              return data;
            } else {
              data[i].paid += currentState.totalPrice;
              return data;
            }
          } else {
            if (!currentState.isPaid) {
              data = data.concat([
                {
                  name: currentState.name,
                  paid: 0,
                  notPaid: currentState.totalPrice,
                },
              ]);
              return data;
            } else {
              data = data.concat([
                {
                  name: currentState.name,
                  paid: currentState.totalPrice,
                  notPaid: 0,
                },
              ]);
              return data;
            }
          }
        }
      }, []);
      data.map((dt) => {
        dt.paid = dt.paid.toFixed(2);
        dt.notPaid = dt.notPaid.toFixed(2);
      });
      setData(data.reverse());
    }
  }, [loading]);
  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title"> Dashboard </h2>
        </div>
        {/* Top Total */}
        <TopTotal orders={orders} products={products} />

        <div className="row">
          {/* STATICS */}
          <Charts data={data} />
        </div>

        {/* LATEST ORDER */}
        <div className="card mb-4 shadow-sm">
          <LatestOrder orders={orders} loading={loading} error={error} />
        </div>
      </section>
    </>
  );
};

export default Main;
