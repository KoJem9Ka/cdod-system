import React, {
  useEffect,
  useState
}                         from 'react'
import GroupsTable        from './GroupTable/GroupsTable'
import { TGroup }         from '../../../types'
import GroupForm          from './GroupForm/GroupForm'
import Workspace          from '../../../HOC/Workspace/Workspace'
import { useQueryGroups } from '../../../queriesLOCAL'
import styled             from 'styled-components'
import usePreloader       from '../../../components/Preloader/Preloader'



const FlexRow = styled.div`
  overflow : hidden;
  display  : flex;
  height   : 100%;
  gap      : 1rem;
`

const GroupsPage: React.FC = () => {
  const [ chosenId, setChosenId ] = useState( 0 )
  const { groups, loading } = useQueryGroups()

  useEffect( () => {
    usePreloader( loading )
  }, [ loading ] )

  const handler = ( id: TGroup['id'] ) => {
    setChosenId( +id )
    // toast( `Выбрана группа с id ${ id }` )
  }

  return (
    <Workspace>
      <FlexRow>
        <GroupsTable data={ groups } onRowSelected={ handler }/>
        { !chosenId ? <></> : <GroupForm id={ chosenId }/> }
      </FlexRow>
    </Workspace>
  )
}

export default GroupsPage
