import Course from "../Course/Course";

const CoursePlan = ({ courses, selected }) => {
  return (
    <div className="cart">
      {selected.length === 0 ? (
        <h2>
          No courses have been selected. Please select courses by clicking on a
          course in the course list.
        </h2>
      ) : (
        <div>
          {Object.entries(courses)
            .filter(([courseId, courseData]) => selected.includes(courseId))
            .map(([courseId, courseData]) => (
              <Course
                key={courseId}
                courseId={courseId}
                courseData={courseData}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default CoursePlan;
