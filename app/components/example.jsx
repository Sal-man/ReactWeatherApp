var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
  return (
    <div>
        <h1 className="text-center page-title">Example</h1>
        <p>Few Example Locations to Tryout !</p>
        <ol>
          <li>
            <Link to='/?location=islamabad'>Islamabad , IS</Link>
          </li>
          <li>
            <Link to='/?location=Wah Cantt'>Wah Cantt , WH</Link>
          </li>
        </ol>
    </div>
  )
}

module.exports = Example;
