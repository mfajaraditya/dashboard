import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="login-form">
        <form>
          <label>Name: </label>
          <input type="text" placeholder="Name" />
          <label>Password: </label>
          <input type="text" placeholder="Password" />
          <button type="submit">Tambah</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
