import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import './Contact.css'

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
            <header>
                <h1>Contact Us</h1>
            </header>
            <ul class="navigation">
                <li>
                    <p> <Link to='/login'>
                        Sign In 
                    </Link>
                    / 
                    <Link to='/signup'>Sign Up</Link>
                    </p>
                </li>
            </ul>
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

    );
};
