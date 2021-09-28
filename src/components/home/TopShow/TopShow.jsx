import React, {useEffect, useState} from 'react';
import {randomInteger} from "../../../shared/randomNumber";
import {fetchOneShow} from "../../../http/showAPI";

const TopShow = () => {

    // let show = null;
    let [show, setShow] = useState(null);

    useEffect(() => {
        let id = randomInteger(0,1000);
        fetchOneShow(id).then(
            data => {
                setShow(data);
                console.log(data);
            }
        );
    }, []);


    return (
        <header className="banner"
                style={{
                    backgroundImage: `url(${show && show.image.original})`
                }}>
            <div className="banner__contents">
                <h1 className="banner__title">{show && show.name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description" dangerouslySetInnerHTML={show && {__html:show.summary}}>

                </h1>
            </div>
        </header>
    );
};

export default TopShow;