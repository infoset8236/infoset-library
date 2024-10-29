import React, { useEffect, useState } from 'react';
import { getCurrentDate, getCurrentTime } from '../../../util/date_time';
import styles from './welcome_message.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';

const HorizontalMode: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [currentDate, setCurrentDate] = useState(getCurrentDate());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
      setCurrentDate(getCurrentDate());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container_x}>
      <div className={styles.time_x}>{currentTime}</div>
      <div className={styles.date_x}>{currentDate}</div>
      <div className={styles.message_x}>인포셋도서관에 오신 것을 환영합니다.</div>
      <div className={styles.caption_x}>Welcome to Infoset Library</div>
    </div>
  );
};

const VerticalMode: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [currentDate, setCurrentDate] = useState(getCurrentDate());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
      setCurrentDate(getCurrentDate());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container_y}>
      <div className={styles.time_y}>{currentTime}</div>
      <div className={styles.date_y}>{currentDate}</div>
      <div className={styles.message_y}>
        인포셋도서관에
        <br />
        오신 것을 환영합니다.
      </div>
      <div className={styles.caption_y}>Welcome to Infoset Library</div>
    </div>
  );
};

const WelcomeMessageB: React.FC = () => {
  const [horizontalMode, setHorizontalMode] = useState(false);
  const [full, setFull] = useState(false);

  const handleClick = () => setHorizontalMode((prev) => !prev);

  return (
    <>
      {horizontalMode ? <HorizontalMode /> : <VerticalMode />}
      <div className={styles.wrapper}>
        <Tilt onClick={handleClick} />
        <Full disabled={!horizontalMode} onClick={() => console.log(123)} />
      </div>
    </>
  );
};

export default WelcomeMessageB;