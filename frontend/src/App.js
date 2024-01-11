import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

// create a darkTheme function to handle dark theme using createTheme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth="md">
          <AddTodo />
          <TodoList />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
