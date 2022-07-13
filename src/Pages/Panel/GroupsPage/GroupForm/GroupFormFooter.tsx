import React     from 'react'
import style     from './GroupForm.module.scss'
import { toast } from 'react-toastify'



type GroupPanelFooterProps = {
  isEdit: boolean
  isEqual: boolean
  handleEditing: ()=> void
}

const GroupFormFooter: React.FC<GroupPanelFooterProps> = ( { handleEditing, isEdit, isEqual } ) => (
  <div className={ style.group_panel_footer }>
    { isEdit
      ? (<>
        <button onClick={ handleEditing }>Отмена</button>
        <button
          className={ isEqual ? style.inactive : '' }
          disabled={ isEqual }
          onClick={ () => toast( 'сохранено' ) }
        >
          Сохранить
        </button>
      </>)
      : <button onClick={ handleEditing }>Изменить</button> }
  </div>
)

export default GroupFormFooter