

import './Socials.css'
import mail3 from '../../images/mail3.png'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';


const Socials = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ryehyho', 'template_x331hlt', form.current, {
            publicKey: '36ntzC0NSBE3PqgqQ',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };

  return (
  <div id='socials'>
        <h1 className='skill-header'>Contact me</h1>
        <div className="contacts">
            <form action="" className='form' ref={form} onSubmit={sendEmail}>
                <h2 className="contact-header">Send me an email<img src={mail3} className='mail-img'></img></h2>
                <input type="text" placeholder='Full name *' name='user_name' required/>
                <input type="email" placeholder='Email adress *' name='user_email' required />
                <input type="text " placeholder='Subject' name='subject' />
                <textarea name="message" className='textarea' id="" cols="30" rows="5" required></textarea>
                <input type="submit" name="form-btn" id="" />
            </form>
            <div className="socials-about">
                <h1 className="contact-info">Contact information:</h1>
                <p className="info">Viktória Bystrianska</p>
                <p className="info">bystrianska.viktoria@gmail.com</p>
                <p className="info">Bratislava</p>
            </div>
        </div>
  </div>)
}

export default Socials