import React, { createContext, useState } from 'react';

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [likes, setLikes] = useState({});

  const addLike = (projectId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [projectId]: (prevLikes[projectId] || 0) + 1,
    }));
  };

  return (
    <PortfolioContext.Provider value={{ likes, addLike }}>
      {children}
    </PortfolioContext.Provider>
  );
};
