import CourseList from "../CourseList/CourseList";
import { useState } from "react";

const CoursePage = ({ courses, term }) => {
  const [selected, setSelected] = useState([]);

  const toggleSelected = (item) =>
    setSelected(
      selected.includes(item)
        ? selected.filter((x) => x !== item)
        : [...selected, item]
    );

  return (
    <CourseList
      courses={courses}
      term={term}
      selected={selected}
      toggleSelected={toggleSelected}
    />
  );
};

export default CoursePage;
