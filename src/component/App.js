import React from "react";
import OrderBookingForm from "./getUserData/orderBookingForm";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  render() {
    return (
      <div className="component-app">
        <OrderBookingForm/>
      </div>
    );
  }
}
//class based