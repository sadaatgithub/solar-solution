import useForm from "@/hooks/useForm";
import React from "react";
import Form from "./Form";


const initialFormValue = {
    name: "",
    email: "",
    subject: "",
    contact: "",
    message: "",
  };
  
const GetQuoteForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitted,
    isSubmitting,
  } = useForm(
    initialFormValue
    // onSubmit
  );
  const config = [
    {
      labelText: "Full Name",
      labelId: "name",
      type: "text",
      value: values.name,
      required: true,
    },
    {
      labelText: "Mobile Number",
      labelId: "contact",
      type: "tel",
      value: values.contact,
      required: true,
    },
    {
      labelText: "Email",
      labelId: "email",
      type: "email",
      value: values.email,
      required: true,
    },
    {
      labelText: "Message",
      labelId: "message",
      type: "text",
      value: values.message,
      required: true,
    },
  ];
  return <Form config={config} 
            isSubmitting={isSubmitting} 
            onChange={handleChange}
            onSubmit={handleSubmit}
            btnText="Submit"
            
            />;
};

export default GetQuoteForm;
