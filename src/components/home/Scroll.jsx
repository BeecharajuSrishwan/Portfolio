import React from 'react'

const Scroll = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
        <svg fill="var(--title-color)" width="32px" height="32px" viewBox="0 0 35 35" data-name="Layer 2" id="a79254cb-3f14-4275-904f-2c1744762c58" xmlns="http://www.w3.org/2000/svg"><path d="M17.5,34.75A12.9,12.9,0,0,1,4.61,21.86V13.14a12.89,12.89,0,0,1,25.78,0v8.72A12.9,12.9,0,0,1,17.5,34.75Zm0-32A10.4,10.4,0,0,0,7.11,13.14v8.72a10.39,10.39,0,0,0,20.78,0V13.14A10.4,10.4,0,0,0,17.5,2.75Z"/><path d="M17.5,15.844a1.25,1.25,0,0,1-1.25-1.25V8.376a1.25,1.25,0,0,1,2.5,0v6.218A1.25,1.25,0,0,1,17.5,15.844Z"/></svg>
        <span className="home__scroll-name">Scroll Down</span>
        <i class="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
    </div>
  )
}

export default Scroll