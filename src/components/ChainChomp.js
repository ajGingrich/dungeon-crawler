var React = require('react');

var ChainChomp = React.createClass({

    render: function() {


        return (
            <div className={this.props.isShown ? 'activeItem' : 'hiddenItem'}>
                <img className={this.props.isShown ? 'activeItemImage' : 'hiddenItemImage'}
                     src="http://vignette1.wikia.nocookie.net/fantendo/images/7/73/Big_Chain_Chomp_Sprite_PM5.png/revision/latest?cb=20130511155804" />
            </div>
      );
    }

});

module.exports = ChainChomp;