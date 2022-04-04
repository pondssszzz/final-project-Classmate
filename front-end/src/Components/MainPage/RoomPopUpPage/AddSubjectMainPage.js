import AddSubjectPage from "./AddSubjectPage";
import React,{useState} from "react";
import "./DialogPopUp.css"

export default function AddSubjectMainPage(){
    const [numberSubject, setNumberSubject] = useState(1);

    const isEqualOne = () => {
        return numberSubject === 1;
      };
    return (
        <div className="subject_button_container">
        { [...Array(numberSubject)].map((_, i) => <AddSubjectPage key={i} />) }
        {isEqualOne() ? (
            <span/>
        ) : (
            <button className="delete_subject_button" type="button" onClick={() => setNumberSubject(numberSubject -1)}>
              Delete Subject
            </button>
        )}
        <button className="add_subject_button" type="button" onClick={() => setNumberSubject(numberSubject + 1)}>
              Add Subject
            </button>
        </div>
    )
}