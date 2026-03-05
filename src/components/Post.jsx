import { useState } from "react";

export default function Post({ gift }) {
  const [likes, setLikes] = useState(gift.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

    const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  return (
    <div className="post">

      {/* POST HEADER */}
      <div className="post-header">
        <img src={gift.image} className="profile-pic" />
        <span className="username">simiswishlist</span>
        <span className="dots">•••</span>
      </div>

      <img src={gift.image} alt={gift.title} className="post-image" />

       {/* ACTIONS */}
      <div className="post-actions">

        <div className="left-icons">

          <div className="icon-group" onClick={handleLike}>
            <span className="icon">
              {isLiked ? "❤️" : "🤍"}
            </span>
            <span className="count">{formatNumber(likes)}</span>
          </div>

          <div className="icon-group">
            <span className="icon">💬</span>
            <span className="count">{formatNumber(gift.comments)}</span>
          </div>

          <div className="icon-group">
            <span className="icon">✈️</span>
            <span className="count">{formatNumber(gift.shares)}</span>
          </div>

        </div>

        <span className="icon" onClick={() => setIsFavorite(!isFavorite)}>
          {isFavorite ? "🔖" : "📑"}
        </span>
      </div>

      {/* LIKED BY */}
      <p className="liked-by">
        Liked by <strong>mangabookshop</strong> and others
      </p>

      {/* CAPTION */}
      <p className="caption">
        <strong>@mishi</strong> {gift.description}
      </p>

      {/* COMMENTS */}
      <p className="comments">
        View all {gift.comments} comments
      </p>

      {/* TIME */}
      <p className="time">2 hours ago</p>

      <p className="price">{gift.price}</p>
    </div>
  );
}