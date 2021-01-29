import React from 'react';
import { ProductCard } from './components/ProductCard/ProductCard';
import './App.scss'

function App() {
  return (
    <div className="App">
        <ProductCard
          title="Шампунь"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
          imgUrl="./images/image1.png"
          oneItem="200"
          id="1"
        />
        <ProductCard
          title="Шампунь"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
          imgUrl="./images/image2.png"
          oneItem="250"
          id="2"
        />
        <ProductCard
          title="Шампунь"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
          imgUrl="./images/image3.png"
          oneItem="300"
          id="3"
        />
    </div>
  );
}

export default App;
