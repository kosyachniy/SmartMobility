import React from "react";
import { Row } from "antd";
import "antd/dist/antd.css";
import "./app.css";
import LeftSide from "./LeftSide";

class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <LeftSide />
        </Row>
      </div>
    );
  }
}

export default App;
