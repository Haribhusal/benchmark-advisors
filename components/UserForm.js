import React, { Component } from "react";
import ConfirmStartupRegistration from "./ConfirmStartupRegistration";
import FormDocument from "./FormDocument";
import FormStartup from "./FormStartup";
import FormUserDetails from "./FormUserDetails";

export class UserForm extends Component {
  state = {
    step: 1,
    startupName: "",
    startupCategory: "",
    startupSubcategory: "",
    provience: "",
    district: "",
    municipality: "",
    location: "",
    contactNumber: "",
    startupEmail: "",
    personFirstName: "",
    personLastName: "",
    personContact: "",
    personEmail: "",
    personAddress: "",
    doc1: "",
    doc2: "",
    doc3: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      startupName,
      startupCategory,
      startupSubcategory,
      provience,
      district,
      municipality,
      location,
      contactNumber,
      startupEmail,
      personFirstName,
      personLastName,
      personContact,
      personEmail,
      personAddress,
      doc1,
      doc2,
      doc3,
    } = this.state;

    const values = {
      startupName,
      startupCategory,
      startupSubcategory,
      provience,
      district,
      municipality,
      location,
      contactNumber,
      startupEmail,
      personFirstName,
      personLastName,
      personContact,
      personEmail,
      personAddress,
      doc1,
      doc2,
      doc3,
    };
    switch (step) {
      case 1:
        return (
         
            <FormStartup
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
        );
      case 2:
        return (
         
            <FormUserDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
        );
      case 3:
        return (
         
            <FormDocument
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
        );
      case 4:
        return (
         
            <ConfirmStartupRegistration
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
        );
      case 5:
        return <h1>Success</h1>;
    }
  }
}

export default UserForm;
