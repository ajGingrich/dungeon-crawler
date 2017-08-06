var React = require('react');

var MapCenter = React.createClass({

    render: function() {

        return (
            <div className={this.props.isShown ? 'activeCenter' : 'hiddenCenter'}>
            </div>
      );
    }

});

module.exports = MapCenter;