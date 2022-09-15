import React from 'react'
import { GForm, useGroupForm } from '../../../../../store/groupForm/hooks'
import { StyledLineEdit, StyledParagraph } from '../../../../../components/UIKit/Forms/styled'

type GroupInputNameProps = {
  value: string
}

const GroupInputName: React.FC<GroupInputNameProps> = ({ value }) => {
  const { isEdit } = useGroupForm(g => g.isEdit)
  const { changeGroup } = GForm
    
  return isEdit ? <StyledLineEdit value={value} placeholder={'Название'} onChange={e => changeGroup({ name: e.currentTarget.value })}/>
    : <StyledParagraph>{value}</StyledParagraph>
}

export default GroupInputName