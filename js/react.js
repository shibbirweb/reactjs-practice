/* function tick() {
  var element = (
    <div>
      <h1>Hello world</h1>
      <h4>Time is {new Date().toLocaleTimeString()}</h4>
    </div>
  );

  ReactDOM.render(element, document.querySelector("#app"));
}

setInterval(tick, 1000);
 */

function Message(props) {
  return (
    <h2
      className={props.clName}
      style={{
        color: props.color,
        backgroundColor: props.bgcolor,
        padding: "10px",
        textAlign: "center"
      }}
    >
      {props.name}
    </h2>
  );
}

class Welcome extends React.Component {
  render() {
    return (
      <Message
        clName={this.props.clName}
        name={this.props.name}
        color={this.props.fcolor}
        bgcolor={this.props.bgcolor}
      />
    );
  }
}

ReactDOM.render(
  <Welcome
    name="Shibbir Ahmed"
    clName="MyClass"
    fcolor="red"
    bgcolor="green"
  />,
  document.getElementById("app")
);

ReactDOM.render(
  <Welcome name="Rizwan" clName="para" fcolor="red" bgcolor="yellow" />,
  document.getElementById("app3")
);
