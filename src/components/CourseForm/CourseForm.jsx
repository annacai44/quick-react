import { Form, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./CourseForm.css";

const onSubmit = () => {};

const CourseForm = ({ courses }) => {
  const { courseId } = useParams();
  const course = Object.entries(courses).filter(
    ([id, courseData]) => courseId === id
  )[0];

  const courseData = course[1];
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formCourseTitle">
        <Form.Label>Course Title</Form.Label>
        <Form.Control
          defaultValue={courseData.title}
          placeholder="Enter course title"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMeetingTimes">
        <Form.Label>Meeting Times</Form.Label>
        <Form.Control
          defaultValue={courseData.meets}
          placeholder="Enter meeting times"
        />
      </Form.Group>
      <Link to={`/`}>
        <Button variant="secondary" type="cancel">
          Cancel
        </Button>
      </Link>
    </Form>
  );
};

export default CourseForm;
