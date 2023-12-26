import React from "react";
import "./card-hero.css";
import Rating from "./rating";

function Card(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <button className="card__button">Click</button>
            <p>Вселенная: {props.universe}</p>
            <p>Альтер эго: {props.alterego}</p>
            <p>Род деятельности: {props.occupation}</p>
            <p>Друзья: {props.friends}</p>
            <p>Суперсилы: {props.superpowers}</p>
            <img className="card__img" src={props.url} alt="" />
            <Rating />
        </div>
    )
}

export default Card;