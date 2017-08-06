var React = require('react');

var Fireball = React.createClass({

    render: function() {


        return (
            <div className={this.props.isShown ? 'activeItem' : 'hiddenItem'}>
                <img className={this.props.isShown ? 'activeItemImage' : 'hiddenItemImage'}
                     src="https://s-media-cache-ak0.pinimg.com/236x/c8/05/0d/c8050df55a779f26e58aaa3470fd2011.jpg" />
            </div>
      );
    }

});

module.exports = Fireball;