import React, {createContext, useState, useContext} from 'react';

const BookmarkContext = createContext();

export const useBookmarks = () => useContext(BookmarkContext);

export const BookmarkProvider = ({children}) => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  const toggleBookmark = article => {
    setBookmarkedArticles(prev => {
      if (prev.some(a => a.url === article.url)) {
        return prev.filter(a => a.url !== article.url);
      } else {
        return [...prev, article];
      }
    });
  };

  return (
    <BookmarkContext.Provider value={{bookmarkedArticles, toggleBookmark}}>
      {children}
    </BookmarkContext.Provider>
  );
};
