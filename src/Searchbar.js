import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import React, { useState, useEffect, useCallback } from "react";

const StyledTextField = styled(TextField)`
  margin: 20px 20px 20px 20px;
  width: 40vw;
`;

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("chicken");

  const fetchRecipes = useCallback(async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?q=${query}&type=public`
    );
    const data = await response.json();
    setRecipes(data.hits);
  }, [query, setRecipes]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  function handleChange(event) {
    setQuery(event.target.value);
  }

  return (
    <StyledTextField
      label="Szukaj przepisów"
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={fetchRecipes}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
