import React from 'react';
import './styles/index.css'
import Layout from './components/Layout';
import PersonsContainer from './components/PersonsContainer';

function App() {
  return (
      <>
        <Layout>
          <div className='container font-sans'>
            <PersonsContainer />
          </div>
        </Layout>
      </>
  );
}

export default App;
