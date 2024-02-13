import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import './Contact.css'
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";


export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_sqjd7km', 'template_ol0v9uj', form.current, {
                publicKey: '3PRBRuTlUhCKUPpgm',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    prompt("Email send successfully")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div class="container">
            <div className='contact-container'>
                <div className='mail-container'>
                    <header>
                        <h1>Send Us Message</h1>
                    </header>
                    <form ref={form} onSubmit={sendEmail} class='contact-form'>
                        <label for="from_name">Name</label>
                        <input type="text" name="from_name" id="from_name" />
                        <label for="from_email">Email</label>
                        <input type="email" name="from_email" id="from_email" />
                        <label for="message">Message</label>
                        <textarea name="message" id="message"></textarea>
                        <input type="submit" value="Send" />
                    </form>
                </div>
                <div className='contact-us-container'>
                    <header>
                        <h1>Contact Us</h1>
                    </header>
                    <div className='contact-info'>
                        <div>
                            <CiLocationOn />
                            <p>128 west 24th street, suite 712, new York</p>
                        </div>
                        <div>
                            <CiPhone />
                            <p>+938649865685</p>
                            <p>+8463289475</p>
                        </div>
                        <div>
                            <CiMail />
                            <p>test@gmail.com </p>
                            <p>test12@gmail.com</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};
