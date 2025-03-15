import React, { useState } from "react";

export default function useStatestudy() {
  //한 개만 쓰고 싶을 때
  //   const item = useState(1)[0];

  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <>
      <h1>Hello {item}</h1>
      <h2>start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>Incresement</button>
      <button onClick={decrementItem}>Decresement</button>
    </>
  );
}

class AppUbly extends React.Component {
  state = {
    item: 1,
  };

  render() {
    const { item } = this.state;
    return (
      <>
        <h1>Hello {item}</h1>
        <h2>start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem}>Incresement</button>
        <button onClick={this.decrementItem}>Decresement</button>
      </>
    );
  }

  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };

  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
}
