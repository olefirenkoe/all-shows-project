import React, {useContext, useEffect, useState} from 'react';
import './Home.css';
import {fetchShows} from "../../http/showAPI";
import TopShow from "./TopShow/TopShow";
import {useHistory} from "react-router-dom";
import {SHOW_PAGE_ROUTE} from "../../utils/consts";


const Home = () => {
    const [shows, setShows] = useState(null);
    const history = useHistory();

    useEffect(() => {
        fetchShows().then(
            data => {
                setShows(data);
            }
        );
    }, []);
    return (
        <div>
            <TopShow/>
            <div className="row">
                <h2>NETFLIX ORIGINALS</h2>
                <div className="row__posters">
                    {shows && shows.slice(0, 15).map((show) =>
                        <img className="row__poster row__posterLarge"
                             onClick={() => history.push(SHOW_PAGE_ROUTE + '/' + show.id)}
                             key={show.id}
                             src={show.image.original}
                             alt="show-poster"/>
                    )}
                </div>
            </div>
            <div className="row">
                <h2>Trending Now</h2>
                <div className="row__posters">
                    {shows && shows.slice(16, 31).map((show) =>
                        <img className="row__poster row__posterLarge"
                             onClick={() => history.push(SHOW_PAGE_ROUTE + '/' + show.id)}
                             key={show.id}
                             src={show.image.original}
                             alt="show-poster"/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;