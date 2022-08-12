import React from 'react'
import { useCourseForm } from '../../../../store/courseForm/hooks'
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > image{
    width: 10em;
    height: auto;
  }
  & > p{
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
  }
  & > input{
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
  }
`

const CourseModalHeader: React.FC = () => {
	
  const { courseModified, isEdit, changeCourse } = useCourseForm()
	
  if (courseModified === null) return null
  
  return (
    isEdit ?
      <Header>
        <input type='text' value={courseModified.name} onChange={e => changeCourse({ name: e.currentTarget.value })}/>
      </Header>
      :
      <Header>
        <p>{courseModified.name}</p>
      </Header>

  )
}

export default CourseModalHeader