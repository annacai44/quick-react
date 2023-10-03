import "./CourseList.css";
import Course from "../Course/Course";

const CourseList = ({ courses, term, selected, toggleSelected }) => {
  return (
    <div className="course-list">
      {Object.entries(courses)
        .filter(([courseId, courseData]) => courseData.term === term)
        .map(([courseId, courseData]) => (
          <Course
            key={courseId}
            courseId={courseId}
            courseData={courseData}
            selected={selected}
            toggleSelected={toggleSelected}
          />
        ))}
    </div>
  );
};

export default CourseList;
