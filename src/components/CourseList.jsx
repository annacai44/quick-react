const CourseList = ({courses}) => {
    return (
        <div>
            { Object.entries(courses).map(([courseId, courseData]) => 
            <div key={courseId}> {courseData.term} {courseId}: {courseData.title} </div>
            ) }
        </div>
    )
}

export default CourseList;