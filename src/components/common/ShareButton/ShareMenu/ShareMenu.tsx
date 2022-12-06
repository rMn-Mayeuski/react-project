import React from 'react';
import {FacebookShareButton, TelegramShareButton, VKShareButton, FacebookIcon, TelegramIcon, VKIcon} from "react-share";

import styles from "./ShareMenu.module.scss";
import {useParams} from "react-router-dom";
const ShareMenu = () => {
    const { id = 1 } = useParams();
    const shareUrl = `http://localhost:3000/home/${id}`;

    return (
        <div className={styles.shareMenu}>
            <FacebookShareButton className={styles.shareMenuBtn} url={shareUrl}>
                <FacebookIcon round size={50}/>
            </FacebookShareButton>
            <TelegramShareButton className={styles.shareMenuBtn} url={shareUrl}>
                <TelegramIcon round size={50}/>
            </TelegramShareButton>
            <VKShareButton className={styles.shareMenuBtn} url={shareUrl}>
                <VKIcon round size={50}/>
            </VKShareButton>
        </div>
    );
};

export default ShareMenu;