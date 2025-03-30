import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './MobileFooter.css';

const MobileFooter = () => {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-column">
                    {/* Красная линия перед заголовком */}
                    <div className="footer-line-mobile"></div>
                    <h4>Контактная информация</h4>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> <a>Приморский кр., г. Владивосток, ул. Зои Космодемьянской, д. 13 кв. 4</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhoneAlt} /> <a>+7 902 055-60-01</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} /> <a>2619701mp@mail.ru</a>
                        </li>
                    </ul>
                    {/* Красная линия после текста */}
                    <div className="footer-line-top"></div>
                    <ul>
                    <li>
                        <a>«© 2025 ООО 'Мир путешествий'. Все права защищены.»
                        </a>
                    </li>
                    <li><a>Зарегистрировано в России, ОГРН 1142537000209</a>
                    </li>
                </ul>
                </div>
            </div>

        </div>
    );
};

export default MobileFooter;
