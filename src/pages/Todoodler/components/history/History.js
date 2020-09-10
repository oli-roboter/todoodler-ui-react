/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-await */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
// import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import writeHistory from '../../utils/display-history';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 250,
    overflow: 'scroll',
  },
  fr_aiC_jcSB: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },
  fr_aiC_jcFS: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  fc_aiC: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  values: {
    padding: theme.spacing(0, 1),
  },
  box: {
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(1, 0),
    border: `1px solid ${grey[100]}`,
    background: grey[100],
    borderRadius: theme.spacing(1),
  },
  break: {
    margin: theme.spacing(0.5, 0),
  },
}));

// transform into pure component to not refresh if history does not change
const History = ({ history }) => {
  const classes = useStyles();
  const formattedHistory = writeHistory(history);

  return (
    <div className={classes.root}>
      {formattedHistory.map((event, idx) => (
        <div key={idx} className={classes.box}>
          <div className={classes.fr_aiC_jcSB}>
            <span className={classes.fr_aiC_jcFS}>
              <Typography variant="body2">Author:</Typography>
              <Typography variant="body2" className={classes.values}>{event.author}</Typography>
            </span>
            <span className={classes.fr_aiC_jcFS}>
              <Typography variant="body2">Date:</Typography>
              <Typography variant="body2" className={classes.values}>{event.date}</Typography>
            </span>
          </div>
          {event.changes.map((change, idx2) => (
            <div key={idx2} className={classes.fc_aiC}>
              <span className={classes.fr_aiC_jcFS}>
                <Typography variant="body2">Field:</Typography>
                <Typography variant="body2" className={classes.values}>{change.field}</Typography>
              </span>
              <span className={classes.fr_aiC_jcFS}>
                <Typography variant="body2">From:</Typography>
                <Typography variant="body2" className={classes.values}>{change.from}</Typography>
              </span>
              <span className={classes.fr_aiC_jcFS}>
                <Typography variant="body2">To:</Typography>
                <Typography variant="body2" className={classes.values}>{change.to}</Typography>
              </span>
              {event.changes.length > 1 && <div className={classes.break} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default History;
