import React, { useContext } from "react";

function Rating({ rating, onClick, style }) {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <span
              class="material-icons"
              style={{ fontSize: "1.8rem", cursor: "pointer" }}
            >
              star
            </span>
          ) : (
            <span
              class="material-icons"
              style={{ fontSize: "1.8rem", cursor: "pointer" }}
            >
              star_border
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export default Rating;