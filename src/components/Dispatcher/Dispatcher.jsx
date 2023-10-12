import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDisplay from "../CourseDisplay/CourseDisplay";
import CourseForm from "../CourseForm/CourseForm";

const Dispatcher = ({ courses }) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CourseDisplay courses={courses} />} />
      <Route
        path="/form/:courseId"
        element={<CourseForm courses={courses} />}
      />
    </Routes>
  </BrowserRouter>
);

export default Dispatcher;
