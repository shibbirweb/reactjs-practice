class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      gender: "Male",
      email: "",
      country: "",
      description: "",
      skills: []
    };

    this.handleForm = this.handleForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleForm(e) {
    e.preventDefault();

    let sentence = `Username: ${this.state.username} Gender: ${this.state.gender}, E-mail: ${this.state.email} from ${this.state.country}, description: ${this.state.description}`;

    alert(sentence);
  }

  handleInput(e) {
    const name = e.target.name;

    // if input type is checkbox
    if (e.target.type === "checkbox") {
      let _skills = this.state.skills;

      if (e.target.checked) {
        // if checkbox is checked
        _skills.push(e.target.value);
      } else {
        let index = _skills.indexOf(e.target.value);
        if (index != -1) {
          _skills.splice(index, 1);
        }
      }

      this.setState({
        skills: _skills
      });
    } else {
      // if input type is not checkbox
      this.setState({
        [name]: e.target.value
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleForm}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleInput}
        />

        <br />

        <input
          type="text"
          name="email"
          placeholder="Email Address"
          value={this.state.email}
          onChange={this.handleInput}
        />

        <br />

        <select
          name="country"
          value={this.state.country}
          onChange={this.handleInput}
        >
          <option value="">Select Country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Pakistan">Pakistan</option>
        </select>

        <br />

        <textarea
          name="description"
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleInput}
        ></textarea>

        <br />

        <input
          id="male"
          type="radio"
          name="gender"
          onChange={this.handleInput}
          value="Male"
        />
        <label htmlFor="male">Male</label>

        <input
          id="female"
          type="radio"
          name="gender"
          onChange={this.handleInput}
          value="Female"
        />
        <label htmlFor="female">Female</label>

        <br />

        <input
          id="programming"
          type="checkbox"
          name="skills"
          value="Programming"
          onChange={this.handleInput}
        />
        <label htmlFor="programming">Programming</label>

        <input
          id="Designing"
          type="checkbox"
          name="skills"
          value="Designing"
          onChange={this.handleInput}
        />
        <label htmlFor="Designing">Designing</label>

        <br />

        <input type="submit" value="Save" />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.querySelector("#app"));
