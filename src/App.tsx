import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './component/calculator';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Calculator />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
