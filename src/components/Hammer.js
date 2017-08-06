var React = require('react');

var Hammer = React.createClass({

    render: function() {


        return (
            <div className={this.props.isShown ? 'activeItem' : 'hiddenItem'}>
                <img className={this.props.isShown ? 'activeItemImage' : 'hiddenItemImage'}
                     src="http://www.mariowiki.com/images/3/38/Hammawhack_2005.png" />
            </div>
      );
    }

});

module.exports = Hammer;