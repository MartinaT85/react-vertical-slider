import { useState, useEffect } from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import "./style/style.css";
import data from "./data.js";

function App() {
  const [slides] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = slides.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slides]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <div className="App">
      <div className="slider-container">
        {slides.map((slide, slideIndex) => {
          const { id, image, title, paragraph, color } = slide;
          let position = "nextSlide";
          if (slideIndex === index) {
            position = "activeSlide";
          }
          if (
            slideIndex === index - 1 ||
            (index === 0 && slideIndex === slides.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <>
              <article className={`left-side ${position}`} key={id}>
                <div style={{ backgroundColor: color }}>
                  <h1>{title}</h1>
                  <p>{paragraph}</p>
                </div>
              </article>
              <article className={`right-side ${position}`} key={color}>
                <div style={{ backgroundImage: image }}></div>
              </article>
            </>
          );
        })}
        <div className="buttons">
          <button className="up" onClick={() => setIndex(index - 1)}>
            <FaLongArrowAltUp />
          </button>
          <button className="down" onClick={() => setIndex(index + 1)}>
            <FaLongArrowAltDown />
          </button>
        </div>
      </div>

      {/* <div className="slider-container">
        <div className="left-side"> */}
      {/* <div style={{ backgroundColor: "#fd3555" }}>
            <h1>Hello</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={{ backgroundColor: "#fd3555" }}>
            <h1>Hello</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={{ backgroundColor: "#fd3555" }}>
            <h1>Hello</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={{ backgroundColor: "#fd3555" }}>
            <h1>Hello</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="right-side">
          <div
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')`,
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80')`,
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80')`,
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80')`,
            }}
          ></div> */}
      {/* </div>
        <div className="buttons">
          <button className="up">
            <FaLongArrowAltUp />
          </button>
          <button className="down">
            <FaLongArrowAltDown />
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default App;
