// import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';

import Row from './Row';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner />
      <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying} isLarge={true}/>
      <Row title="Poular Movies" fetchUrl={requests.fetchPopular}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTranding}/>
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>
      <Row title="Upcoming Movies" fetchUrl={requests.fetchUpComing}/>
      <Row title="Netflix Original" fetchUrl={requests.fetchPopular}/>
      {/* <Row title="Latest Movies" fetchUrl={requests.fetchLatest}/> */}
    </div>
  );
}

export default App;
