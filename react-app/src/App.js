import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import backgroundImage from './dyp.jpeg';





function App() {
  const containerStyle = {
    backgroundImage: `url(${dyp.jpeg})`, // Set the background image
    backgroundSize: 'cover', // Cover the entire container
    backgroundPosition: 'center', // Center the image
    height: '100vh', // Set the height of the container to viewport height
  };

  return (
    <div className="App" style={containerStyle}>
      <Header />
      <Home />
    </div>
  );
}
