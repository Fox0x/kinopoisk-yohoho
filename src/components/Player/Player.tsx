import React, { FC, useEffect } from 'react';

import styles from './Player.module.css';

interface PlayerProps {
    filmId: number;
}

export const Player: FC<PlayerProps> = ({ filmId }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//yohoho.cc/yo.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className={styles.player__wrapper}>
            <div id="yohoho" data-kinopoisk={filmId}></div>
        </div>
    );
};
