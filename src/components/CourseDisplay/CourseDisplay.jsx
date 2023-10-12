import TermSelector from "../TermSelector/TermSelector";
import CoursePage from "../CoursePage/CoursePage";
import { useState } from "react";

const CourseDisplay = ({ courses }) => {
  const [term, setTerm] = useState("Fall");

  return (
    <div>
      <TermSelector term={term} setTerm={setTerm} />
      <CoursePage courses={courses} term={term} />
    </div>
  );
};

export default CourseDisplay;
