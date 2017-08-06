var React = require('react');

var RedShell = React.createClass({

    render: function() {


        return (
            <div className={this.props.isShown ? 'activeItem' : 'hiddenItem'}>
                <img className={this.props.isShown ? 'activeItemImage' : 'hiddenItemImage'}
                     src="http://www.mariowiki.com/images/thumb/9/95/RedShellMK8.png/200px-RedShellMK8.png" />
            </div>
      );
    }

});

module.exports = RedShell;