import React from 'react';
import './Home.css';
import {fetchShows} from "../../http/showAPI";
import {randomInteger} from "../../shared/randomNumber";
import TopShow from "./TopShow/TopShow";

const Home = () => {

    // fetchShows().then(data => console.log(data));
    console.log(randomInteger(0, 1000));
    return (
        <div>
            <TopShow/>
            <div className="row">
                <h2>NETFLIX ORIGINALS</h2>
                <div className="row__posters">
                    <img className="row__poster row__posterLarge" src="https://www.ixbt.com/img/n1/news/2021/4/4/google-auge-getty-960_large.png" alt=""/>

                    <img className="row__poster row__posterLarge" src="https://www.ixbt.com/img/n1/news/2021/4/4/google-auge-getty-960_large.png" alt=""/>

                    <img className="row__poster row__posterLarge" src="https://www.ixbt.com/img/n1/news/2021/4/4/google-auge-getty-960_large.png" alt=""/>

                    <img className="row__poster row__posterLarge" src="https://www.ixbt.com/img/n1/news/2021/4/4/google-auge-getty-960_large.png" alt=""/>

                    <img className="row__poster row__posterLarge" src="https://www.ixbt.com/img/n1/news/2021/4/4/google-auge-getty-960_large.png" alt=""/>

                    <img className="row__poster row__posterLarge" src="https://www.ixbt.com/img/n1/news/2021/4/4/google-auge-getty-960_large.png" alt=""/>

                    <img className="row__poster row__posterLarge" src="https://www.ixbt.com/img/n1/news/2021/4/4/google-auge-getty-960_large.png" alt=""/>

                    <img className="row__poster row__posterLarge" src="https://www.ixbt.com/img/n1/news/2021/4/4/google-auge-getty-960_large.png" alt=""/>
                </div>
            </div>
            <div className="row">
                <h2>NETFLIX ORIGINALS</h2>
                <div className="row__posters">
                    <img className="row__poster row__posterLarge" src="https://www.ixbt.com/img/n1/news/2021/4/4/google-auge-getty-960_large.png" alt=""/>

                    <img className="row__poster row__posterLarge" src="https://www.ixbt.com/img/n1/news/2021/4/4/google-auge-getty-960_large.png" alt=""/>

                    <img className="row__poster row__posterLarge" src="https://www.ixbt.com/img/n1/news/2021/4/4/google-auge-getty-960_large.png" alt=""/>

                    <img className="row__poster row__posterLarge" src="https://www.ixbt.com/img/n1/news/2021/4/4/google-auge-getty-960_large.png" alt=""/>

                    <img className="row__poster row__posterLarge" src="https://www.ixbt.com/img/n1/news/2021/4/4/google-auge-getty-960_large.png" alt=""/>

                    <img className="row__poster row__posterLarge" src="https://www.ixbt.com/img/n1/news/2021/4/4/google-auge-getty-960_large.png" alt=""/>

                    <img className="row__poster row__posterLarge" src="https://www.ixbt.com/img/n1/news/2021/4/4/google-auge-getty-960_large.png" alt=""/>

                    <img className="row__poster row__posterLarge" src="https://www.ixbt.com/img/n1/news/2021/4/4/google-auge-getty-960_large.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Home;