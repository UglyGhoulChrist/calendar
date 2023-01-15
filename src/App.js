import Calendar from "./components/Calendar";
import data from "./utils/getCalendar";

function App() {
  return <Calendar {...data} />;
}

export default App;
