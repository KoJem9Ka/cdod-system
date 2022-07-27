// import React      from 'react'
// import style      from './GroupForm.module.scss'
//
//
//
// type GroupPanelHeaderProps = {
//   group: TGroup
//   isEdit: boolean
//   countStudents: number
//   // handleSetEditGroup: (group: TGroupWithStudents) => void
//   handleSetEditedGroup: ( group: TGroup )=> void
// }
//
// const GroupFormHeader: React.FC<GroupPanelHeaderProps> = ( { group, isEdit, countStudents, handleSetEditedGroup } ) => {
//   // const GroupFormHeader: React.FC<GroupPanelHeaderProps> = ({group, isEdit, countStudents, handleSetEditGroup}) => {
//   const teacherName = group.teacher.split( ' ' )
//   const picMap = new Map( [
//     [ '', './images/group/groupLogos/noCourse.svg' ],
//     [ '2D', './images/group/groupLogos/2d.svg' ],
//     [ '3D', './images/group/groupLogos/3d.svg' ],
//     [ 'Виртуальная реальность', './images/group/groupLogos/vr.svg' ],
//     [ 'Мультипликация', './images/group/groupLogos/animation.svg' ],
//     [ 'Прототипирование', './images/group/groupLogos/prototype.svg' ],
//     [ 'Робофабрика', './images/group/groupLogos/robot.svg' ],
//     [ 'Android', './images/group/groupLogos/android.svg' ],
//     [ 'C#', './images/group/groupLogos/csharp.svg' ],
//     [ 'Python', './images/group/groupLogos/python.svg' ]
//   ] )
//
//   const teachers = [ 'Тимощук А. Е.', 'Белов В. С.', 'Зверев В. Н.', 'Виноградов Х. Н.' ]
//
//   // type TGetAllParams = { allCourses: TCourse[], allGroups: TGroup[] }
//   // const gelAllCoursesQuery = gql`
//   //   query getCourses{
//   //     allCourses{
//   //       id
//   //       name
//   //     }
//   //     allGroups{
//   //       id
//   //       studentsCount
//   //       teacher
//   //       groupName
//   //       course
//   //       dateOfCreation
//   //     }
//   //   }`
//   // const {data} = useQuery<TGetAllParams>(gelAllCoursesQuery)
//
//   console.log( group.course )
//
//   return !isEdit
//     ? (
//       <div className={ style.group_panel_header }>
//         <img
//           alt={ group.course }
//           height={ 100 }
//           src={ picMap.get( group.course ) }
//           width={ 100 }
//         />
//         <div className={ style.group_panel_text }>
//           <p className={ style.group_course }>{ group.course }</p>
//           <p className={ style.group_name }>{ group.groupName }</p>
//           <p className={ style.group_teacher }>{ `${ teacherName[0] } ${ teacherName[1][0] }. ${ teacherName[2][0] }.` }</p>
//           <p className={ style.group_count }>{ `${ countStudents } учеников` }</p>
//         </div>
//       </div>
//     )
//     : (
//       <div className={ `${ style.group_panel_header_edit } ${ style.group_panel_header }` }>
//         <img alt='' src={ !group ? picMap.get( '' ) : picMap.get( group.course ) }/>
//         <p className={ style.group_course }>{ group.course }</p>
//         {
//           group && <>
//             <input
//               placeholder={ 'Название' }
//               type='text'
//               value={ group.groupName }
//               onChange={ event => handleSetEditedGroup( { ...group, groupName: event.currentTarget.value } ) }
//             />
//             {/*
// 							!!!
// 								TODO: Скорее всего работает неправильно!!!
// 							!!!
// 							*/ }
//             <select
//               name='teacher'
//               value={ group.teacher }
//               onChange={ event => handleSetEditedGroup( { ...group, teacher: event.currentTarget.value } ) }
//             >
//               { teachers.map( item => (
//                 <option key={ item } value={ item }>{ item }</option>
//               ) ) }
//             </select>
//             <p>
//               { countStudents }
//               { ' ' }
//                     уч.
//             </p>
//           </>
//         }
//
//       </div>
//     )
// }
//
// export default GroupFormHeader

export {}