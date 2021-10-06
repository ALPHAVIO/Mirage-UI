import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React } from 'react';



function Card(props) {
    const { cardTitle, icon } = props.card;

    return (
        <div className="card-wrapper">
            <h1 className="card-head">{cardTitle}</h1>
            <div className="card-icon">
                <FontAwesomeIcon icon={icon} size="3x"></FontAwesomeIcon></div>
            <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan lacinia interdum. Vivamus maximus metus massa, quis pretium nisi maximus et. Nullam dictum id ligula nec feugiat...
            </p>
        </div>
    )
}

export { Card };
