import React from 'react'
import TeachersTable from './TeachersTable/TeachersTable'
import Workspace from '../../../HOC/Workspace/Workspace'



const TeachersPage: React.FC = () => (
  <Workspace>
    <TeachersTable/>
  </Workspace>
)

export default TeachersPage
