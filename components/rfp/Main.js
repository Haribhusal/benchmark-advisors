import React, { Component } from "react";
import ContactInformation from "./ContactInformation";
import RequestDetails from "./RequestDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";
import TermsCheck from "./TermsCheck";
import { useForm } from "react-hook-form";

export default class Main extends Component {
  state = {
    step: 1,
    name: "",
    email: "",
    phone: "",
    sub_service_id: "",
    company_name: "",
    role: "",
    company_category_id: "",
    state_id: "",
    district_id: "",
    municipality_id: "",
    description: "",
    is_client: "",
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      fname,
      lname,
      email,
      phone,
      sub_service_id = this.props.slug,
      company_name,
      role,
      company_category_id,
      state_id,
      district_id,
      municipality_id,
      description,
      is_client = 1,
      files,
    } = this.state;

    const values = {
      fname,
      lname,
      email,
      phone,
      sub_service_id,
      company_name,
      role,
      company_category_id,
      state_id,
      district_id,
      municipality_id,
      description,
      is_client,
      files,
    };

    switch (step) {
      case 1:
        return <TermsCheck nextStep={this.nextStep} />;
      case 2:
        return (
          <ContactInformation
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return (
          <RequestDetails
            handleChange={this.handleChange}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 4:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
            slug={this.props.slug}
          />
        );
      case 5:
        return <Success />;
      default:
        return;
    }
  }
}
