import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  cardMedia: {
    paddingTop: "50%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Album({ cards }) {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="xl">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card.display_name} xs={12} sm={6} md={4}>
            <Link href={card.website_link} target="_blank">
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`/img/${card.image_name}`}
                  title={card.display_name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.display_name}
                  </Typography>
                  <Typography>{card.short_description}</Typography>
                </CardContent>
                <CardActions>
                  <Typography>{card.website_link}</Typography>
                </CardActions>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
