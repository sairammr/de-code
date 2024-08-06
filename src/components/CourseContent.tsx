import React from 'react';
import '../css/CourseGrid.css';

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
  return (
    <div className="grid-container">
      {courses.map((course, index) => (
        <div key={index} className="grid-item">
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
