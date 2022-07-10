import React from 'react'
import style from './GroupPanel.module.scss'

type GroupPanelFooterProps = {
  isEdit: boolean
  isEqual: boolean
  handleEditing: ()=> void
}

const GroupPanelFooter: React.FC<GroupPanelFooterProps> = ({ handleEditing, isEdit, isEqual }) => (
  <div className={style.group_panel_footer}>
    {
      isEdit
        ? <>
          <button onClick={handleEditing}>Отмена</button>
          <button
            className={isEqual ? style.inactive : ''}
            disabled={isEqual}
            onClick={() => alert('сохранено')}
          >
Сохранить
          </button>
        </>
        : <button onClick={handleEditing}>Изменить</button>
    }
  </div>
)

export default GroupPanelFooter

// Оценки, занятия и студенты