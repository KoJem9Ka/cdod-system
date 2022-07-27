import React from 'react'
import styled from 'styled-components'
import { GCourseType } from '../../../other/generated'

const Item = styled.div`
  & > h2{
    font-size: 1.5rem;
  }
  font-size: 1.2rem;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  background: white;
  border-radius: 1rem;
  padding: 2rem 1rem;
  //min-width: 320px;
  gap: 1.2rem;
  transition: 100ms;
  &:hover{
    transform: scale(104%);
  }
  &> img{
    border-radius: 100rem;
  }
`

type CourseItemProps = { 
  course: GCourseType
  openModalHandler: (id: number)=> void 
}

const CourseItem: React.FC<CourseItemProps> = ({ course, openModalHandler }) => (
  <Item onClick={() => openModalHandler(course.id)}>
    <img
      alt={course.name}
      height={100}
      src='https://klike.net/uploads/posts/2019-07/1564314090_3.jpg'
      width={100}
    />
    <h2>{course.name}</h2>
    <p>Стоимость: {course.price}</p>
    <p>Длительность: {course.durationInMonths}</p>
  </Item>
)

export default CourseItem