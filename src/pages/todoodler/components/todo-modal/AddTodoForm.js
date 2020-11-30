/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-boolean-value */
import MomentUtils from '@date-io/moment';
import React, { useState } from 'react';
import { isEmpty, isNil } from 'ramda';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import FlagIcon from '@material-ui/icons/Flag';
import { green, amber, red } from '@material-ui/core/colors';
import validateInput from '../../../../services/input-validation/rules';
import { useTodoState } from '../../todo-context';

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
}));

const validationRuleMap = {
  text: 'title',
  detail: 'detail',
  dueDate: 'dueDate',
};

const initialState = {
  author: '',
  workGroup: '',
  modifiedOn: '',
  completedOn: '',
  deletedOn: '',
  dueDate: new Date(),
  assignedTo: '',
  text: '',
  detail: '',
  importance: '',
  status: 'active',
};

function AddTodoForm({ onClose }) {
  const classes = useStyles();
  const { users, newTodo } = useTodoState();
  const [state, setState] = useState(initialState);
  const {
    dueDate, assignedTo, text, detail, importance,
  } = state;
  const [error, setError] = useState({});
  const submissionCheck = [
    'dueDate', 'assignedTo', 'text', 'importance',
  ];

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await newTodo({ todo: state });
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

  return (
    <Container
      component="main"
      maxWidth="sm"
      disableGutters={true}
    >
      <form>
        <Typography variant="h6" className={classes.title}>
          New Todo
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
              labelId="importance-label"
              id="importance-select"
              name="importance"
              value={importance}
              onChange={handleInput}
              label="Importance"
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="High">
                <span className={classes.flexRow}>
                  <FlagIcon style={{ color: red[600], marginRight: '8px' }} />
                  High
                </span>
              </MenuItem>
              <MenuItem value="Medium">
                <span className={classes.flexRow}>
                  <FlagIcon style={{ color: amber[500], marginRight: '8px' }} />
                  Medium
                </span>
              </MenuItem>
              <MenuItem value="Low">
                <span className={classes.flexRow}>
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
            Add
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
      </form>
    </Container>
  );
}

export default AddTodoForm;
