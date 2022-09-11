import React              from 'react'
import Workspace          from '../../../HOC/Workspace/Workspace'
import StudentForm        from './StudentForm/StudentForm'
import { FlexRowPressed } from '../../../components/UIKit/otherStyled'
import StudentsTable      from './StudentsTable/StudentsTable'
import styled             from 'styled-components'



const WorkspacePage = styled( Workspace )`
  display        : flex;
  flex-direction : column;
`


const StudentsPage: React.FC = () => (
  <WorkspacePage>
    <FlexRowPressed>
      <StudentsTable/>
      <StudentForm/>
    </FlexRowPressed>
  </WorkspacePage>
)

StudentsPage.whyDidYouRender = true

export default StudentsPage
