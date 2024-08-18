import React, { useState } from 'react';
import BookmarkForm from './components/BookmarkForm/BookmarkForm';
import BookmarkList from './components/BookmarkList/BookmarkList';
import './App.css';

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmarkHandler = (bookmark) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, bookmark]);
  };

  const deleteBookmarkHandler = (index) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((_, i) => i !== index));
  };

  const editBookmarkHandler = (index, newBookmark) => {
    const updatedBookmarks = [...bookmarks];
    updatedBookmarks[index] = newBookmark;
    setBookmarks(updatedBookmarks);
  };

  return (
    <div className="app">
      <h1 className="title">Bookmark Website</h1>
      <BookmarkForm onAddBookmark={addBookmarkHandler} />
      <BookmarkList
        bookmarks={bookmarks}
        onDelete={deleteBookmarkHandler}
        onEdit={editBookmarkHandler}
      />
    </div>
  );
};

export default App;
