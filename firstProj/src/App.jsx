import { useState } from 'react'
// import { Header,Footer,MainContent } from './components'
// import Person from './components/Person/Person'
// import Weather from './components/Weather/Weather'
function App() {
  // const [friends, setFriends] = useState(["Akshat","Aman","Anadi"]);
  // const AddFriend = () => {
  //   setFriends([...friends,"Pranshul"])
  // }
  // const RemoveFriend = () => {
  //   setFriends(friends.filter((friend) => friend !== "Pranshul"));
  // }
  // const UpdateFriend = () => {
  //   setFriends(friends.map((friend) => (
  //     friend == "Akshat" ? "Akshat Sharma" : friend
  //   )))
  // }
  // const [movie, setMovie] = useState({
  //   title : "Equalizer 3",
  //   ratings : 7
  // });

  // const handleClick = () => {
  //   setMovie({
  //     ...movie,
  //     ratings : 9
  //   })
  // }

  const [movies, setMovies] = useState([
    {
      title: "Equalizer 3",
      ratings: 7
    },
    {
      title: "Equalizer 2",
      ratings: 8
    },
    {
      title: "Equalizer 1",
      ratings: 9
    }
  ]);
  function handleClick(){
    setMovies(
      movies.map((movie) => (
        movie.ratings == 7 ? {...movie, title : "John Wick" } : movie
      ))
    )
  }
  return (
    <>
      <h1>Movies</h1>
      
      {
        movies.map((movie) => (
          <ul key={Math.random()}>
          <li>{movie.title}</li>
          <li>{movie.ratings}</li>
          </ul>
        ))
      }

      <button onClick = {handleClick}> Change Name </button>



      {/* <h1>Titile : {movie.title}</h1>
      <p> Ratings : {movie.ratings}</p>
      <button onClick={handleClick}>Change Ratings</button> */}
      {/* <button onClick={AddFriend}>Add Friend</button>
      <button onClick={RemoveFriend}>Remove Friend</button>
      <button onClick={UpdateFriend}> Update Friend </button> */}
    </>
  )
}

export default App
