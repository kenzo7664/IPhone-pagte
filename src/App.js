import React, {useState, useEffect} from 'react'
import PhoneCard from './components/PhoneCard'


function App() {
  const [images,setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term,setTerm] = useState('')

  const fetchData =()=>{
    fetch(`https://eze-mobile-api-staging.herokuapp.com/api/v1/products/price?category=Smartphones&brand=Apple&sort=lowestAsk&hoursInterval=24&limit=20&page=1&slugId=`)
    .then(res => res.json())
    .then(json => {
      console.log(json.data.data);
      const images = json.data.data
      setImages(images)
      setIsLoading(false)
    })
   
    .catch(err => console.log(err))
  
  } 
  useEffect(()=>{
     fetchData()
  },[])
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
       {images.map(image =>(
         <PhoneCard key ={image._id} image={image}/>
       ))}
      </div>
      
      
    </div>

  );
}

export default App;
