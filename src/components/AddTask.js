import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [parseday, setParseDay] = useState("");
  const [day, setDay] = useState(null);
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please Add Task");
      return;
    }

    onAdd({ text, parseday, time, reminder });

    setText("");
    setParseDay("");
    setDay("");
    setTime("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Day</label>
        <DatePicker
          selected={day}
          placeholderText="Add Day"
          onChange={(date) => {
            setDay(date);
            setParseDay(format(date, "dd/MM/yyyy"));
          }}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className="form-control">
        <label>Time</label>
        <input
          type="text"
          placeholder="Add Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
