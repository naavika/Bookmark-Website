import React, { useState } from 'react';
import './BookmarkForm.css';
import Button from '../UI/Button';

const BookmarkForm = ({ onAddBookmark }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    onAddBookmark({ title, url });
    setTitle('');
    setUrl('');
  };

  return (
    <form className="form-container" onSubmit={submitHandler}>
      <label>Website Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Website URL:</label>
      <input 
       type="text" 
       value={url} 
       onChange={(e) => setUrl(e.target.value)} 
       />
       
      <Button>Add</Button>
    </form>
  );
};

export default BookmarkForm;
