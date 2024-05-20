import { AiOutlineDelete } from "react-icons/ai";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import { PiImageThin } from "react-icons/pi";

const Uploader = ({
  id,
  htmlFor,
  type = "primary",
  parentId,
  onChange,
  imageName,
}) => {
  const captureImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (type === "primary") {
        onChange({
          image: reader.result,
          imageName: file?.name,
        });
      } else {
        if (parentId) {
          onChange(parentId, id, "image", reader.result);
          onChange(parentId, id, "imageName", file?.name);
        } else {
          onChange(id, "image", reader.result);
          onChange(id, "imageName", file?.name);
        }
      }
    };
  };

  // remove image
  const removeImage = () => {
    if (type === "primary") {
      onChange({
        image: "",
        imageName: "",
      });
    } else {
      onChange(id, "image", "");
      onChange(id, "imageName", "");
    }
  };
  return (
    <>
      <input
        type="file"
        name=""
        id={htmlFor}
        className="hidden"
        onChange={captureImage}
      />
      {type === "primary" ? (
        <label
          htmlFor={htmlFor}
          className="cursor-pointer border border-dashed transition-all hover:border-primary p-5 rounded-lg bg-[#FAFAFA] flex justify-center items-center flex-col gap-4"
        >
          <IoCloudUploadOutline className="text-3xl text-primary" />
          <h3 className="text-base text-black/80 font-normal">
            Click or drag file to this area to upload
          </h3>
          <span className="text-center text-sm text-black/45">
            Support for a single upload. Strictly prohibited from uploading
            company data or other banned files.
          </span>
        </label>
      ) : (
        <label
          htmlFor={htmlFor}
          className="flex gap-3 items-center py-2 px-4 rounded-lg border justify-center bg-[#FAFAFA] cursor-pointer transition-all hover:text-primary hover:border-primary"
        >
          <MdOutlineFileUpload />
          <span>Click to Upload</span>
        </label>
      )}

      {imageName && (
        <div className="flex items-center justify-between gap-4 text-green-600 transition-all hover:bg-black/10 text-base">
          <div className="flex items-center gap-4">
            <PiImageThin />
            <span>{imageName}</span>
          </div>
          <button type="button" onClick={removeImage}>
            <AiOutlineDelete />
          </button>
        </div>
      )}
    </>
  );
};

export default Uploader;
