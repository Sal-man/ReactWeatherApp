var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is Simple React Weather Application just to get things started with React, react router and webpack.</p>
      <p>Some tools are given below that have been used in this app</p>
      <ul>
        <li><a href="https://facebook.github.io/react">React </a>- This was the JS Framwrok</li>
        <li><a href="https://openweathermap.org">Open Weather Map</a>- Weather API used in this App </li>

      </ul>


    </div>
  )
}


module.exports = About;
