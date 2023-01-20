import React, { useEffect, useState } from "react"
import './App.css';
import Loading from "./Loading"
import Tours from "./Tours";
import Tour from "./Tour";

const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoading] = useState(true)
  const [tour, setTours] = useState([])


  const fetchtour = async () => {
    setLoading(true);


    try {
      const response = await fetch(url)
      const tour = await response.json()
      setLoading(false)
      setTours(tour)
    } catch (error) {
      // setLoading(false)
      // console.log(error)
    }


    console.log(tour)
  }

  useEffect(() => {
    fetchtour()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />

      </main>
    )
  };

  return (
    <main>
      <Tours tour = {tour}/>
    </main>
  );
}

export default App;
