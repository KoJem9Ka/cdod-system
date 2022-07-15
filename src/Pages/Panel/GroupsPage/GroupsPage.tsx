import React, { useState } from 'react'
import { TGroup }          from '../../../other/typesOLD'
import Workspace           from '../../../HOC/Workspace/Workspace'
import { FlexRow }         from '../../../components/styledComponents'



const GroupsPage: React.FC = () => {
  const [ chosenId, setChosenId ] = useState( 0 )
  // const { groups, loading } = useQueryGroups_LOC()

  // usePreloader( loading )

  const handler = ( id: TGroup['id'] ) => {
    setChosenId( +id )
    // toast( `Выбрана группа с id ${ id }` )
  }

  return (
    <Workspace>
      <FlexRow>
        {/*<GroupsTable data={ groups } onRowSelected={ handler }/>*/}
        {/*{ !chosenId ? <></> : <GroupForm id={ chosenId }/> }*/}
      </FlexRow>
    </Workspace>
  )
}

export default GroupsPage
