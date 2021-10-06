import "./App.css";
import {
  faAtom,
  faCalculator,
  faHistory,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import { Card } from "./Card";

const cardTitles = [
  {
    cardTitle: "Science",
    icon: faAtom,
  },
  {
    cardTitle: "Mathematics",
    icon: faCalculator,
  },
  {
    cardTitle: "History",
    icon: faHistory,
  },
  {
    cardTitle: "Geography",
    icon: faGlobe,
  },
];

function AnimatedCards() {
  return (
    <div className="cards-container container">
      {cardTitles.map((card, index) => {
        return (
          <Card
            key={card.cardTitle + "-" + index}
            card={card}
            index={index}
          ></Card>
        );
      })}
    </div>
  );
}

export { AnimatedCards };
