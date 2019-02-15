import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  myarray = [1, 4, 5, 7, 12, 19, 45, 101];
  resultarray = [];
  index = 0;
  render() {
    return <div className="App">{this.test(this.myarray).join()}</div>;
  }
  test(myarray) {
    // alert('Ji ko')
    console.log(myarray);
    for (this.index = 0; this.index < myarray.length; ++this.index) {
      //console.log(myarray[this.index]);
      if ((myarray[this.index] * 2 - 5 - myarray[this.index]) % 2 == 0) {
        this.resultarray.push(myarray[this.index]);
      }
    }
    console.log(this.resultarray);
    return this.resultarray;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
