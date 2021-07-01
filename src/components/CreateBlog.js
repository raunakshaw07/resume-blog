import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CreateBlog = ({ addBlog }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog({ title, body, imageData });
    console.log({ title, body, imageData });
  };
  return (
    <div className="create-blog">
      <div className="inner">
        <h1>Create Blog</h1>
        <form onSubmit={handleSubmit}>
          {error ? <p>{error}</p> : null}
          <input
            type="file"
            name="pic"
            id="pic"
            hidden
            onChange={(e) => {
              if (
                e.target.files[0].type === "image/jpeg" ||
                e.target.files[0].type === "image/png" ||
                e.target.files[0].type === "image.jpg"
              ) {
                setImageUrl(URL.createObjectURL(e.target.files[0]));
                setImageData(e.target.files[0]);
                setError(null);
              } else {
                setError(
                  "Invalid file type detected : Only images with extension jpg, jpeg and png are allowed"
                );
                setImageUrl("");
                setImageData(null);
              }
            }}
          />
          <label htmlFor="pic" className="upload">
            Cover Picture
          </label>
          {imageUrl ? (
            <div
              className="image"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          ) : null}
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="body">Body</label>
          <CKEditor
            editor={ClassicEditor}
            config={{
              toolbar: [
                "heading",
                "|",
                "bold",
                "italic",
                "blockQuote",
                "link",
                "numberedList",
                "bulletedList",
                "insertTable",
                "|",
                "undo",
                "redo",
              ],
            }}
            onChange={(e, editor) => setBody(editor.getData())}
          />
          <div className="button">
            <button>Cancel</button>
            <button type="submit">Publish</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
