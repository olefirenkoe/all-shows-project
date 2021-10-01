import React, {useContext, useEffect, useState} from 'react';
import {fetchOneShow} from "../../http/showAPI";
import {useParams} from "react-router-dom";
import './ShowPage.css';
import inActiveLike from '../../assets/heart-inactive.svg';
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

const ShowPage = () => {
    const {id} = useParams();
    const [show, setShow] = useState(null);
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetchOneShow(id).then(
            data => {
                setShow(data);
            }
        );
    }, []);


    return (
        <div className="show-container">
            <div className="show-container__wrapper wrapper">
                <div className="show-container__box show-container__box--poster">
                    <img className="show-container__poster" src={show && show.image.original} alt="poster"/>
                </div>
                <div className="show-container__box show-container__box--content content">
                    <div className="content__box content__box--title">
                        <h1 className="content__title">{show && show.name}</h1>
                    </div>
                    <div className="content__box content__box--info">
                        <p className="content__info">
                            <span>{show && show.premiered}, </span>
                            <span>{show && show.network.country.name},</span>
                            {show && show.genres.map((genre) => <span key={genre}>{genre} </span>)}
                        </p>
                    </div>
                    <div className="content__box content__box--desc"
                         dangerouslySetInnerHTML={show && {__html: show.summary}}>
                    </div>
                    <div className="content__box content__box--rating">
                        <p className="content__rating">{show &&  show.rating.average}</p>
                        <p className="content__rating content__rating--title">Rating TVmaze</p>
                    </div>
                    <div className="content__box content__box--actions">
                        {user &&
                        <div className="content__actions">
                            <img
                                onClick={() => console.log(show.id, user.uid)}
                                className="content__like"
                                src={inActiveLike}
                                alt="like-label"/>
                            <p className="content__like-desc">add to favorite</p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowPage;