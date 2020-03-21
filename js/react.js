/* function UserGreeting(props) {
  return <h1>Welcome Back</h1>;
}

function GuestGreeting(props) {
  return <h1>Welcome Guest</h1>;
}

function Greetings(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

ReactDOM.render(
  <Greetings isLoggedIn={true} />,
  document.getElementById("app")
);
 */

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.loginEvent = this.loginEvent.bind(this);
    this.logoutEvent = this.logoutEvent.bind(this);
    this.state = { isLoggedIn: props.isLoggedIn };
  }

  loginEvent(e) {
    this.setState({
      isLoggedIn: true
    });
  }

  logoutEvent(e) {
    this.setState({
      isLoggedIn: false
    });
  }

  render() {
    const button = this.state.isLoggedIn ? (
      <LogoutButton onClick={this.logoutEvent} />
    ) : (
      <LoginButton onClick={this.loginEvent} />
    );

    const message = this.state.isLoggedIn ? (
      <h2>Welcome back</h2>
    ) : (
      <h2>Please Login</h2>
    );

    return (
      <div>
        {message}
        {button}
      </div>
    );
  }
}

ReactDOM.render(<Welcome isLoggedIn={true} />, document.getElementById("app"));
