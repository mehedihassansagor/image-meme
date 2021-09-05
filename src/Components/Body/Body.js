import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Chart from "../Chart/Chart";
import Footer from "../Footer/Footer";

const Body = () => {
  const [number, setNumber] = useState(0);
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://rocky-chamber-15010.herokuapp.com/image")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, [number]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const imgURL = data.link;
    fetch("https://rocky-chamber-15010.herokuapp.com/image/post", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ imgURL }),
    })
      .then((res) => res.json())
      .then((data) => setNumber(number + 1));
  };
  const deleteImage = (_id) => {
    fetch(`https://rocky-chamber-15010.herokuapp.com/image/delete`, {
      method: "delete",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ _id }),
    })
      .then((res) => res.json())
      .then((data) => setNumber(number + 1));
  };
  const handleImageUpload = (e) => {
    const imageData = new FormData();
    imageData.set("key", "798767f30df3dcdc7763cb42cb4936d6");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        const imgURL = response.data.data.display_url;
        console.log("maw", response.data.data.display_url);

        if (imgURL) {
          fetch("https://rocky-chamber-15010.herokuapp.com/image/post", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ imgURL }),
          })
            .then((res) => res.json())
            .then((data) => setNumber(number + 1));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center mt-3">
          <p className="px-4 py-2 border border-primary">Meme Gallery</p>
        </div>
        <div className="row">
          <form className="col-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-8 input-group ms-5 ms-md-0">
              <input
                className="form-control"
                placeholder="link"
                name="link"
                {...register("link")}
              />
              <button type="submit" class="btn btn-primary">
                Add Meme
              </button>
            </div>
          </form>
          <div className="col-12 col-md-4 mt-md-0 mt-4">
            <label className="btn btn-outline-primary ms-5 w-75" htmlFor="meme">
              upload meme
            </label>
            <input
              className="d-none"
              id="meme"
              type="file"
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <div className="row">
          {images.map((image, index) => (
            <div
              className={`${
                (index + 6) % 6 === 0 ? "col-sm-12 col-md-8" : "col-md-4"
              } mt-5`}
            >
              <div>
                <img
                  className="img-fluid w-100 image-style"
                  src={image.imgURL}
                  alt=""
                />
              </div>
              <div>
                <button
                  onClick={() => deleteImage(image._id)}
                  className="btn btn-danger mt-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Chart />

      <div>
        <Footer />
      </div>
    </>
  );
};
export default Body;
