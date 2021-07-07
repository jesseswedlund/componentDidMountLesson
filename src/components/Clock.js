import React from "react";

class Clock extends React.Component {
  constructor(props) {
      super(props);
      this.state = {date: new Date()}

      this.tick = this.tick.bind(this)
  }
  
  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
       date: new Date() 
    })  
  }

  render() {
   console.log("Rendering Clock")   
   return (
     <div>
       <h1>Hello, world!</h1>
       <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
     </div>
     );
   } 
}

export default Clock;
