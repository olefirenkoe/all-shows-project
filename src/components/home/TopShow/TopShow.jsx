import React, {useEffect, useState} from 'react';
import {randomInteger} from "../../../shared/randomNumber";
import {fetchOneShow} from "../../../http/showAPI";

const TopShow = () => {

    const [show, setShow] = useState(null);

    useEffect(() => {
        let id = randomInteger(0, 1000);
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
                <p className="banner__description" dangerouslySetInnerHTML={show && {__html: show.summary}}></p>
            </div>
        </header>
    );
};

export default TopShow;