var React = require('react');

var Bowser = React.createClass({

    render: function() {


        return (
            <div className={this.props.isShown ? 'activeItem' : 'hiddenItem'}>
                <img className={this.props.isShown ? 'activeItemImage' : 'hiddenItemImage'}
                     src="http://vignette2.wikia.nocookie.net/papermario/images/7/71/Bowser.png/revision/latest?cb=20151103052158" />
            </div>
      );
    }

});

module.exports = Bowser;