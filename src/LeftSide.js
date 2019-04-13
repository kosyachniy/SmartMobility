import React from "react";
import { Col, Button, Icon } from "antd";
import "antd/dist/antd.css";
import RightSide from "./RightSide";
import "./left.css";

export default class LeftSide extends React.Component {
  state = {
    showingWindow: 0
  };

  onClick = num => {
    let newWindow;
    if (this.state.showingWindow == num) {
      newWindow = 0;
    } else {
      newWindow = num;
    }
    this.setState({
      showingWindow: newWindow
    });
  };

  render() {
    const window =
      (this.state.showingWindow == 0 && "Nichego") ||
      (this.state.showingWindow == 1 && "First window") ||
      (this.state.showingWindow == 2 && "Second window") ||
      (this.state.showingWindow == 3 && "Third window");
    return (
      <div>
        <Col span={6} className="kek" style={{ height: "100%" }}>
          <div className="header" style={{ textAlign: "center" }}>
            <div
              className="main_title"
              id="title"
              style={{ display: "inline" }}
            >
              EasyMotion
            </div>
          </div>
          <div
            className="addButton"
            style={{ textAlign: "center", marginTop: "7%" }}
          >
            <Button
              shape="circle"
              icon="minus"
              size={"large"}
              className="button"
              onClick={() => this.onClick(1)}
            />
            <h3>Share a car</h3>
          </div>
          <div
            className="takeButton"
            style={{ textAlign: "center", marginTop: "7%" }}
          >
            <Button
              shape="circle"
              icon="plus"
              size={"large"}
              className="button"
              onClick={() => this.onClick(2)}
            />
            <h3>Rent a car</h3>
          </div>
          <div
            className="rideButton"
            style={{ textAlign: "center", marginTop: "7%" }}
          >
            <Button
              shape="circle"
              icon="car"
              size={"large"}
              className="button"
              onClick={() => this.onClick(3)}
            />
            <h3>Take a ride</h3>
          </div>
        </Col>
        <RightSide show={window} />
      </div>
    );
  }
}
