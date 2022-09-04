const { createApp } = window.PetiteVue;
const FORM_URL = "https://fieldgoal.io/f/tGhtN";

function ContactForm() {
  return {
    formData: {
      name: "",
      email: "",
      message: "",
    },
    formMessage: "",
    formLoading: false,
    buttonText: "Submit",
    submitForm() {
      this.formMessage = "";
      this.formLoading = false;
      this.buttonText = "Submitting...";
      // console.log(JSON.stringify(this.formData));
      fetch(FORM_URL,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(this.formData),
      })
      .then(() => {
        this.formData.name ="";
        this.formData.email="";
        this.formData.message="";
        this.formMessage = "Form succesfully submitted.";
      })
      .catch(()=>{
        this.formMessage = "Something went wrong.";
      })
      .finally(() => {
        this.formLoading = false;
        this.buttonText = "Submit";
      });
    },
  };
}

createApp({
  ContactForm
}).mount();
