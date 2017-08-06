var React = require('react');

var GreenShell = React.createClass({

    render: function() {


        return (
            <div className={this.props.isShown ? 'activeItem' : 'hiddenItem'}>
                <img className={this.props.isShown ? 'activeItemImage' : 'hiddenItemImage'}
                     src="https://s-media-cache-ak0.pinimg.com/736x/61/a1/20/61a12080c0fd5123f6cd8976e5213fe6.jpg" />
            </div>
      );
    }

});

module.exports = GreenShell;