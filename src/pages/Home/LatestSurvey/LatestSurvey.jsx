import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";
import { Container, Grid } from "@mui/material";

const Latest_Serveys = () => {
  const axiosPublic = useAxiosPublic();
  const { data: latestServey = [] } = useQuery({
    queryKey: ["latestServey"],
    queryFn: async () => {
      const res = await axiosPublic.get("/latest");
      return res.data;
    },
  });

  return (
    <>
      <SectionTitle heading={"Latest Survey"}></SectionTitle>
      <Container maxWidth="lg">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {latestServey.map((latesServey) => (
          <Grid item xs={12} sm={4} md={4} key={latesServey?._id}>
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
                  Name: {latesServey?.title}
                </Typography>
                <Typography level="body-md">
                  {latesServey?.description}
                </Typography>
                <Typography level="title-lg">
                  category: {latesServey?.category}
                </Typography>

                <Typography level="title-sm">
                  Like: {latesServey?.like}
                  Dislike: {latesServey?.dislike}
                </Typography>
                <Typography level="title-sm">Timestamp: </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/details/${latesServey?._id}`}>
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
    </>
  );
};

export default Latest_Serveys;
