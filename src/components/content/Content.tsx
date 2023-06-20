import React from 'react';
import {useNavigate} from 'react-router-dom';
import ColorButtons from '../pages/button';
import CustomizedRating from '../Rating';
import s from './Content.module.css'

type ContentPropsType = {
    id: number
    photo: string
    heading: string
    about: string
    price: string
    rating: number[]
    AddRating: (id: number, currentRating: number) => void
}
export const Content = (props: ContentPropsType) => {
    const navigate = useNavigate()
    const onCLickBackHandler = () => {
        navigate(-1)
    }
    const onCLickHomeHandler = () => {
        navigate('/page/0')
    }

    return (
        <div className={s.container}>
            <div className={s.block__photo}>
                <img src={props.photo}/>
            </div>
            <div className={s.block__about}>
                <div className={s.block__header}>
                    <div className={s.name__price}>
                        <div>{props.heading}</div>
                        <div>{props.price}</div>
                    </div>
                </div>
                <p className={s.about}>{props.about}</p>
                <div className={s.footer}>
                    <div>
                        <ColorButtons nameButton={'Заказать'}/>
                    </div>
                    <div>
                        <CustomizedRating AddRating={props.AddRating}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
