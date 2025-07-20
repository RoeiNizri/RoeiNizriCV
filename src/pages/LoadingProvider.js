// context/LoadingContext.js
import React, { createContext, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export function LoadingProvider({ children }) {
    const [loading, setLoading] = useState(false);

    // Prevent context value from changing every render
    const value = useMemo(() => ({ loading, setLoading }), [loading]);

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    );
}

LoadingProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
