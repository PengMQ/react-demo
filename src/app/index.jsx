const React = require('react');
const {render} = require('react-dom');

const App = React.createClass({
    render (){
        return (
            <div>
                Hello, world! hehe
            </div>
        );
    }
});

render(<App/>, document.getElementById('app'));
