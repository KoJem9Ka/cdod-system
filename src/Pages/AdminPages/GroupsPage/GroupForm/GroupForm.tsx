import React from 'react'
import { Form, FormBody, FormFooter, FormHead } from '../../../../components/UIKit/Forms'
import { useGroupForm } from '../../../../store/groupForm/hooks'
import { ReactComponent as GroupLogo } from '../../../../assets/img/noGroupLogo.svg'
import GroupBodyList from './GroupBodyList/GroupBodyList'
import GroupFooterButtons from './GroupFooterButtons'

const GroupForm: React.FC = () => {
	
  const { groupOriginal, groupModified, groupLoading, changeGroup, isEdit, isModified } = useGroupForm()
  if (!groupOriginal) return <></>
	
  return (
    <Form>
      <FormHead>
        <GroupLogo/>
        
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