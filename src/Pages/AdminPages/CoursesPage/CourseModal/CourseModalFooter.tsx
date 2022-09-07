import React             from 'react'
import styled            from 'styled-components'
import { useCourseForm } from '../../../../store/courseForm/hooks'



const Footer = styled.div`
  display         : flex;
  justify-content : right;
  margin          : 1rem 0 0;
`

type CourseButtonProps = {}
const CourseButton = styled.button<CourseButtonProps>`
  padding          : 0.3rem;
  margin           : 0 1rem;
  color            : white;
  background-color : var(--COLOR_blue);
  cursor           : pointer;
  border-radius    : 1.5rem;
  opacity          : ${ props => (props.disabled ? 0.5 : '') };
`


const CourseModalFooter: React.FC = () => {

  const { isEdit, isModified, courseToggleEdit } = useCourseForm()

  return (
    <Footer>
      {
        isEdit
          ? <>
            <CourseButton onClick={ () => courseToggleEdit() }>Отмена</CourseButton>
            <CourseButton disabled={ !isModified() }>Сохранить</CourseButton>
          </>
          : <>
            <CourseButton onClick={ () => courseToggleEdit() }>Изменить</CourseButton>
          </>
      }
    </Footer>
  )
}

export default CourseModalFooter