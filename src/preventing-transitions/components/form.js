import React from 'react';
import { Prompt } from 'react-router-dom';

class Form extends React.Component {
  state = { isBlocking: false };

  render() {
    const { isBlocking } = this.state;
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          event.target.reset();
          this.setState({ isBlocking: false });
        }}
      >
        <Prompt
          when={isBlocking}
          message={location => {
            console.log(location);
            return `Are you sure you want to go to ${location.pathname}`;
          }}
        />
        <p>
          Blocking ?{' '}
          {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
        </p>
        <p>
          <input
            size="50"
            placeholder="type something to block transitions"
            onChange={event => {
              this.setState({ isBlocking: event.target.value.length > 0 });
            }}
          />
        </p>
        <p>
          <button>Submit to stop blocking</button>
        </p>
      </form>
    );
  }
}

export default Form;
