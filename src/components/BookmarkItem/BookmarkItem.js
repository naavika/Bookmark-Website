import React from 'react';
import './BookmarkItem.css';
import Button from '../UI/Button';

const BookmarkItem = ({ bookmark, onDelete, onEdit }) => {
  const editHandler = () => {
    const newTitle = prompt('Enter new title:', bookmark.title);
    const newUrl = prompt('Enter new URL:', bookmark.url);
    if (newTitle && newUrl) {
      onEdit({ title: newTitle, url: newUrl });
    }
  };

  return (
    <li className="bookmark-item">
      <div className="bookmark-details">
        <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
          {bookmark.title}
        </a>
        <span>{bookmark.url}</span>
      </div>
      <div className="bookmark-actions">
        <Button onClick={onDelete}>Delete</Button>
        <Button onClick={editHandler}>Edit</Button>
      </div>
    </li>
  );
};

export default BookmarkItem;
