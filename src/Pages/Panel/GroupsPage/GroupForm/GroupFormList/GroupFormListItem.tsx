import React, { useEffect, useState } from 'react'
import style        from '../GroupForm.module.scss'
import { TStudent } from '../../../../../other/typesOLD'

type GroupPanelItemProps = {
  Students: Pick<TStudent, 'id' | 'last_name' | 'first_name' | 'patronymic' | 'birth_date'>
  index: number
  isEdit: boolean
  handleRemove: (id: number)=> void
}

const GroupFormListItem: React.FC<GroupPanelItemProps> = ( { Students: { id, birth_date, first_name, last_name, patronymic }, index, isEdit, handleRemove,
}) => {
  const iconRemove = './images/group/editIcons/remove.svg'
  const iconRemoved = './images/group/editIcons/removed.svg'
  const [ isRemoved, setIsRemoved ] = useState(false)
	
  useEffect(() => {
    if (!isEdit) {
      setIsRemoved(false)
    }
  }, [ isEdit ])
	
  return (
    <div className={style.group_panel_item}>
      {
        isEdit
          ? <span>
            <img
              alt='r'
              className={style.edit_icon}
              src={isRemoved ? iconRemoved : iconRemove}
              onClick={() => {
                handleRemove(+id)
                setIsRemoved(!isRemoved)
              }}
            />
          </span>
          : <span>{`${index + 1}.`}</span>
      }
			
      <span>{`${last_name} ${first_name[0]}. ${patronymic[0]}.`}</span>
      <span>{`${new Date().getFullYear() - new Date(birth_date).getFullYear()} лет`}</span>
    </div>
  )
}

export default GroupFormListItem