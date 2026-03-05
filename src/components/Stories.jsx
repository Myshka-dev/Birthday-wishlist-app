import CountdownStory from "./Countdownstory";
import gifts from "../data/gifts";

export default function Stories() {
  return (
    <div className="stories-container">
      <CountdownStory />

      {gifts.map((gift) => (
        <div key={gift.id} className="story">
          <div className="story-circle">
            <img src={gift.image} alt={gift.title} />
          </div>
          <p>{gift.title}</p>
        </div>
      ))}
    </div>
  );
}