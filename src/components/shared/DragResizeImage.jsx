"use client";
import ResizableAndMovable from "react-resizable-and-movable";

const DragResizeImage = ({ imageUrl }) => {
  return (
    <ResizableAndMovable
      x={0}
      y={0}
      minWidth={50}
      minHeight={50}
      maxWidth={500}
      maxHeight={500}
      render={() => (
        <img
          src={imageUrl}
          alt="Uploaded Image"
          style={{ width: "100%", height: "100%" }}
        />
      )}
    />
  );
};

export default DragResizeImage;
