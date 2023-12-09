import { Link } from "react-router-dom";

import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";
import { Box, Container, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const Order = () => {
  const [searchValue, setSearchValue] = useState("");
  const [allSurvey, setAllSurvey] = useState([]);

  useEffect(() => {
    fetch(`https://survey-app-backend-nine.vercel.app/allsurvey?search=${searchValue}`)
      .then((res) => res.json())
      .then((data) => setAllSurvey(data));
  }, [searchValue]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearchValue(searchText);
    console.log(searchValue);
  };

  return (
    <div className="pt-28 pb-10">
      <Box
        sx={{
          marginBottom: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
        }}
        component="form"
        onSubmit={handleSearch}
      >
        <TextField size="small" type="text" name="search" />
        <Button type="submit"> Search</Button>
      </Box>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {allSurvey.map((allSurvey) => (
            <Grid item xs={12} sm={4} md={4} key={allSurvey?._id}>
              <Card
                variant="solid"
                color="primary"
                invertedColors
                sx={{
                  boxShadow: "lg",
                  // width: 400,
                  maxWidth: "100%",
                  // to make the demo resizeable
                  overflow: "auto",
                  resize: "horizontal",
                }}
              >
                <CardContent>
                  <Typography level="title-lg">
                    Name: {allSurvey?.title}
                  </Typography>
                  <Typography level="body-md">
                    {allSurvey?.description}
                  </Typography>
                  <Typography level="title-lg">
                    category: {allSurvey?.category}
                  </Typography>

                  <Typography level="title-sm">
                    Like: {allSurvey?.like}
                    Dislike: {allSurvey?.dislike}
                  </Typography>
                  <Typography level="title-sm">Timestamp: </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/details/${allSurvey?._id}`}>
                    <Button className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                      Details
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Order;
