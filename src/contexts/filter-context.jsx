import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext({});

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState({ book: undefined, grade: undefined });

  return (
    <FilterContext.Provider
      value={{
        filter: filter,
        setFilter: setFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
