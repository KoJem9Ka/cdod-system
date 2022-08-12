import React, { useEffect, useState } from 'react'
import { useCourseForm } from '../../../../store/courseForm/hooks'
import { HexColorPicker } from 'react-colorful'
import ColorPicker from '../../../../components/ColorPicker/ColorPicker'
import styled from 'styled-components'

const Main = styled.div`
  margin: 1rem 0 1rem;
`

const CourseModalMain: React.FC = () => {
  const { isEdit, courseModified, changeCourse } = useCourseForm()
  const [ color, setColor ] = useState('')
  
  useEffect(() => {
    if (!isEdit)
      courseModified?.color !== null ? setColor(courseModified?.color as string) : setColor('#FFFFFF')
  }, [ isEdit ])
  
  
  return (
    <Main>
      <ColorPicker colorOriginal={color} isEdit={isEdit} setColorOriginal={setColor}/>
    </Main>
  )
}

export default CourseModalMain