import React from 'react'
import './Demo.css'
const Demo = () => {
  return (
    <div>
        <div className="demo" id='demo'>
            <div className="container">
                <div className="col-1">
                    <p>Check out my YT channel</p>
                    <p>Linux Tutorial</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, commodi?</p>
                    <button className="btn">Get free coaching</button>
                </div>
                <div className="col-2">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/otDOHt_Jges" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Demo