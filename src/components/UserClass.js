import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child Component Did Mount");
    // API Call

    const data = await fetch("https://api.github.com/users/mohit3312");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // console.log(json);

    this.timer = setInterval(() => {
      // console.log("NAMASTE REACT OP");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("Component Did Update");

    if (
      this.state.count !== prevState.count ||
      this.state.count2 !== prevState.count2
    ) {
      // console.log("Count is updated.");
    }

    if (this.state.count !== prevState.count) {
      // console.log("Count1 is updated.");
    }

    if (this.state.count2 !== prevState.count2) {
      // console.log("Count2 is updated.");
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("Component Will Unmount");
  }

  render() {
    // console.log(this.props.name + " Child Render");

    const { count, count2 } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="p-[10px] border border-solid border-black">
        <img src={avatar_url} />
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLE DIRECTLY
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>Count2: {count2}</h1>
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLE DIRECTLY
            this.setState({
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count2 Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @mohit3312</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 *
 * --- MOUNTING ---
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy>
 * Component Did Mount
 *      <API Call>
 *      <this.setState> --> State variable is updated
 *
 * --- UPDATE ---
 *
 *     Render (API data)
 *     <HTML (new API data)>
 * Component Did Update
 *
 *
 */
