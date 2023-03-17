import React, { useEffect, useState } from 'react'
import "./Search.css"

import {from, BehaviorSubject, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, mergeMap} from 'rxjs/operators';

//TO GET DATA FROM POKEMON API
const getPokemon = async name =>{
  const{results: allPokemon} = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200').then(res => res.json());
  return allPokemon.filter(pokemon => pokemon.name.includes(name));
};
//CREATE A BEHAVIOR SUBJECT WITH A INITIAL VALUE OF NULL
let searchSubject = new BehaviorSubject("");

//TO OBSERVE TO searchSubject AND USE PIPE TO PERFORM CERTAIN OPERATORS 
// let searchResultObservable = searchSubject.pipe(
//   filter(val => val.length > 1), // TO ENSURE THAT SEARCH IS MORE THAN 1 BEFORE GETTING SIMILAR RESULTS
//   debounceTime(700),// WAIT 700ms BEFORE PERFORMING SEARCH ON INPUT  
//   distinctUntilChanged(),// COMPARED WITH THE PREVIOUS INPUT TO CHECK IF THERE IS A DIFFERENCE,IF THERE IS NOT THE OLD INPUT REMAINS,IF YES THE NEW INPUT IS PUSHED
//   mergeMap(val => from(getPokemon(val))),// 
//   console.log("searchResultObservable called")
//);

const useObservable = (observable, setter) => {
  useEffect(()=> {
    //TO SUBSCRIBE TO THE OBSERVABLE EMITTED BY THE searchSubject
    let subscription = observable.subscribe(results=>{
      setter(results);
    });
    //return () => subscription.unsubscribe();
  }, [observable, setter]);
};

function Search() {
  // TO HANDLE INPUTS FOR SEARCH AND SEARCH RESULTS
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);


  useObservable(searchSubject,setResults);//TEMPORARYLY USING searchSubject AS USING searchResultObservable GIVE AN ERROR OF "fn is not a function" 

  // TO SET THE SEARCH BAR WITH THE INPUT TEXT 
  const handleSearchChange = e => {
    const newValue = e.target.value;
    setSearch(newValue);
    searchSubject.next(newValue);
  };


  return (
    <div className='search'>
        <input 
          type={'text'}
          placeholder="Search"
          value={search} 
          onChange={handleSearchChange}></input>
          <div>{JSON.stringify(results, null, 2)}</div>
          <p className='description'>Having some issues.Will refresh on Rxjs and try again soon.</p>
    </div>
    
  )
}
//

export default Search