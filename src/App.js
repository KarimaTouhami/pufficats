import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div id="container01" className="container columns full screen">
      <div className="wrapper">
        <div className="inner">
          <div>
            <div id="image01" className="image full">
              <span className="frame">
                <img src="https://pufficats.carrd.co/assets/images/image01.jpg?v=06f2ac22" alt="" />
              </span>
            </div>
          </div>
          <div>
            <h2 id="text01">PUFFI<em>CATS.</em></h2>
            <ul id="links03" className="style1 links">
              <li className="n01"><Link to="/guide">guide.</Link></li>
              <li className="n02"><Link to="/roster">roster.</Link></li>
              <li className="n03"><Link to="/connections">connections.</Link></li>
            </ul>
            <ul id="icons01" className="icons">
              <li>
                <a className="n01" href="https://www.instagram.com/puffic4ts/">
                  <svg aria-labelledby="icon-title1">
                    <title id="icon-title1">Instagram</title>
                    <use xlinkHref="#icon-85976685de3e4af37529a1ce5d57d2a7"></use>
                  </svg>
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a className="n03" href="https://www.pinterest.com/Lov3lyEllie/">
                  <svg aria-labelledby="icon-title3">
                    <title id="icon-title3">Pinterest</title>
                    <use xlinkHref="#icon-950f35a71f420383dc2b54f8bf482185"></use>
                  </svg>
                  <span className="label">Pinterest</span>
                </a>
              </li>
              <li>
                <a className="n04" href="https://ko-fi.com/pufficats">
                  <svg aria-labelledby="icon-title4">
                    <title id="icon-title4">Ko-fi</title>
                    <use xlinkHref="#icon-b4ecc41beadbec7df3b3e34a22693f76"></use>
                  </svg>
                  <span className="label">Ko-fi</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Guide() {
  return (
    <section id="i-section">
      <div id="container02" className="container columns">
        <div className="wrapper">
          <div className="inner">
            <span></span>
            <div>
              <h3 id="text06"><em>GUIDE.</em></h3>
              <ul id="links02" className="style2 links">
                <li className="n01"><Link to="/">home.</Link></li>
                <li className="n02"><Link to="/roster">roster.</Link></li>
                <li className="n03"><Link to="/connections">connections.</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="container05" className="container columns full">
        <div className="wrapper">
          <div className="inner">
            <div>
              <ul id="buttons02" className="buttons">
                <li>
                  <a className="button n01">Ellie, 20. She/Her. INTJ-A. CS student. GMT+01.</a>
                </li>
              </ul>
              <p id="text07" className="style1">
                <span className="p">
                  <strong>[&nbsp;002 &nbsp;]</strong>
                  &nbsp;
                  <mark>
                    <span style={{ color: "transparent" }}>l</span>
                    likes<span style={{ color: "transparent" }}>l</span>
                  </mark>
                  <span style={{ color: "#E4F2F6" }}>fish, cats, the ocean, sunset/rise, space, stars, A.I, coding, Genshin,</span>
                  <strong>doing my hobbies</strong>
                  <span style={{ color: "#E4F2F6" }}>positive people :C</span>
                  <span style={{ color: "#E4F2F6" }}>
                    , dark minimalist aesthetic, futurism, <strong>horror movies/series</strong>
                    .
                  </span>
                  <span style={{ color: "#E4F2F6" }}>(To be honest, I find myself easily attracted to religious people //3)</span>
                </span>
                <span className="p">
                  <strong>[&nbsp;002 &nbsp;]:</strong>
                  &nbsp;Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium.
                </span>
              </p>
              <div id="list02" className="list">
                <ul>
                  <li>
                    <p>add bullet points if you like, just to elaborate on your rules or whatever. up to u.</p>
                  </li>
                  <li>
                    <p>idk I'm just putting stuff on here to take up space and show u how things look. I'm just a kiddddd and life is a nightmare.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p id="text08" className="style1">
                <span className="p">
                  <strong>[&nbsp;003 &nbsp;]:</strong>
                  &nbsp;Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium.
                </span>
                <span className="p">
                  <strong>[&nbsp;004 &nbsp;]:</strong>
                  &nbsp;Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium.
                </span>
                <span className="p">
                  <strong>[&nbsp;005 &nbsp;]:</strong>
                  &nbsp;Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium.
                </span>
              </p>
            </div>
            <div>
              <p id="text09" className="style1">
                <span className="p">
                  <strong>[&nbsp;006 &nbsp;]:</strong>
                  &nbsp;Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium.
                </span>
                <span className="p">
                  <strong>[&nbsp;007 &nbsp;]:</strong>
                  &nbsp;Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium.
                </span>
                <span className="p">
                  <strong>[&nbsp;008 &nbsp;]:</strong>
                  &nbsp;Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia?
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Roster() {
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

function Connections() {
  return (
    <section id="iii-section">
      <div id="container06" className="container columns full">
        <div className="wrapper">
          <div className="inner" data-reorder="1,0,2">
            <div>
              <p id="text02" className="style2">MY BOOKS.</p>
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
                {[...Array(3)].map((_, index) => (
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

export default function App() {
  return (
    <Router>
      <div className="App">
        <div id="wrapper">
          <div id="main">
            <div id="class">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/roster" element={<Roster />} />
                <Route path="/connections" element={<Connections />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
