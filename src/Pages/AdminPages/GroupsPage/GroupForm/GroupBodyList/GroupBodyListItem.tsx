import React from 'react'
import { ReactComponent as AddIcon } from '../../../../../assets/icons/editIcons/add.svg'
import { ReactComponent as AddedIcon } from '../../../../../assets/icons/editIcons/added.svg'
import { ReactComponent as RemoveIcon } from '../../../../../assets/icons/editIcons/remove.svg'
import { ReactComponent as RemovedIcon } from '../../../../../assets/icons/editIcons/removed.svg'
import { useGroupForm } from '../../../../../store/groupForm/hooks'
import styled from 'styled-components'
import { GGroupByIdQuery, GGroupsQuery } from '../../../../../other/generated'
import {humanizeDate, shortFIOFormatter} from '../../../../../other/helpers'

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
  index: number
}

const GroupBodyListItem: React.FC<GroupBodyListItem> = ({ student, index }) => {
  
  const { isEdit, removedIds, addedIds } = useGroupForm()
  
  //TODO: Почему у студента поля имени могут быть пустыми...?
  return (
    <Item>
      {
        isEdit ? <span>
          <RemovedIcon/>
        </span>
          : <span>{index + 1}.</span>
      }
      <span>{shortFIOFormatter(student.lastName!, student.firstName!, student.patronymic!)}</span>
      <span>{student.birthDate && humanizeDate(student.birthDate, 'floor')}</span>
    </Item>
  )
}

export default GroupBodyListItem