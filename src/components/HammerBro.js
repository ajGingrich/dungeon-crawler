var React = require('react');

var HammerBro = React.createClass({

    render: function() {


        return (
            <div className={this.props.isShown ? 'activeItem' : 'hiddenItem'}>
                <img className={this.props.isShown ? 'activeItemImage' : 'hiddenItemImage'}
                     src="http://www.mariowiki.com/images/0/03/Hamma_Jamma.PNG" />
            </div>
      );
    }

});

module.exports = HammerBro;