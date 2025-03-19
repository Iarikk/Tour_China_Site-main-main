import React from 'react';
import './ContactSection.css';

function ContactSection() {
    return (
        <div className="contact-section">
            <div className="contact-container">
                {/* Карта */}
                <div className="contact-map">
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.953735315904!3d-37.81627974202192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727abbedb3271e!2sMelbourne%20CBD%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1696305047295!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Контактная информация */}
                <div className="contact-info">
                    <h2>Свяжитесь с нами</h2>
                    <p><strong>Электронная почта:</strong> example@email.com</p>
                    <p><strong>Телефон:</strong> +7 (123) 456-78-90</p>
                    <p><strong>Социальные сети:</strong></p>
                    <ul>
                        <li><a href="https://vk.com" target="_blank" rel="noopener noreferrer">ВКонтакте</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
