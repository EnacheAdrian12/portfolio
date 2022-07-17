import { useRef, useState } from "react";
import "./GuessTheNumber.css";

const GuessNumber = () => {
  const [number, setNumber] = useState(0);
  const input_number = useRef();
  const [win, winPrev] = useState(false);
  const [high_low, High_Low_Prev] = useState(" ");
  const [lose, losePrev] = useState(false);
  const [counter, counterPrev] = useState(20);
  const [wrongNumber, wrongNumberPrev] = useState(false);
  const [appopp, appoppPrev] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [startGuessing, startGuessingPrev] = useState(true);
  const [startopp, startoppPrev] = useState(1);

  const randomNumber = () => {
    return Math.floor(Math.random() * 20 + 1); // Here is generate the random number
  };

  const startHandler = (e) => {
    e.preventDefault();
    startoppPrev(0);
    appoppPrev(1);
    setNumber(randomNumber());
  }; // This is the "StartButton" that pops up when somebody entered in the application the first time.

  const guessHandler = (e) => {
    e.preventDefault();
    wrongNumberPrev(false);
    startGuessingPrev(false);
    if (counter < 2) {
      losePrev(true);
    } else if (
      input_number.current.value < 1 ||
      input_number.current.value > 20
    ) {
      wrongNumberPrev(true);
    } else if (input_number.current.value == number) {
      winPrev(true);
      if (counter > highscore) {
        setHighscore(counter);
      }
    } else if (input_number.current.value > number) {
      High_Low_Prev("high");
      counterPrev(counter - 1);
    } else if (input_number.current.value < number) {
      High_Low_Prev("low");
      counterPrev(counter - 1);
    }
  };

  const againHandler = (e) => {
    input_number.current.value = " ";
    winPrev(false);
    startGuessingPrev(true);
    e.preventDefault();
    losePrev(false);
    setNumber(randomNumber());
    counterPrev(20);
  }; // Here is the "Again button " for reset the whole game except the hightscore

  return (
    <div className="big-div-guessgame">
      <form action="submit" onClick={startHandler}>
        <button type="submit" className="start" style={{ opacity: startopp }}>
          StartButton
        </button>
      </form>
      {/* Here are the button that starts the whole application, I set a dynamic opacity */}
      <div className="line" style={{ opacity: appopp }}></div>
      <div className="caset-guess" style={{ opacity: appopp }}>
        <h1 className="caset-number">{win || lose ? `${number}` : "?"}</h1>
      </div>
      <p className="choose-number" style={{ opacity: appopp }}>
        Choose a number between 1 and 20
      </p>
      <div className="guess-caset" style={{ opacity: appopp }}>
        <div>
          <p className="your-number">Your number?</p>
          <form action="submit" onSubmit={guessHandler}>
            <input type="number" className="input-number" ref={input_number} />
            <br />
            <button type="submit" className="button-number">
              Guess
            </button>
          </form>
          <p className="tries">{counter} Tries</p>
        </div>
        {/* Here are some HTML and CSS for the application to look nice and clean */}
        <div>
          <p className="guess-number">
            {startGuessing === true
              ? "Start guessing..."
              : wrongNumber === true
              ? "Put a number between 1 and 20 😠😠"
              : win === true
              ? "Your won 🏆"
              : high_low === "high"
              ? "Your number is too high 📈"
              : "Your number is too low📉"}
          </p>

          <p className="highscore">Highscore: {highscore}🤗🤗</p>
        </div>
        <form type="submit" onClick={againHandler}>
          <button type="submit" className="again-button">
            Again
          </button>
        </form>
      </div>{" "}
      {/* Here are the again button */}
    </div>
  );
};

export default GuessNumber;
