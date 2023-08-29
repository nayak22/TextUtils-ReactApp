import { useState } from "react";

function About(props) {
  //   let divStyle = {
  //     color: "white",
  //     backgroundColor: "black",
  //   };

  // const [myStyle, setMystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#212529" : "white",
  };

  // const [btnText, SetBtnText] = useState("Enable Dark mode");

  // const toogleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMystyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     SetBtnText("Enable Light Mode");
  //   } else {
  //     setMystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     SetBtnText("Enable Dark Mode");
  //   }
  // };
  return (
    <>
      <div className="wrapper " style={myStyle}>
        <div className="container pb-3 pt-1">
          <h1 className="className my-3">About Us</h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                  fdprocessedid="8x4a4o"
                  style={myStyle}
                >
                  <strong>Analyze yout text</strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={myStyle}>
                  TextUtils gives you a way to analyze you text quickly and
                  efficiently. Be it the word count, charcater count and much
                  more.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  fdprocessedid="7f3jfp"
                  style={myStyle}
                >
                  <strong>Free to use</strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={myStyle}>
                  TextUtils is free character counter tool taht provides instant
                  character & word Count statistics for given text. TextUtils
                  reports the number of words and characters. Thus it is
                  suitable for writing text with word/character limit.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  fdprocessedid="w1yxgu"
                  style={myStyle}
                >
                  <strong>Browser Compatible</strong>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={myStyle}>
                  This word counter software works inweb browser such as Chrome,
                  FireFox, internet Explorer,Safari, Opera. It Suits to count
                  characters in facebook, blog, boks,excel document, pdf
                  document, essays etc.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container my-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={toogleStyle}
          >
            {btnText}
          </button> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default About;
