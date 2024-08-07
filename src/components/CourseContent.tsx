import React from 'react';
import '../css/CourseGrid.css';
import { useNavigate } from 'react-router-dom';

interface Course {
  icon: string;
  title: string;
  details: string;
  label: string;
}

interface CourseGridProps {
  courses: Course[];
}

const CourseGrid: React.FC<CourseGridProps> = ({ courses }) => {
  const navigate = useNavigate();
  const courseDetailsRedirection = (index: number) => {
    navigate(`/exam/courses/${index}`);
  };
  
  return (
    <div className="grid-container" >
      {courses.map((course, index) => (
        <div key={index} className="grid-item" onClick={() =>courseDetailsRedirection(index)}>
          <div className="label">{course.label}</div>
          <div className="icon">{course.icon}</div>
          <h3 className="title">{course.title}</h3>
          <p className="details">{course.details}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseGrid;
