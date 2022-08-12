import React from 'react'
import styled from 'styled-components'
import { GCourseType } from '../../../other/generated'
import { useCourseForm } from '../../../store/courseForm/hooks'
import { hexToRgbA } from '../../../other/helpers'

const Item = styled.div<{ color: string }>`
  font-family: Rubik, serif;
  font-weight: 600;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 1.25rem;
  border-radius: 1.25rem;
  background-color: ${props => props.color};
  width: calc(100%);

  &:hover {
    cursor: pointer;
    box-shadow: 0.3rem 0.3rem 1rem ${props => hexToRgbA(props.color, 0.3)};
  }
`

const ImgBlock = styled.div`
  display: grid;
  grid-template-columns: auto 3fr;
  gap: 1rem;
`

const Img = styled.div`
  padding: 0.625rem;
  background: #ffffff;
  border-radius: 0.625rem;
`

const Title = styled.div`
  display: flex;
  font-size: 24px;
	line-height: 2rem;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  word-break: break-all;
`

const TextBlock = styled.div`
  font-size: 16px;
  display: grid;
  text-align: center;
  grid-template-columns: 1fr 1fr 1fr;
`

type CourseItemProps = {
  course: GCourseType
}

const CourseItem: React.FC<CourseItemProps> = ({ course }) => {
	
  const { selectCourse } = useCourseForm()
	
  return (
    <Item color={course.color || 'beige'} onClick={() => selectCourse(course.id)}>
      <ImgBlock>
        <Img>
          {/*<img alt='' src={course.svgIconUrl as string}/>*/}
          <img alt='' src='https://placekitten.com/50/50'/>
        </Img>
        <Title>
          {course.name}
        </Title>
      </ImgBlock>
      <TextBlock>
        <span>132 чел.</span>
        <span>14 200p</span>
        <span>c 8 лет</span>
      </TextBlock>
    </Item>
  )
}

export default CourseItem