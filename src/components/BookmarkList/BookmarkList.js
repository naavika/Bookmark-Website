import React from 'react';
import './BookmarkList.css';
import BookmarkItem from '../BookmarkItem/BookmarkItem';

const BookmarkList = ({ bookmarks, onDelete, onEdit }) => {
  return (
    <div>
      <h2>All Bookmarks</h2>
      <ul className="bookmark-list">
        {bookmarks.map((bookmark, index) => (
          <BookmarkItem
            key={index}
            bookmark={bookmark}
            onDelete={() => onDelete(index)}
            onEdit={(newBookmark) => onEdit(index, newBookmark)}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookmarkList;

