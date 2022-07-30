import React from 'react'
import styled from 'styled-components'
import { GCourseType } from '../../../other/generated'
import { useCourseForm } from '../../../store/courseForm/hooks'

const Item = styled.div`
  background: white;
  border-radius: 1rem;
  cursor: pointer;
  transition: 100ms;
  &:hover{
    transform: scale(104%);
  }
`

const ImgBlock = styled.div<{ color: any }>`
  background: ${props => (props.color ? props.color : 'white')};
  width: 100%;
  display: flex;
  justify-content: center;
  padding:  1rem 0;
  border-radius: 1rem;
  & > img{
    border-radius: 100rem;
  }
`

const TxtBlock = styled.div`
  & > h2{
    font-size: 1.5rem;
  }
  font-size: 1.2rem;
  display: flex;
  gap: 1.2rem;
  padding: 2rem 1rem;
  text-align: center;
  align-items: center;
  flex-direction: column;
`

type CourseItemProps = { 
  course: GCourseType
}

const CourseItem: React.FC<CourseItemProps> = ({ course }) => {
  
  const { selectCourse } = useCourseForm()
  
  return (
    <Item onClick={() => selectCourse(course.id)}>
      <ImgBlock color={course.color}>
        <img
          alt={course.name}
          height={100}
          src='https://klike.net/uploads/posts/2019-07/1564314090_3.jpg'
          width={100}
        />
      </ImgBlock>
      <TxtBlock>
        <h2>{course.name}</h2>
        <p>Стоимость: {course.price}</p>
        <p>Длительность: {course.durationInMonths}</p>
      </TxtBlock>
    </Item>
  )
}

export default CourseItem