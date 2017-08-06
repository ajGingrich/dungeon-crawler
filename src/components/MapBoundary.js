var React = require('react');

var MapBoundary = React.createClass({

    render: function() {

        return (
            <div className={this.props.isShown ? 'activeBoundary' : 'hiddenBoundary'}>
            </div>
      );
    }

});

module.exports = MapBoundary;