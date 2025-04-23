import Button from "./components/Button/Button";
import "./App.css";

function App() {
  const buttons = [
    {
      text: "First button",
      color: "wheat",
      onClick: () => console.log("Customed button 1"),
    },
    {
      text: "Second button",
      color: "red",
      onClick: () => console.log("Customed button 2"),
    },
  ];

  return (
    <>
      {buttons.map((button, index) => (
        <Button
          key={index}
          text={button.text}
          color={button.color}
          onClick={button.onClick}
        />
      ))}
    </>
  );
}

export default App;
