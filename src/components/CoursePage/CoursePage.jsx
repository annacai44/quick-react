import CourseList from "../CourseList/CourseList";
import { useState } from "react";
import Modal from "../Modal/Modal";
import CoursePlan from "../CoursePlan/CoursePlan";

const CoursePage = ({ courses, term }) => {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (item) =>
    setSelected(
      selected.includes(item)
        ? selected.filter((x) => x !== item)
        : [...selected, item]
    );

  return (
    <div>
      <button className="btn btn-outline-dark" onClick={openModal}>
        Course Plan
      </button>
      <Modal open={open} close={closeModal}>
        <CoursePlan courses={courses} selected={selected} />
      </Modal>
      <CourseList
        courses={courses}
        term={term}
        selected={selected}
        toggleSelected={toggleSelected}
      />
    </div>
  );
};

export default CoursePage;
