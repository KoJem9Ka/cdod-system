// import React             from 'react'
// import style             from '../GroupForm.module.scss'
// import GroupFormListItem from './GroupFormListItem'
//
//
//
// type GroupPanelListProps = {
//   students: Pick<TStudent, 'id' | 'last_name' | 'first_name' | 'patronymic' | 'birth_date'>[]
//   isEdit: boolean
//   handleRemove: ( id: number )=> void
// }
//
// const GroupFormList: React.FC<GroupPanelListProps> = ( { students, isEdit, handleRemove } ) => (
//   <div className={ style.group_panel_list }>
//     {
//       students.length
//         ? students.map( ( item, index ) => (
//           <GroupFormListItem
//             key={ item.id }
//             handleRemove={ handleRemove }
//             index={ index }
//             isEdit={ isEdit }
//             Students={ item }
//           />
//         ) )
//         : <div className={ style.group_panel_not_found }>
//           <img alt='not found' src='./images/group/notFound.svg'/>
//           <p>Нет учеников</p>
//         </div>
//     }
//   </div>
// )
//
// export default GroupFormList
export {}