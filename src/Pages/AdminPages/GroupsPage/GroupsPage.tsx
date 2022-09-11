import React              from 'react'
import Workspace          from '../../../HOC/Workspace/Workspace'
import { FlexRowPressed } from '../../../components/UIKit/otherStyled'
import { usePreloader }   from '../../../components/Preloader/Preloader'
import {
  GGroupsQuery,
  useGroupsQuery
}                         from '../../../other/generated'
import GroupsTable        from './GroupTable/GroupsTable'
import GroupForm          from './GroupForm/GroupForm'



type T = GGroupsQuery['groups'][number]

const GroupsPage: React.FC = () => {
  const { data, loading } = useGroupsQuery()
  usePreloader( loading )

  return (
    <Workspace>
      <FlexRowPressed>
        <GroupsTable/>
        <GroupForm/>
      </FlexRowPressed>
    </Workspace>
  )
}

export default GroupsPage
