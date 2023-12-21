import React from 'react';
import Header from '../components/Header';
import Grid from '../components/Grid';
import { DummyData } from '../assets/DummyData';
import '../css/root.css';

function Home() {

  return (
    <>
      <Header />
      <div>
        <Grid sets={DummyData} />
      </div>
    </>
  );
}

export default Home;