import { useState } from "react";
import "./styles.css";
//Build a Todo app with input box and a button next to it,
//every time user add in data inside input box and clicks next the data should be appended to list
//on click of the data in list it should delete the data
export default function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const newId = new Date().getMilliseconds();
    setNotes((prev) => {
      return [...prev, { id: newId, note: note }];
    });
    setNote("");
    console.log(notes);
  };
  const handleDelete = (deleteId) => {
    const filterdNotes = notes.filter((item) => {
      return item.id !== deleteId;
    });
    setNotes(filterdNotes);
    //console.log(deleteId, " with" ,filterdNotes);
  };
  return (
    <div>
      <div className="addNote">
        <input
          type="text"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <div className="showNotes">
        {notes.map((item) => {
          return (
            <div key={item.id}>
              <span>{item.note}</span>
              <button
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
