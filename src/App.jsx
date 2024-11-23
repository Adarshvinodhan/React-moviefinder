import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieDetail from './components/MovieDetail';
import SavedMovies from './components/SavedMovies';


export default function App(){
      const [searchQuery,setSearchQuery] = useState('');
      const [result,setResult] = useState([]);    
      const [saved,setSaved] = useState([]);

      //search Functionality 
      const handleInput = (e)=>setSearchQuery(e.target.value)
      const URL = 'https://api.themoviedb.org/3/search/movie'
      const API = '2b75de1b4f8e44919afcc3329b0a1e7c'
      

      useEffect(()=>{
        axios.get(`${URL}?api_key=${API}&query=${searchQuery}`)
        .then(res=>setResult(res.data.results))
        
      },[searchQuery])

      const addToSaved = (movie)=>{
        if (!saved.find((mov)=>mov.id === movie.id)){
          setSaved([...saved,movie])
        }
        else{
          alert("movie already in saved")
        }
      }
      
      const isMovieSaved = (movieID)=>saved.some(movie=>movie.id===movieID)
  return(
        <Router>
          <Routes>
            <Route path='/' element={<SearchBar handleInput={handleInput} result={result} searchQuery={searchQuery}/>}/>
            <Route path = '/movie/:id' element = {<MovieDetail addToSaved={addToSaved} isMovieSaved={isMovieSaved}/>}/>
            <Route path = '/saved' element = {<SavedMovies movies={saved}/>}/>
          </Routes>
        </Router>
)}
