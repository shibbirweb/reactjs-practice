class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      age: props.age,
      message: props.age
    };

    this.alertMessage = this.alertMessage.bind(this);
  }

  componentDidMount() {
    this.checkAge(this.state.age);
    /* if (this.state.age >= 35) {
      this.setState({
        message: "You are over aged"
      });
    } else {
      this.setState({
        message: "You are under aged"
      });
    } */
  }

  componentWillUnmount() {}

  alertMessage(event) {
    console.log(event.target.getAttribute("msg"));
  }
  alertWithParameter(msg) {
    alert(msg);
  }

  checkAge(age) {
    if (age >= 35) {
      this.setState({
        message: "You are over aged"
      });
    } else {
      this.setState({
        message: "You are under aged"
      });
    }
  }
  upEvent(e) {
    const stateAge = Number.parseFloat(this.state.age) + 1;

    this.setState({
      age: stateAge
    });

    this.checkAge(stateAge);
  }
  downEvent(e) {
    const stateAge = Number.parseFloat(this.state.age) - 1;

    this.setState({
      age: stateAge
    });

    this.checkAge(stateAge);
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <p>{this.state.age}</p>
        <p>{this.state.message}</p>

        <button
          onDoubleClick={this.alertWithParameter.bind(this, this.props.msg)}
        >
          Double Click me
        </button>
        <button msg="Hello" onClick={this.alertMessage.bind(this)}>
          Click me
        </button>

        <button onClick={this.upEvent.bind(this)}>Up</button>
        <button onClick={this.downEvent.bind(this)}>Down</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Welcome name="Rizwan" age="45" msg="Hello world..." />,
  document.getElementById("app")
);
