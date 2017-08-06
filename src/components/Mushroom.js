var React = require('react');

var Mushroom = React.createClass({

    render: function() {


        return (
            <div className={this.props.isShown ? 'activeItem' : 'hiddenItem'}>
                <img className={this.props.isShown ? 'activeItemImage' : 'hiddenItemImage'}
                     src="https://s-media-cache-ak0.pinimg.com/564x/0c/85/94/0c8594f565ab93de07dc647481099c6c.jpg" />
            </div>
      );
    }

});

module.exports = Mushroom;