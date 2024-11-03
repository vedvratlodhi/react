import React,{ Component }  from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue || 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return React.createElement('div', { style: { textAlign: 'center' }, className: 'component' },
      React.createElement('h1', null, `Count: ${this.state.count}`),
      React.createElement(
        'button',
        { onClick: this.decrement },
        '-'
      ),
      React.createElement(
        'button',
        { onClick: this.increment },
        '+'
      )
    );
  }
}

export default Counter;
