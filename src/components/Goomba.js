var React = require('react');

var Goomba = React.createClass({

    render: function() {


        return (
            <div className={this.props.isShown ? 'activeItem' : 'hiddenItem'}>
                <img className={this.props.isShown ? 'activeItemImage' : 'hiddenItemImage'}
                     src="http://vignette1.wikia.nocookie.net/mario/images/f/f3/Goomba_Art_(Super_Mario_Bros.).png/revision/latest?cb=20121201194934" />
            </div>
      );
    }

});

module.exports = Goomba;