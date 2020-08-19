/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-boolean-value */
import MomentUtils from '@date-io/moment';
import React, { useState } from 'react';
import clsx from 'clsx';
import { isEmpty, isNil } from 'ramda';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import FlagIcon from '@material-ui/icons/Flag';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import { green, orange, red } from '@material-ui/core/colors';
import validateInput from '../../../../services/input-validation/rules';
import { useTodoState } from '../../todo-context';
import History from '../history/index';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 300,
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  datePicker: {
    marginRight: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(1),
  },
  title: {
    textAlign: 'center',
  },
  menuItem: {
    display: 'flex',
    // justifyItems: 'center',
    alignItems: 'center',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const validationRuleMap = {
  text: 'title',
  detail: 'detail',
  dueDate: 'dueDate',
};

export default function EditTodoForm({ todo, onClose }) {
  const classes = useStyles();
  const { users, updateTodo } = useTodoState();
  const [error, setError] = useState({});
  const [state, setState] = useState({ ...todo });
  const [checked, setChecked] = useState(true);
  const [expanded, setExpanded] = React.useState(false);
  const initialState = { ...todo };
  const submissionCheck = [
    'dueDate', 'assignedTo', 'text', 'importance',
  ];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleChange = (event) => setChecked(event.target.checked);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const changes = {};
    const keys = Object.keys(state);
    keys.forEach((key) => {
      if (state[key] !== initialState[key]) {
        changes[key] = state[key];
      }
    });
    const { todoId } = initialState;
    await updateTodo({ todoId, changes });
    onClose();
  };

  const handleDate = (value) => {
    setState({ ...state, dueDate: value });
  };

  const validate = (e) => {
    const { name, value } = e.target;
    const validationError = validateInput(validationRuleMap[name], value);
    setError({ ...error, [name]: validationError });
  };

  const isReadyForSubmit = () => {
    const checkCompletion = submissionCheck.every((field) => !isEmpty(state[field]));
    const checkErrors = isEmpty(error) || Object.values(error).every((field) => isNil(field));
    return checkCompletion && checkErrors;
  };

  const {
    modifiedOn, completedOn, deletedOn, dueDate,
    assignedTo, text, detail, importance, status, history,
  } = state;

  return (
    <Container
      component="main"
      maxWidth="sm"
      disableGutters={true}
    >
      <form>
        <Typography variant="h6" className={classes.title}>
          Edit Todo
        </Typography>
        <TextField
          error={!!error.text}
          variant="outlined"
          margin="normal"
          // required
          fullWidth
          id="title"
          label="Title"
          name="text"
          value={text}
          onChange={handleInput}
          onBlur={validate}
          helperText={error.text}
          autoFocus
        />
        <TextField
          error={!!error.detail}
          className={classes.textField}
          variant="outlined"
          margin="normal"
          multiline
          rowsMax={5}
          // required
          fullWidth
          id="detail"
          label="Description"
          name="detail"
          value={detail}
          onChange={handleInput}
          onBlur={validate}
          helperText={error.detail}
        />

        <div className={classes.flexRow}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              className={classes.datePicker}
              disableToolbar
              variant="dialog"
              format="DD/MM/YYYY"
              margin="normal"
              id="date-picker-inline"
              label="Due Date"
              minDate={new Date()}
              value={dueDate}
              onChange={(date) => handleDate(date)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
          <FormControl variant="outlined" fullWidth className={classes.formControl}>
            <InputLabel id="importance-input-label">Importance</InputLabel>
            <Select
              // className={classes.menuItem}
              labelId="importance-label"
              id="importance-select"
              name="importance"
              value={importance}
              onChange={handleInput}
              label="Importance"
            >
              <MenuItem value="High">
                <span className={classes.menuItem}>
                  <FlagIcon style={{ color: red[500], marginRight: '8px' }} />
                  High
                </span>
              </MenuItem>
              <MenuItem value="Medium">
                <span className={classes.menuItem}>
                  <FlagIcon style={{ color: orange[500], marginRight: '8px' }} />
                  Medium
                </span>
              </MenuItem>
              <MenuItem value="Low">
                <span className={classes.menuItem}>
                  <FlagIcon style={{ color: green[500], marginRight: '8px' }} />
                  Low
                </span>
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        <FormControl variant="outlined" fullWidth className={classes.formControl}>
          <InputLabel id="assignedTo-input-label">Assigned to</InputLabel>
          <Select
            labelId="assignedTo-label"
            id="assignedTo-select"
            name="assignedTo"
            value={assignedTo}
            onChange={handleInput}
            label="Assigned to"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {users.map((user) => (
              <MenuItem
                key={user._id}
                value={user.username}
              >
                {user.username}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Checkbox
          className={classes.check}
          checked={checked}
          onChange={handleChange}
          // indeterminate
          color="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />

        <div className={classes.flexRow}>
          <Button
            className={classes.submit}
            style={{ marginRight: '4px' }}
            disabled={!isReadyForSubmit()}
            type="submit"
            size="large"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Update
          </Button>
          <br />
          <Button
            className={classes.submit}
            style={{ marginLeft: '4px' }}
            disabled={false}
            type="reset"
            size="large"
            fullWidth
            variant="contained"
            color="primary"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>

        <div className={classes.menuItem}>
          <Typography>History</Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </div>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <History history={history} />
        </Collapse>
      </form>
    </Container>
  );
}
