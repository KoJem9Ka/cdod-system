import React from 'react'
import CourseItem from './CourseItem'
import styled from 'styled-components'
import { GCourseType } from '../../../other/generated'

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, auto));
  gap: 2rem;
  overflow-y: auto;
`

type CourseGridProps = {
  courses: GCourseType[]
  openModalHandler: (id: number)=> void
}

const CourseGrid: React.FC<CourseGridProps> = ({ courses, openModalHandler }) => (
  <Grid>
    {
      courses.map(course => (
        <CourseItem key={course.id} course={course} openModalHandler={openModalHandler}/>
      ))
    }
  </Grid>
)

export default CourseGrid