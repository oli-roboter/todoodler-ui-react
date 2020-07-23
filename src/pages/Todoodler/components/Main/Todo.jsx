import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles';
// import CardActions from '@material-ui/core/CardActions';
import Brightness1RoundedIcon from '@material-ui/icons/Brightness1Rounded';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const hoverGrey = grey[100];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
    maxWidth: 200,
    '&:hover': {
      background: hoverGrey,
      cursor: 'pointer',
    },
  },
  title: {
    marginBottom: theme.spacing(0.5),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  dot: {
    margin: theme.spacing(0),
    padding: theme.spacing(0.5),
  },
  flex:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}));

export default function SimpleCard({
  author,
  assignedTo,
  dueDate,
  importance,
  text,
  detail,
  colour,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  // const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          {text}
        </Typography>
        <Typography variant="body2" component="p">
          {detail}
        </Typography>
      </CardContent>
      <div className={classes.flex}>
        <Brightness1RoundedIcon className={classes.dot} size="small" style={{ color: colour }} />
        <Typography className={classes.username} variant="body2">
          {assignedTo}
        </Typography>
      </div>
    </Card>
  );
}
