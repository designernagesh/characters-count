import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const inputHandler = (e) => {
    setInput(
      e.target.value
    )

    setCount(
      e.target.value.length
    )
  }
  return (
    <>
      <div className="container">
        <h2 className="title">Live Characters Count</h2>
        <p className="sub-title">Type characters in the textarea and check the count! 😊 </p>

        <form>
          <textarea rows="7" placeholder="Type something here..." onInput={inputHandler} />
          <p className="result">Total Characters: {count}</p>

        </form>
      </div>
    </>
  )
}

export default App;
