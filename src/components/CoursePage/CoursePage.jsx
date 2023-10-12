import CourseList from "../CourseList/CourseList";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Cart from "../Cart/Cart";
import { doCoursesOverlap } from "../../utilities/catchConflicts";

const CoursePage = ({ courses, term }) => {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const [unselectable, setUnselectable] = useState([]);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (item) =>
    setSelected(
      selected.includes(item)
        ? selected.filter((x) => x !== item)
        : [...selected, item]
    );

  useEffect(() => {
    const conflictingCourses = [];

    for (const [courseId, courseData] of Object.entries(courses)) {
      let coursesOverlap;
      for (const select of selected) {
        if (select !== courseId) {
          coursesOverlap = doCoursesOverlap(courses[select], courseData);

          if (coursesOverlap) {
            conflictingCourses.push(courseId);
            break;
          }
        }
      }
    }

    setUnselectable(conflictingCourses);
  }, [selected]);

  return (
    <div>
      <button className="btn btn-outline-dark" onClick={openModal}>
        Course Plan
      </button>
      <Modal open={open} close={closeModal}>
        <Cart courses={courses} selected={selected} />
      </Modal>
      <CourseList
        courses={courses}
        term={term}
        selected={selected}
        toggleSelected={toggleSelected}
        unselectable={unselectable}
      />
    </div>
  );
};

export default CoursePage;
