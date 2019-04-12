import React from "react";
import { Row } from "antd";
import "antd/dist/antd.css";
import "./app.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

class App extends React.Component {
  state = {
    minus: "false",
    plus: "false"
  };
  render() {
    return (
      <div>
        <Row>
          <LeftSide properties={this.state} />
          <RightSide properties={this.state} />
        </Row>
      </div>
    );
  }
}

export default App;
