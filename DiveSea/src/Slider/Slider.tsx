import React, { useState } from 'react';
import styles from './Slider.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
    {
        id: 1,
        image: '/icons/Sun-Glass.png',
        title: 'Stylish Glasses',
        description: 'Discover the latest trends in sunglasses fashion.',
    },
    {
        id: 2,
        image: '/icons/Sun-Glass.png',
        title: 'Comfort & Elegance',
        description: 'Our glasses provide comfort and style at the same time.',
    },
    {
        id: 3,
        image: '/icons/Sun-Glass.png',
        title: 'High-Quality Materials',
        description: 'Made from the best materials to ensure durability.',
    },
    {
        id: 3,
        image: '/icons/Sun-Glass.png',
        title: 'High-Quality Materials',
        description: 'Made from the best materials to ensure durability.',
    },
    {
        id: 3,
        image: '/icons/Sun-Glass.png',
        title: 'High-Quality Materials',
        description: 'Made from the best materials to ensure durability.',
    },
        {
        id: 3,
        image: '/icons/Sun-Glass.png',
        title: 'High-Quality Materials',
        description: 'Made from the best materials to ensure durability.',
    },
    
];

const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    // Расчет смещения для выравнивания слайда по центру
    const slideWidth = 201.13; // Ширина одного слайда
    const gap = 150; // Расстояние между слайдами
    const totalWidth = slideWidth + gap; // Общая ширина слайда с учетом отступов
    const centerOffset = (window.innerWidth - 800) / 2; // Центрировать относительно экрана

    // Рассчитываем значение для переменной CSS
    const transformValue = `calc(-${currentIndex} * ${totalWidth}px + ${centerOffset}px)`;

    return (
        <section className={styles.Weekly}>
            <h1>Weekly - Top NFT</h1>
            <div className={styles.slider}>
                <div
                    className={styles.slides}
                    style={{
                        '--transform-value': transformValue, // Передаем значение в переменную CSS
                    } as React.CSSProperties} 
                >
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className={styles.image}
                            />
                            <div className={styles.textBlock}>
                                <h2 className={styles.title}>{slide.title}</h2>
                                <p className={styles.description}>
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className={`${styles.prev} ${currentIndex === 0 ? styles.disabled : ''}`}
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                >
                    <FaChevronLeft />
                </button>
                <button
                    className={`${styles.next} ${currentIndex === slides.length - 1 ? styles.disabled : ''}`}
                    onClick={nextSlide}
                    disabled={currentIndex === slides.length - 1}
                >
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
};

export default Slider;
