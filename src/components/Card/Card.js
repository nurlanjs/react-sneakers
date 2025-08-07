import { useEffect, useState } from 'react';
import styles from './Card.module.scss';

function Card({ name, img, price, onFavorite, onPlus, notOnPlus }) {

    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {

        if (!isAdded) {
            onPlus({ name, img, price });
        } else {
            notOnPlus(name);
        }
        return setIsAdded(!isAdded);
    }

    // useEffect(() => {
    //     console.log("Изменили");
    // }, [isAdded])

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked" width={32} height={32} />
            </div>
            <img src={img} alt="" width={133} height={112} />
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b></div>
                <img className="plus" src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="" onClick={onClickPlus} />
            </div>
        </div>
    )
}

export default Card;