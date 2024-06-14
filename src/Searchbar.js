import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import React, { useState, useEffect, useCallback } from "react";

const StyledTextField = styled(TextField)`
  margin: 20px 20px 20px 20px;
  width: 40vw;

  & .MuiOutlinedInput-root fieldset{
    border: 2px solid black;
    }
  
  & .MuiFormLabel-root{
    color: black;
  }

  & label.Mui-focused {
    color: black;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: black;
    }
  }
`;

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("chicken");

  const fetchRecipes = useCallback(async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=2a87ca32&app_key=ea61eef6432637c67b3c7874683e2fa5`
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
      default="chicken"
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
