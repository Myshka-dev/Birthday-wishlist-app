import gifts from "../data/gifts";
import Post from "./Post";

// The Feed component renders a list of Post components, each representing a gift.
export default function Feed() {
  return (
    <div className="feed-container">
      {gifts.map((gift) => (
        <Post key={gift.id} gift={gift} />
      ))}
    </div>
  );
}