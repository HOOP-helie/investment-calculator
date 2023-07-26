import React, { useState } from 'react'

import Results from './components/Results';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [yearlyData, setYearlyData] = useState(null)
  return (
    <div>
      <Header />
      <Form setYearlyData={setYearlyData} />
      {yearlyData.length > 0 ? <Results yearlyData={yearlyData} /> : <p style={{ textAlign: 'center' }}>No investment calculated yet</p>}
    </div>
  );
}

export default App;
