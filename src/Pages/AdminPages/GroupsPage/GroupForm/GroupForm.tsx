import React from 'react'
import { Form, FormBody, FormFooter, FormHead } from '../../../../components/UIKit/Forms'
import { GForm, useGroupForm } from '../../../../store/groupForm/hooks'
import { ReactComponent as GroupLogo } from '../../../../assets/img/noGroupLogo.svg'
import GroupBodyList from './GroupBodyList/GroupBodyList'
import GroupFooterButtons from './GroupFooterButtons'
import { strJoinSpace } from '../../../../other/helpers'
import { HeadStyledText, StyledParagraph } from '../../../../components/UIKit/Forms/styled'
import GroupSelectTeacher from './Components/GroupSelectTeacher'
import { GTeachersQuery } from '../../../../other/generated'
import GroupInputName from './Components/GroupInputName'

type T = GTeachersQuery['teachers'][number]
export type QGroupTeacher = Pick<T, 'lastName' | 'firstName' | 'patronymic' | 'id'>

const handlerTeacher = (teacher: QGroupTeacher) => GForm.changeGroup({ teacher })

const GroupForm: React.FC = () => {	
  const { groupModified, removedIds, addedIds } = useGroupForm( g => [ g.groupModified, g.addedIds, g.removedIds ])
  if (!groupModified) return <></>  
  const teacherName = strJoinSpace(groupModified.teacher.lastName, groupModified.teacher.firstName && groupModified.teacher.firstName[0], groupModified.teacher.patronymic && groupModified.teacher.patronymic[0])
  
  return (
    <Form>
      <FormHead>
        <GroupLogo/>
        <div>
          <StyledParagraph>{groupModified.course.name}</StyledParagraph>
          <GroupInputName value={groupModified.name}/>
          <GroupSelectTeacher value={teacherName} onChange={handlerTeacher}/>
          <HeadStyledText>{groupModified.studentsCount - removedIds.length + addedIds.length} уч.</HeadStyledText>
        </div>
      </FormHead>
      <FormBody>
        <GroupBodyList/>
      </FormBody>
      <FormFooter>
        <GroupFooterButtons/>
      </FormFooter>
    </Form>
  )
}

export default GroupForm