import React from 'react'
import { GForm, useGroupForm } from '../../../../../store/groupForm/hooks'
import {HeadStyledText, StyledLineEdit, StyledParagraph} from '../../../../../components/UIKit/Forms/styled'

type GroupInputNameProps = {
  value: string
}

const GroupInputName: React.FC<GroupInputNameProps> = ({ value }) => {
  const { isEdit } = useGroupForm(g => g.isEdit)
  const { change } = GForm
    
  return isEdit ? <StyledLineEdit value={value} placeholder={'Название'} onChange={e => change({ name: e.currentTarget.value })}/>
    : <HeadStyledText>{value}</HeadStyledText>
}

export default GroupInputName
