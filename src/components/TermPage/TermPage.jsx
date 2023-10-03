import TermSelector from "../TermSelector/TermSelector";
import CourseList from "../CourseList/CourseList";
import { useState } from "react";

const TermPage = ({courses}) => {
    const [term, setTerm] = useState("Fall");

    return (
        <div>
            <TermSelector term={term} setTerm={setTerm}/>
            <CourseList courses={courses} term={term}/>
        </div>
    )
}

export default TermPage;