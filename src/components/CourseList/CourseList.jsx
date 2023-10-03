import './CourseList.css';

const CourseList = ({courses, term}) => {
    return (
        <div className="course-list">
            { Object.entries(courses).filter(([courseId, courseData]) => courseData.term === term).map(([courseId, courseData]) => 
                <div className="card m-1 p-2" key={courseId}> 
                    <div className="card-body">
                        <h5 className="card-title">{courseData.term} {courseId}</h5>
                        <p className="card-text">{courseData.title}</p>
                    </div>
                    <div className="card-footer bg-transparent">
                        <p className="card-text">{courseData.meets}</p>
                    </div>
                </div>
                    
            ) }
        </div>
    )
}

export default CourseList;