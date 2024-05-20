import { Resizable } from "react-resizable";
import Button from "../ui/Button";

import "react-resizable/css/styles.css";

const EditImage = ({ open, setOpen, brandImage, size, setSize }) => {
  const handleResize = (e, { size }) => {
    setSize(size);
  };
  return (
    <div
      className={`fixed inset-0 w-full h-full bg-black/45 flex items-center justify-center transition-all duration-300 ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="w-[800px] bg-white rounded-xl p-5">
        <h2 className="text-2xl mb-8 text-center">Set Your Brand Image Size</h2>
        <div className="mb-10 flex items-center justify-center">
          <Resizable
            width={size.width}
            height={size.height}
            onResize={handleResize}
            minConstraints={[50, 50]}
            maxConstraints={[500, 500]}
          >
            <div
            // style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <img
                src={brandImage}
                style={{
                  height: `${size?.height}px`,
                  width: `${size?.width}px`,
                }}
                alt="brand image"
              />
            </div>
          </Resizable>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={() => setOpen(false)}
            className="rounded-xl py-3"
            variant="dark"
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditImage;
