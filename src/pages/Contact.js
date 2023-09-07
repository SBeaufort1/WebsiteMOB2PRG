import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a0y4azx', 'template_wfmv95h', form.current, 'VhSqDMEV-kU0UtB4l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

return (
  <section >
    <div className= " container">
      <h2 ClassName= "--text-center"> Contact Us</h2>

      <form  ref= {form} onSubmit ={sendEmail} className= "--form-control--card--flex--center--dir-column">
        <input type ="text"
        placeholder = 'Full Name' 
        name= 'user_name' required />

        <input type ="email"
        placeholder = 'Email' 
        name= 'user_email' required />

        <input type ="text"
        placeholder = 'Subject' 
        name= 'subject' required />

        <textarea name ="message"
        placeholder = "Message"
        cols="30" rows="10"></textarea>

        <button type= 'submit'
        className= "--btn--btn-promary">Send Message
        </button>
      </form>
    </div>
  </section>
);
}

export default Contact;