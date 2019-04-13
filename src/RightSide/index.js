import React from "react";
import { Col } from "antd";

import "../LeftSide/style.css";


export default class RightSide extends React.Component {
  render() {
    return (
      <div>
        <Col span={18} style={{ height: "100%" }}>
          <div className="interactiveMap" style={{ textAlign: "center" }}>
            {this.props.show}
          </div>
        </Col>
      </div>
    );
  }
}
