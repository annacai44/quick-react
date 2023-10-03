import "./Course.css";
const Course = ({ courseId, courseData, selected, toggleSelected }) => {
  return (
    <div
      className="course card m-1 p-2"
      onClick={() => toggleSelected(courseId)}
    >
      <div
        className={`card-body ${selected.includes(courseId) ? "selected" : ""}`}
      >
        <div className="course-info">
          <h5 className="card-title">
            {courseData.term} {courseId}
          </h5>
          <p className="card-text">{courseData.title}</p>
        </div>
        <div className="card-footer bg-transparent">
          <p className="card-text">{courseData.meets}</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
