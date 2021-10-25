import './App.css';
import { useState , useEffect } from 'react';
import ImageCard from './Components/ImageCard';
import SearchBar from './Components/SearchBar';

const API_KEY = "23963219-4301f43244eb321eb18d74f46";


function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState("")

useEffect(() => {
  fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then(data=>{
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err=>console.log(err))
  },[term]);

  return (
    <div className="container mx-auto">
      <SearchBar searchText = {word=> setTerm(word)}/>
      {!isLoading && images.length === 0 && <h1 className="text-3xl text-blue-600 text-center">No images found</h1>}
    {isLoading ? <h1 className="text-lg text-center">Loading...</h1> : 
      <div className="grid grid-cols-1 gap-1 mx-auto sm:grid-cols-3 sm:gap-2">
        {images.map(item=><ImageCard key={item.id} image={item}/>)}
      </div>
    }
    </div>
  )
}
export default App;
