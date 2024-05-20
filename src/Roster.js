import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export function Roster() {
    return (
      <section id="ii-section">
        <div id="container04" className="container default full">
          <div className="wrapper">
            <div className="inner">
              <h1 id="text10">ROSTER.</h1>
              <ul id="links01" className="style1 links">
    <li className="n01">
      <Link to="/guide">guide.</Link>
    </li>
    <li className="n03">
      <Link to="/connections">connections.</Link>
    </li>
    <li className="n04">
    <Link to="/">home.</Link>
    </li>
  </ul>
            </div>
          </div>
        </div>
        <div id="container03" className="container columns full">
          <div className="wrapper">
            <div className="inner">
              <div>
                <p id="text12" className="style1">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="p">
                      <mark>NAME :</mark>&nbsp;
                      <em>fandom</em>,&nbsp;&nbsp;
                      <em>
                        <strong>FACE CLAIM : fc</strong>
                      </em>
                      .&nbsp;<em>age.</em>&nbsp;<u>pro/nouns</u>.&nbsp;
                      add a description, as short or long as you would like. what's the deal with dojo cat these days, anyways?
                    </span>
                  ))}
                </p>
              </div>
              <div>
                <p id="text05" className="style1">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="p">
                      <mark>NAME :</mark>&nbsp;
                      <em>fandom</em>,&nbsp;&nbsp;
                      <em>
                        <strong>FACE CLAIM : fc</strong>
                      </em>
                      .&nbsp;<em>age.</em>&nbsp;<u>pro/nouns</u>.&nbsp;
                      add a description, as short or long as you would like. what's the deal with dojo cat these days, anyways?
                    </span>
                  ))}
                </p>
              </div>
              <div>
                <p id="text04" className="style1">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="p">
                      <mark>NAME :</mark>&nbsp;
                      <em>fandom</em>,&nbsp;&nbsp;
                      <em>
                        <strong>FACE CLAIM : fc</strong>
                      </em>
                      .&nbsp;<em>age.</em>&nbsp;<u>pro/nouns</u>.&nbsp;
                      add a description, as short or long as you would like. what's the deal with dojo cat these days, anyways?
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