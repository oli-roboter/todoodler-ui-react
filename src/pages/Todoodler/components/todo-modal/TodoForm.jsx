/* eslint-disable react/jsx-boolean-value */
import MomentUtils from '@date-io/moment';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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
  // error: {
  //   marginTop: theme.spacing(1),
  // },
  // link: {
  //   color: '#3f51b5',
  // },
}));

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

function TodoForm({ onClose, addTodo }) {
  const classes = useStyles();
  const [state, setState] = useState(initialState);
  const {
    author,
    workGroup,
    modifiedOn,
    completedOn,
    deletedOn,
    dueDate,
    assignedTo,
    text,
    detail,
    importance,
    status,
  } = state;
  const [selectedDate, setSelectedDate] = React.useState(dueDate);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting', state);
    await addTodo({ todo: state });
    onClose();
  };

  // console.log(state);
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
          variant="outlined"
          margin="normal"
          // required
          fullWidth
          id="title"
          label="Title"
          name="text"
          value={text}
          onChange={handleInput}
          autoFocus
        />
        <TextField
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
              value={selectedDate}
              onChange={setSelectedDate}
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
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
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
            <MenuItem value="Oliver">Oliver</MenuItem>
            <MenuItem value="Kari">Kari</MenuItem>
            <MenuItem value="Karolina">Karolina</MenuItem>
          </Select>
        </FormControl>

        <div className={classes.flexRow}>
          <Button
            className={classes.submit}
            style={{ marginRight: '4px' }}
            disabled={false}
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
            type="submit"
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

export default TodoForm;
