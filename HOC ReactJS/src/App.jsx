import "./App.css";
import { BookHOC, Books, SongHOC, Songs } from "./HOC";

const DB = {
  books: [
    { title: "Harry Potter", author: "Rowling" },
    { title: "Outlier", author: "Gladwell" }
  ],
  songs: [
    { title: "Du Hast", album: "Sehnsucht" },
    {
      title: "Desert Rose",
      album: "Brand New Day"
    }
  ]
};

const Name = "Hello";

function App() {
  return (
    <>
      <Books books={DB.books} hello={Name} />
      <Songs songs={DB.songs} />
      <BookHOC books={DB.books} hello={Name} />
      <SongHOC songs={DB.songs} />
    </>
  );
}

export default App;
