import { Fragment, useState, useEffect } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  function appendDisplay(value: string) {
    setDisplay(display + value);
  }

  function Calculate() {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  }

  function Clear() {
    setDisplay('');
  }

  function Delete() {
    setDisplay(display.slice(0, -1));
  }

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      const key = event.key;

      if (key >= '0' && key <= '9') {
        appendDisplay(key);
      } else if (key === '+') {
        appendDisplay(key);
      } else if (key === '-') {
        appendDisplay(key);
      } else if (key === '*') {
        appendDisplay(key);
      } else if (key === '/') {
        appendDisplay(key);
      } else if (key === 'Enter' || key === '=') {
        Calculate();
      } else if (key === 'Backspace') {
        Delete();
      } else if (key === 'Escape') {
        Clear();
      }
    }

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [display]);

  return (
    <Fragment>
      <div className='calculator'>
        <input type='text' id='display' readOnly value={display} />
        <div className='buttons'>
          <button onClick={() => appendDisplay('1')}>1</button>
          <button onClick={() => appendDisplay('2')}>2</button>
          <button onClick={() => appendDisplay('3')}>3</button>
          <button onClick={() => appendDisplay('*')}>*</button>
          <button onClick={() => appendDisplay('4')}>4</button>
          <button onClick={() => appendDisplay('5')}>5</button>
          <button onClick={() => appendDisplay('6')}>6</button>
          <button onClick={() => appendDisplay('-')}>-</button>
          <button onClick={() => appendDisplay('7')}>7</button>
          <button onClick={() => appendDisplay('8')}>8</button>
          <button onClick={() => appendDisplay('9')}>9</button>
          <button onClick={() => appendDisplay('+')}>+</button>
          <button onClick={() => appendDisplay('0')}>0</button>
          <button onClick={() => appendDisplay('/')}>/</button>
          <button id='clear' onClick={() => Clear()}>
            C
          </button>
          <button id='delete' onClick={() => Delete()}>
            DEL
          </button>
          <button id='calculate' onClick={() => Calculate()}>
            =
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Calculator;
