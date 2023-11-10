function App() {
  const now = new Date();
  const a = 10;
  const b = 29;
  return (
    <div>
      <p>Hello World, it is {now.toString() }</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )

}

export default App;