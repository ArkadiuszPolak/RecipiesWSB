import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
  height: 100%;
  margin: 20px;

  &.MuiPaper-root {
    border-radius: 60px;
  }
`;

const TypographyLabel = styled(Typography)`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
`;

const CardMediaStyled = styled(CardMedia)`
  height: 200px;
`;

const TypographyList = styled(Typography)`
  text-decoration: blink;
`;

export const RecipesList = ({ recipes }) => {
  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={5}
      padding={{ xs: 0, md: 3, lg: 5 }}
    >
      {recipes.map((recipe) => (
        <Grid item xs={12} md={6} lg={4}>
          <StyledCard>
            <CardMediaStyled
              image={recipe.recipe.image}
              title={recipe.recipe.label}
            />
            <CardContent>
              <TypographyLabel gutterBottom component="div">
                {recipe.recipe.label}
              </TypographyLabel>
              <Typography gutterBottom variant="body1" component="div">
                  <p>Dish Type: {recipe.recipe.dishType}</p>
              </Typography>
              <Typography>
              <p><b>List of ingredients:</b></p>
              </Typography>
              {recipe.recipe.ingredientLines.map((ingredientLine) => (
                <TypographyList gutterBottom variant="body1" component="div">
                  {ingredientLine}
                </TypographyList>
              ))}
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};
