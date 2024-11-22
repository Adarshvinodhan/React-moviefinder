import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieDetail from './components/MovieDetail';


export default function App(){
      const [searchQuery,setSearchQuery] = useState('');
      const [result,setResult] = useState([]);      
      const handleInput = (e)=>setSearchQuery(e.target.value)
      const URL = 'https://api.themoviedb.org/3/search/movie'
      const API = '2b75de1b4f8e44919afcc3329b0a1e7c'
      

      useEffect(()=>{
        axios.get(`${URL}?api_key=${API}&query=${searchQuery}`)
        .then(res=>setResult(res.data.results))
        
      },[searchQuery])

  return(
        <Router>
          <Routes>
            <Route path='/' element={<SearchBar handleInput={handleInput} result={result} searchQuery={searchQuery}/>}/>
            <Route path = '/movie/:id' element = {<MovieDetail/>}/>
          </Routes>
        </Router>
)}
