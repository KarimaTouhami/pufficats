import React from 'react';

export function Quote() {
  return (
    <section id="home-section" className="active">
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
              <li className="n01"><a href="#i">guide.</a></li>
              <li className="n02"><a href="#ii">roster.</a></li>
              <li className="n03"><a href="#iii">connections.</a></li>
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
                <a className="n02" href="https://www.wattpad.com/user/pufficats">
                  <svg aria-labelledby="icon-title2">
                    <title id="icon-title2">Wattpad</title>
                    <use xlinkHref="#icon-d95047674115cba289c0870d1571ee59"></use>
                  </svg>
                  <span className="label">Wattpad</span>
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
  </section>
  );
}
