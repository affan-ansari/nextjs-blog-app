import { useCallback, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

import Seperator from '@/public/images/Seperator.svg';

import styles from './styles.module.scss';
const BlogSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const renderCarouselItem = useCallback(
    () =>
      Array.from(Array(3).keys()).map((item, index) => (
        <Carousel.Item key={index}>
          <Image
            src="/images/bg-image-1.png"
            width={1440}
            height={600}
            layout="responsive"
            alt="Background Image"
          />
          <Carousel.Caption className={styles.sliderCaption}>
            <div className={styles.category}>
              <p className={styles.categoryLabel}>ADVENTURE</p>
            </div>
            <div className={styles.heading}>
              <p className={styles.headingText}>
                Richird Norton photorealistic rendering as real photos
              </p>
            </div>
            <div className={styles.subheadingContainer}>
              <div className={styles.dateContainer}>
                <p className={styles.date}>08.08.2021</p>
                <div className={styles.seperater}>
                  <Seperator />
                </div>
              </div>
              <p className={styles.subheading}>
                Progressively incentivize cooperative systems through
                technically sound functionalities. The credibly productivate
                seamless data.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      )),
    []
  );

  return (
    <Carousel
      className={styles.myCarousel}
      activeIndex={index}
      onSelect={handleSelect}
      controls={false}
      interval={null}
    >
      {renderCarouselItem()}
    </Carousel>
  );
};

export default BlogSlider;
