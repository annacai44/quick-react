import { Button, Col } from "react-bootstrap";
import "./Course.css";
import { Link } from "react-router-dom";
import { useAuthState } from "../../utilities/firebase";
const Course = ({
  courseId,
  courseData,
  selected,
  toggleSelected,
  cannotSelect,
}) => {
  const [user] = useAuthState();
  return (
    <div
      className="course card m-1 p-2"
      onClick={
        selected && !cannotSelect ? () => toggleSelected(courseId) : null
      }
    >
      <div
        className={`card-body ${
          selected && selected.includes(courseId) ? "selected" : ""
        } ${cannotSelect ? "unselectable" : ""}`}
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
      {user ? (
        <Col>
          <Link to={`/form/${courseId}`}>
            <Button>Edit</Button>
          </Link>
        </Col>
      ) : (
        ""
      )}
    </div>
  );
};

export default Course;
