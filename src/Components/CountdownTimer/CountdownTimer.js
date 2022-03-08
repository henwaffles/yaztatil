import './CountdownTimer.css';
import { useState, useEffect } from 'react';
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs])

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <div className='countdown-timer'>
            <span>{remainingTime.days}</span>
            <span>gün</span>
            <span>{remainingTime.hours}</span>
            <span>saat</span>
            <span>{remainingTime.minutes}</span>
            <span>dakika</span>
            <span>{remainingTime.seconds}</span>
            <span>saniye</span>
        </div>
    );
}

export default CountdownTimer;