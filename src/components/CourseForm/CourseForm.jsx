import { useFormData } from "../../utilities/useFormData";
import { useNavigate, useParams } from "react-router-dom";
import { validateMeetingTime } from "../../utilities/catchConflicts";

const validateUserData = (key, val) => {
  switch (key) {
    case "courseTitle":
      return /(^\w\w)/.test(val) ? "" : "must be least two characters";
    case "meetingTimes":
      return validateMeetingTime(val)
        ? ""
        : "must contain days and start-end, e.g., MWF 12:00-13:20";
    default:
      return "";
  }
};

const InputField = ({ name, text, state, change }) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">
      {text}
    </label>
    <input
      className="form-control"
      id={name}
      name={name}
      defaultValue={state.values?.[name]}
      onChange={change}
    />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

const ButtonBar = ({ message, disabled }) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <button
        type="button"
        className="btn btn-outline-dark me-2"
        onClick={() => navigate(-1)}
      >
        Cancel
      </button>
      {/* <button
        type="submit"
        className="btn btn-primary me-auto"
        disabled={disabled}
      >
        Submit
      </button> */}
      <span className="p-2">{message}</span>
    </div>
  );
};

const CourseForm = ({ courses }) => {
  //   const [update, result] = useDbUpdate(`/users/${user.id}`);

  const { courseId } = useParams();
  const course = Object.entries(courses).filter(
    ([id, courseData]) => courseId === id
  )[0];
  const courseData = course[1];

  const [state, change] = useFormData(validateUserData, {
    courseTitle: courseData.title,
    meetingTimes: courseData.meets,
  });
  const submit = (evt) => {
    evt.preventDefault();
    if (!state.errors) {
      update(state.values);
    }
  };

  return (
    <form
      onSubmit={submit}
      noValidate
      className={state.errors ? "was-validated" : null}
    >
      <InputField
        name="courseTitle"
        text="Course Title"
        state={state}
        change={change}
      />
      <InputField
        name="meetingTimes"
        text="Meeting Times"
        state={state}
        change={change}
      />
      <ButtonBar message={""} />
    </form>
  );
};

export default CourseForm;
