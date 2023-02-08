import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Write() {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="container my-5">
        <h2 className="display-5 mb-5 ">Type your Ideas</h2>
        <div className="row">
          <div className=" col-12 col-md-9 content ">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Title
                </span>
              </div>
              <input type="text" className="form-control" aria-label="Title" />
            </div>
            <div className="editor my-3">
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
          </div>
          <div className="col-12 col-md-3 py-3 menu border">
            <h5 className="fs-4 text-capitalize">publish</h5>
            <div className="input-group mb-3">
              <div className="custom-file mb-3 ">
                <input type="file" className="custom-file-input" />
              </div>

              <div className="input-group-prepend">
                <h3 className="fs-5">Category</h3>
                <div className="input-group-text d-flex flex-column align-items-start ">
                  <div>
                    <input
                      type="radio"
                      aria-label="Radio"
                      value="art"
                      id="art"
                    />
                    <label htmlFor="art px-5">Art</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      aria-label="Radio"
                      value="science"
                      id="science"
                    />
                    <label htmlFor="art px-5">Science</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      aria-label="Radio"
                      value="tech"
                      id="tech"
                    />
                    <label htmlFor="art px-5">Tech</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      aria-label="Radio"
                      value="cinema"
                      id="cinema"
                    />
                    <label htmlFor="art px-5">Cinema</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      aria-label="Radio"
                      value="design"
                      id="design"
                    />
                    <label htmlFor="art px-5">Design</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      aria-label="Radio"
                      value="food"
                      id="food"
                    />
                    <label htmlFor="art px-5">Food</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
