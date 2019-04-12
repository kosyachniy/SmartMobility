import React from "react";
import { Col } from "antd";

export default class RightSide extends React.Component {
  render() {
    return (
      <div>
        <Col span={16} style={{ backgroundColor: "white", height: "100%" }}>
          <div className="interactiveMap">Kek</div>
        </Col>
      </div>
    );
  }
}
