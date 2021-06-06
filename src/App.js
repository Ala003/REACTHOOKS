import React, {useState} from 'react';
import Map from './map';
import './App.css';
import MovieList from './Components/MovieList.component';
  import harryPotter from "./Components/hp.jpg";
 import gameofThrones from "./Components/gt.jpg";
import Friends from "./Components/Friends.jpg";
 import BreakingBad from "./Components/breakingbad.jpg";

function App() {
  const [movies, setMovies]=useState(
    [
      {title:"Breaking Bad", description:"Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan. The show aired on AMC from January 20, 2008, to September 29, 2013, consisting of five seasons for a total of 62 episodes..",
     posterUrl:BreakingBad, rate:5},  
     
    {title:"Harry Potter", description:"An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
     posterUrl:harryPotter, rate:5},    
    {title:"Game Of Thrones", description:"Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
     posterUrl:gameofThrones, rate:5},
       
    {title:"Friends", description:"Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
     posterUrl:Friends, rate:4}

    ]
)
  return (
      <div className="App">
    <BrowserRouter>
      <Route path="/" render={() => <Navbar filterRate ={filterRate} setFilterRate={setFilterRate} search={search}/>} />
      <Route  path="/" exact render={() => <MovieList movies ={movies.filter((movie)=>movie.rate >=filterRate && movie.title.toLowerCase().includes(searchValue.toLowerCase().trim()))}
      addNewMovie={addNewMovie} />} />
      <Route exact path="/moviedescription/:id" render= {(props)=> <MovieDescription movies={movies} {...props}/>}   />
      <Route  path="/" component={Footer} />
      { <Route restricted={false} component={Notfound}/> }
      </BrowserRouter>  
      <Map/>

  </div>

  );
}

export default App;
