// DraggableBox.js
import React from "react";
import { useDrag } from "react-dnd";
import "./styles.css";

const DraggableBox = ({ name, info, text }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "BOX",
    item: { name, info, text },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <button
      class="button"
      ref={drag}
      style={{
        backgroundColor: isDragging ? "lightblue" : "white",
        cursor: "move",
      }}
    >
      {name}
    </button>
  );
};

export default DraggableBox;
