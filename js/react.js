class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      age: props.age,
      message: props.age
    };
  }

  componentDidMount() {
    this.setState(state => {
      if (state.age >= 35) {
        return {
          message: "You are over aged"
        };
      } else {
        return {
          message: "You are under aged"
        };
      }
    });
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

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <p>{this.state.age}</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Welcome name="Rizwan" age="45" />,
  document.getElementById("app")
);
