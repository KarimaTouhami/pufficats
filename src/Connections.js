import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export function Connections() {
    return (
      <section id="iii-section">
        <div id="container06" className="container columns full">
          <div className="wrapper">
            <div className="inner" data-reorder="1,0,2">
              <div>
                <p id="text02" className="style2">CHARS.</p>
                <p id="text13" className="style1">
                  <span className="p">
                    <mark>
                      <a href="">
                        FEVER
                      </a>
                      &nbsp;:
                    </mark>
                    &nbsp;<em>Completed</em>,&nbsp;&nbsp;
                    <em>
                      <strong>X characters</strong>
                    </em>
                    .&nbsp;Oneshots 'book.
                  </span>
                  <span className="p">
                    <mark>
                      <a href="#">PASTEL GHOST</a>
                      &nbsp;:
                    </mark>
                    &nbsp;<em>Completed</em>,&nbsp;&nbsp;
                    <em>
                      <strong>X characters</strong>
                    </em>
                    .&nbsp;A short story.
                  </span>
                  <span className="p">
                    <mark>
                      <a href="">
                        UNREAL
                      </a>
                      &nbsp;:
                    </mark>
                    &nbsp;<em>Incompleted</em>,&nbsp;&nbsp;
                    <em>
                      <strong>X characters</strong>
                    </em>
                    .&nbsp;A short story.
                  </span>
                  <span className="p">
                    <mark>
                      <a href="">
                        COLA
                      </a>
                      &nbsp;:
                    </mark>
                    &nbsp;<em>Completed</em>,&nbsp;&nbsp;
                    <em>
                      <strong>X characters</strong>
                    </em>
                    .&nbsp;A novel.
                  </span>
                  <span className="p">
                    <mark>
                      <a href="">
                        4 O'CLOCK
                      </a>
                      &nbsp;:
                    </mark>
                    &nbsp;<em>Incompleted</em>,&nbsp;&nbsp;
                    <em>
                      <strong>X characters</strong>
                    </em>
                    .&nbsp;A novel.
                  </span>
                  <span className="p">
                    <mark>
                      <a href="">
                        THE TEA IS GONE
                      </a>
                      &nbsp;:
                    </mark>
                    &nbsp;<em>Incompleted</em>,&nbsp;&nbsp;
                    <em>
                      <strong>X characters</strong>
                    </em>
                    .&nbsp;A novel.
                  </span>
                  <span className="p">
                    <mark>
                      <a href="">
                        THE BLUESIDE
                      </a>
                      &nbsp;:
                    </mark>
                    &nbsp;<em>Completed</em>,&nbsp;&nbsp;
                    <em>
                      <strong>X characters</strong>
                    </em>
                    .&nbsp;A short story.
                  </span>
                </p>
              </div>
              <div>
                <div id="image02" className="image">
                  <span className="frame deferred">
                    <img
                      src="https://pufficats.carrd.co/assets/images/image02.gif?v=06f2ac22"
                      alt=""
                    />
                  </span>
                </div>
                <ul id="buttons01" className="buttons">
                  <li>
                    <Link to="/guide" className="button n01">
                      return.
                    </Link>
                  </li>
                  <li>
                  <Link to="/" className="button n01">
                      blog.
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p id="text11" className="style2">EXCLUSIVES.</p>
                <p id="text03" className="style1">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="p">
                      <mark>URL :</mark>&nbsp;
                      <em>muse / blog wide</em>,&nbsp;&nbsp;
                      <em>
                        <strong>relationship</strong>
                      </em>
                      .&nbsp;description if you would like.
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }