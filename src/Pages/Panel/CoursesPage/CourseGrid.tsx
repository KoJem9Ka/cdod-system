import React from 'react'
import CourseItem from './CourseItem'
import styled from 'styled-components'
import { GCourseType } from '../../../other/generated'

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  overflow: auto;
  padding: 1rem 0;
  //margin: 0rem -1rem -1rem;
  //margin-inline: -1rem;
`

type CourseGridProps = {
  courses: GCourseType[]
}

const CourseGrid: React.FC<CourseGridProps> = ({ courses }) => (
  <Grid>
    {
      courses.map(course => (
        <CourseItem key={course.id} course={course}/>
      ))
    }
  </Grid>
)

export default CourseGrid