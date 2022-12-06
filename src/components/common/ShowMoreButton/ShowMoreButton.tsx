import React, {FC} from 'react';
import styles from "./ShowMoreButton.module.scss";
import Spinner from "./Spinner/Spinner";

interface ShowMoreButtonProps {
    onClick: () => void
    isLoading?: boolean
}

const ShowMoreButton: FC<ShowMoreButtonProps> = ({onClick, isLoading = false}) => {

    return (
        <button className={styles.showMoreBtn} onClick={onClick} disabled={isLoading}>
            Показать еще {isLoading ? <Spinner/> : null}
        </button>
    );
};

export default ShowMoreButton;