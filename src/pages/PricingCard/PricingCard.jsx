import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import Check from "@mui/icons-material/Check";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function PricingCards() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  console.log(user, 'user data');

  const Basic = (name, price) => {
    const email = user?.email;
    const photoURL = user?.photoURL;

    // console.log(email, 'emails ');

    const paymentInfo = { email, name, price, photoURL };
    axiosSecure.post("/carts", paymentInfo)
    .then((res) => {
      console.log(res);
    });
  };

  return (
    <Box
      sx={{
        width: "80vw",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
        gap: 2,
        padding: "100px 0",
        margin: "auto",
      }}
    >
      <Card
        size="lg"
        color="neutral"
        variant="solid"
        invertedColors
        sx={{ bgcolor: "neutral.900" }}
      >
        <Chip size="sm" variant="outlined" color="neutral">
          BASIC
        </Chip>
        <Typography level="h2">Professional</Typography>
        <Divider inset="none" />
        <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Virtual Credit Cards
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Financial Analytics
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Checking Account
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            API Integration
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography level="title-lg" sx={{ mr: "auto" }}>
            50${" "}
            <Typography fontSize="sm" textColor="text.tertiary">
              / month
            </Typography>
          </Typography>
          <Link to={"/payment"}>
            <Button
              onClick={() => Basic("basic", 50)}
              variant="soft"
              color="neutral"
              endDecorator={<KeyboardArrowRight />}
            >
              Start now
            </Button>
          </Link>
        </CardActions>
      </Card>

      <Card size="lg" variant="outlined">
        <Chip size="sm" variant="outlined">
          MOST POPULAR
        </Chip>
        <Typography level="h2">Unlimited</Typography>
        <Divider inset="none" />
        <List
          size="sm"
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            mx: "calc(-1 * var(--ListItem-paddingX))",
          }}
        >
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Virtual Credit Cards
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Financial Analytics
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Checking Account
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            API Integration
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Cancel Anytime
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography level="title-lg" sx={{ mr: "auto" }}>
            80${" "}
            <Typography fontSize="sm" textColor="text.tertiary">
              / month
            </Typography>
          </Typography>
          <Link to={"/payment"}>
            <Button
              onClick={() => Basic("gold", 80)}
              endDecorator={<KeyboardArrowRight />}
            >
              Start now
            </Button>
          </Link>
        </CardActions>
      </Card>

      <Card
        size="lg"
        variant="solid"
        color="neutral"
        invertedColors
        sx={{ bgcolor: "neutral.900" }}
      >
        <Chip size="sm" variant="outlined">
          MOST POPULAR
        </Chip>
        <Typography level="h2">Unlimited</Typography>
        <Divider inset="none" />
        <List
          size="sm"
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            mx: "calc(-1 * var(--ListItem-paddingX))",
          }}
        >
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Virtual Credit Cards
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Financial Analytics
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Checking Account
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            API Integration
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Cancel Anytime
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography level="title-lg" sx={{ mr: "auto" }}>
            249${" "}
            <Typography fontSize="sm" textColor="text.tertiary">
              / yearly
            </Typography>
          </Typography>
          <Link to={"/payment"}>
            <Button
              onClick={() => Basic("diamond", 249)}
              endDecorator={<KeyboardArrowRight />}
            >
              Start now
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}
