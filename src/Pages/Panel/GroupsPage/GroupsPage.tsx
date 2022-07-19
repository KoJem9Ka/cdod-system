import React            from 'react'
import Workspace        from '../../../HOC/Workspace/Workspace'
import { FlexRow }      from '../../../components/styledComponents'
import {
  GGroupsQuery,
  useGroupsQuery
}                       from './Groups.generated'
import { usePreloader } from '../../../components/Preloader/Preloader'
import GroupsTable      from './GroupTable/GroupsTable'



type T = GGroupsQuery['groups'][number]

const GroupsPage: React.FC = () => {
  const { data, loading } = useGroupsQuery()
  // const {} = useGroupForm()

  usePreloader( loading )

  const handler = ( id: T['id'] ) => void {}/*void setChosenId( +id )*/

  return (
    <Workspace>
      <FlexRow>
        <GroupsTable data={ data?.groups || [] } onRowSelected={ handler }/>
        {/*{ !chosenId ? <></> : <GroupForm id={ chosenId }/> }*/ }
      </FlexRow>
    </Workspace>
  )
}

export default GroupsPage
