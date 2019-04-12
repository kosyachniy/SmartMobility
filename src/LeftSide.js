import React from "react";
import { Col, Button, Icon } from "antd";
import "antd/dist/antd.css";

export default class LeftSide extends React.Component {
  onClick = () => {
    console.log(this.props.properties.minus);
    this.props.properties.minus = !this.props.properties.minus;
    console.log(this.props.properties.minus);
  };

  render() {
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
              onClick={this.onClick}
            />
            <h3>Share a car</h3>
          </div>
          <div
            className="takeButton"
            style={{ textAlign: "center", marginTop: "7%" }}
          >
            <Button shape="circle" icon="plus" size={"large"} />
            <h3>Rent a car</h3>
          </div>
          <div
            className="rideButton"
            style={{ textAlign: "center", marginTop: "7%" }}
          >
            <Button shape="circle" icon="car" size={"large"} />
            <h3>Take a ride</h3>
          </div>
        </Col>
      </div>
    );
  }
}
