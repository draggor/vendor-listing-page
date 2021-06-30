import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";


const Copyright = ({url, text}) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href={url}>
        {text}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
