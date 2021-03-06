import React from "react";
import SeachBar from "./SeachBar";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SeachBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
export default App;
