import { useState } from "react";
import Header from "./components/Header"
import InputWindow from "./components/InputWindow"
import ResultsTable from "./components/ResultsTable"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue //da bi mogli da string iz inputa pretvorimo u int
        }
    });
  }

  return (
    <>
      <Header />
      <InputWindow onChangeInput={handleChange} userInputObject={userInput} />
      {!inputIsValid && <p>Please enter a duration greater than zero.</p>}
      {inputIsValid && <ResultsTable userInputObject={userInput} />}
    </>
  )
}

export default App
