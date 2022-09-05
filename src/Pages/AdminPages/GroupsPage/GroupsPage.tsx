import React            from 'react'
import Workspace        from '../../../HOC/Workspace/Workspace'
import { FlexRow }      from '../../../components/UIKit/otherStyled'
import { usePreloader } from '../../../components/Preloader/Preloader'
import {
  GGroupsQuery,
  useGroupsQuery
}                       from '../../../other/generated'
import GroupsTable from './GroupTable/GroupsTable';
import GroupForm from './GroupForm/GroupForm';


type T = GGroupsQuery['groups'][number]

const GroupsPage: React.FC = () => {
  const { data, loading } = useGroupsQuery()
  usePreloader( loading )

  const handler = ( id: T['id'] ) => void {}/*void setChosenId( +id )*/


  return (
    <Workspace>
      <FlexRow>
        <GroupsTable/>
        <GroupForm/>
      </FlexRow>
    </Workspace>
  )
}

export default GroupsPage
