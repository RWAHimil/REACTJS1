/* eslint-disable react/display-name */
import { Component } from "react";

const Books = ({ books, hello }) => {
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => {
          return (
            <>
              <li>
                {book.title} / {book.author}
              </li>
              <li>{hello}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

const Songs = ({ songs }) => {
  return (
    <>
      <div>
        <h1>Songs</h1>
        <ul>
          {songs.map((song) => {
            return (
              <>
                <li>
                  {song.title} / {song.album}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const withHOC = (Component, classes) => (props) =>
  (
    <div className={classes}>
      <Component {...props} />
    </div>
  );

const BookHOC = withHOC(Books, "dark");

const SongHOC = withHOC(Songs, "pink");

export { Books, Songs, BookHOC, SongHOC };
