import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Reviews.css';

// Импорт изображений пользователей
import user1 from '../images2/user1.webp';
import user2 from '../images2/user2.webp';
import user3 from '../images2/user3.webp';
import user4 from '../images2/user4.webp';

function Reviews() {
    const [modalData, setModalData] = useState(null);

    const openModal = (review) => {
        setModalData(review);
    };

    const closeModal = () => {
        setModalData(null);
    };

    // Данные отзывов с импортированными фотографиями
    const reviewsData = [
        {
            id: 1,
            name: 'Иван Иванов',
            photo: user1,
            shortReview: 'Отличный тур! Всё было организовано на высшем уровне...',
            fullReview: 'Отличный тур! Всё было организовано на высшем уровне. Гид был очень внимательным, маршрут идеально спланирован, а впечатления останутся на всю жизнь. Большое спасибо!',
        },
        {
            id: 2,
            name: 'Мария Смирнова',
            photo: user2,
            shortReview: 'Спасибо за незабываемую поездку! Я осталась в восторге...',
            fullReview: 'Спасибо за незабываемую поездку! Я осталась в восторге от качества сервиса, интересных экскурсий и замечательной атмосферы. Обязательно поеду ещё раз!',
        },
        {
            id: 3,
            name: 'Алексей Петров',
            photo: user3,
            shortReview: 'Лучший отпуск в моей жизни. Тур оказался невероятно...',
            fullReview: 'Лучший отпуск в моей жизни. Тур оказался невероятно увлекательным. Отличная организация и внимание к деталям сделали эту поездку просто незабываемой. Спасибо всей команде!',
        },
        {
            id: 4,
            name: 'Екатерина Кузнецова',
            photo: user4,
            shortReview: 'Рекомендую всем! Всё было просто прекрасно: от...',
            fullReview: 'Рекомендую всем! Всё было просто прекрасно: от комфортабельного транспорта до профессионального гида. Прекрасные воспоминания, спасибо за такое приключение!',
        },
    ];

    return (
        <div className="reviews">
            <h2 className="reviews-title">Отзывы наших клиентов</h2>
            <div className="reviews-container">
                {reviewsData.map((review) => (
                    <div className="review-card" key={review.id}>
                        <img src={review.photo} alt={review.name} className="review-photo" />
                        <h3 className="review-name">{review.name}</h3>
                        <p className="review-short">{review.shortReview}</p>
                        <button className="review-button" onClick={() => openModal(review)}>
                            Читать полностью
                        </button>
                    </div>
                ))}
            </div>

            {/* Модальное окно через портал */}
            {modalData &&
                ReactDOM.createPortal(
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close-button" onClick={closeModal}>&times;</span>
                            <img src={modalData.photo} alt={modalData.name} className="modal-photo" />
                            <h3 className="modal-name">{modalData.name}</h3>
                            <p className="modal-review">{modalData.fullReview}</p>
                        </div>
                    </div>,
                    document.body
                )
            }
        </div>
    );
}

export default Reviews;
