/* eslint-disable react/jsx-boolean-value */
import MomentUtils from '@date-io/moment';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    // margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formControl: {
    width: '100%',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    // margin: theme.spacing(2),
  },
  // submit: {
  //   margin: theme.spacing(3, 0, 2),
  // },
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
  status: '',
};

function TodoForm() {
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

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const todoFake = {
    username: 'Oliver',
    dueDate: '2020-07-31',
    assignedTo: 'Kari',
    text: 'Ligar pro Edsu',
    detail: 'Conversar com Edsu e Mamae Mitiko',
    importance: 'high',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting');
  };

  // console.log(state);
  return (
    <>
      <Container
        component="main"
        maxWidth="xs"
        disableGutters={true}
      >
        <div className={classes.paper}>
          <Typography variant="h6" className={classes.buttonText}>
            New Todo
          </Typography>
          <form className={classes.form} noValidate>
            <FormControl
              fullWidth={true}
              variant="outlined"
              required
            >
              <InputLabel id="demo-simple-select-error-label">Assigned to</InputLabel>
              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                name="assignedTo"
                value={assignedTo}
                onChange={handleInput}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Oliver">Oliver</MenuItem>
                <MenuItem value="Kari">Kari</MenuItem>
                <MenuItem value="Karolina">Karolina</MenuItem>
              </Select>
              {/* <FormHelperText></FormHelperText> */}
            </FormControl>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="text"
              value={text}
              onChange={handleInput}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="detail"
              label="Description"
              name="detail"
              value={detail}
              onChange={handleInput}
              autoFocus
            />
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="DD/MM/YYYY"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
            <FormControl
              fullWidth={true}
              variant="outlined"
              required
            >
              <InputLabel id="demo-simple-select-error-label">Assigned to</InputLabel>
              <Select
                labelId="bla"
                id="bla"
                name="importance"
                value={importance}
                onChange={handleInput}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="High">Oliver</MenuItem>
                <MenuItem value="Medium">Kari</MenuItem>
                <MenuItem value="Low">Karolina</MenuItem>
              </Select>
              {/* <FormHelperText></FormHelperText> */}
            </FormControl>
            <Button
              disabled={false}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={classes.submit}
            >
              Aperte aqui
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default TodoForm;
