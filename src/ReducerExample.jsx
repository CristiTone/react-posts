import { useReducer, useState } from 'react';

import './App.css';

function counterReducer(counter, action) {
  switch (action.type) {
    case 'increment':
      return counter + action.payload;
    case 'decrement':
      return counter - action.payload;
    default:
      return counter;
  }
}

function ReducerExample() {
  const [counter, setCounter] = useState(0);
  const [reduceCounter, dispatch] = useReducer(counterReducer, 0);
  // useReducer e asemanator cu useState in sensul ca prima variabila este state-ul
  // iar a doua este functia care modifica stateul

  // diferenta este ca la useReducer, primul parametru cu care il apelam trebuie
  // sa fie o functie de reduce (vezi linia 5), iar al doilea este state-ul initial

  // cand apelam dispatch (linia 36) trebuie trimis un obiect care sa contina type (tipul actiunii)
  // si payload care este valoarea cu care se modifica state-ul

  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Clicked setState {counter} times
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'increment',
            payload: 10,
          })
        }
      >
        Clicked dispatch ++ {reduceCounter} times
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'decrement',
            payload: 5,
          })
        }
      >
        Clicked dispatch -- {reduceCounter} times
      </button>
    </>
  );
}

export default ReducerExample;
