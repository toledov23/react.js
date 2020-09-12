import React from "react";

class BadgeForm extends React.Component {
  //state = {};
  /* handleChange = (e) => {
    //console.log({
    //De esta forma vamos a obtener el input del form que se va a imprimir en consola.
    // name: e.target.name,
    //value: e.target.value,
    //});

    //a setState le vamos a pasar un objeto con la información que queremos guardar
    this.setState({
      [e.target.name]: e.target.value,
    });
  }; */
  handleClick = (e) => {
    console.log("Button was clicked");
  };
  /* handleSubmit = (e) => {
    //Si nosotros no queremos que se envíe ese formulario tenemos que hacer el prevent.default
    //En este caso el Default es enviar el formulario
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
  }; */
  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
