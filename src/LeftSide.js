import React from "react";
import { Col, Button, Icon } from "antd";
import "antd/dist/antd.css";
import RightSide from "./RightSide";

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
        <Col span={6} style={{ backgroundColor: "white", height: "100%" }}>
          <div className="header">
            <div className="logo" style={{ display: "inline" }}>
              <Icon type="home" />
            </div>
            <div className="user" style={{ float: "right" }}>
              <div
                className="faq"
                style={{ display: "inline", marginRight: "10px" }}
              >
                <Icon type="question" />
              </div>
              <div className="account" style={{ display: "inline" }}>
                <Icon type="user" />
              </div>
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
