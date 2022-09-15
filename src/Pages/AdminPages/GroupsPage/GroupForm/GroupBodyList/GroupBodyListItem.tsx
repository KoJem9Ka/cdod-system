import React from 'react'
import { GForm, useGroupForm } from '../../../../../store/groupForm/hooks'
import styled from 'styled-components'
import { GGroupByIdQuery, GGroupsQuery } from '../../../../../other/generated'
import { humanizeDate, strJoinSpace } from '../../../../../other/helpers'
import Icons from '../../../../../assets/icons/Icons'
import { isNil } from 'lodash'

const Item = styled.div`
  line-height           : 2rem;
  display               : grid;
  padding               : 0.2rem 0;
  color                 : var(--COLOR_dark-gray-text);
  background            : white;
  grid-template-columns : 1.3fr 7fr 1.7fr;
  & > img {
    vertical-align: middle;
  }
`

type GroupBodyListItem = {
  student: GGroupByIdQuery['students'][number]
  index?: number
  other?: true
}

const GroupBodyListItem: React.FC<GroupBodyListItem> = ({ student, index, other }) => {
  
  const { isEdit, removedIds, addedIds } = useGroupForm(g => [ g.isEdit, g.removedIds, g.addedIds ])
  const { groupRemoveStudent, groupAddStudent } = GForm
  
  return (
    <Item>
      {
        isEdit ? <span>
          {
            other
              ? <Icons thumb={addedIds.includes(student.id) ? 'studentAdded' : 'studentAdd'} onClick={() => groupAddStudent(student.id)}/>
              : <Icons
                thumb={removedIds.includes(student.id) ? 'studentRemoved' : 'studentRemove'}
                onClick={() => groupRemoveStudent(student.id)
                }
              />
          }
        </span>
          : <span>{!isNil(index) && index + 1}.</span>
      }
      <span>{strJoinSpace(student.lastName, student.firstName, student.patronymic && `${student.patronymic[0]}.`)}</span>
      <span>{student.birthDate && humanizeDate(student.birthDate, 'floor')}</span>
    </Item>
  )
}

export default GroupBodyListItem