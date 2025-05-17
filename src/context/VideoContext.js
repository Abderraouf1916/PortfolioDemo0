import React, { createContext, useState } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
    const [likes, setLikes] = useState(0);

    const addLike = () => setLikes(likes + 1);

    return (
        <VideoContext.Provider value={{ likes, addLike }}>
            {children}
        </VideoContext.Provider>
    );
};
