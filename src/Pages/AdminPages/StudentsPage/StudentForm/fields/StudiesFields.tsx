import { keys } from 'lodash'
import { FC, Fragment, useMemo } from 'react'
import styled from 'styled-components'
import Icon from '../../../../../assets/icons/Icons'
import { Btn, BtnMini } from '../../../../../components/UIKit/Btn'
import { Title } from '../../../../../components/UIKit/Forms'
import FormField from '../../../../../components/UIKit/Forms/FormField'
import { FlexRow } from '../../../../../components/UIKit/otherStyled'
import { useWatcher } from '../../../../../hooks/useWatcher'
import { GContractState, GStudentByIdQuery, useCoursesSmallListQuery } from '../../../../../other/generated'
import { contractStateDecoder, hexIsDark, IS_CLIENT_TEMP_ID, parseContractState } from '../../../../../other/helpers'
import { StForm, useStudentForm } from '../../../../../store/studentForm/hooks'

const StudyCardStyled = styled.div<{ contractState: GContractState }>`
  width: 100%;
  padding: 10px;
  background: ${p => parseContractState(p.contractState, 'color')};
  color: ${p => (hexIsDark(parseContractState(p.contractState, 'color')) ? 'white' : 'black')};
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;

    &:not(:first-child) {
      margin-top: 5px;
    }
  }
`

type StudyCardProps = {
  courseName: string
  contractState: GContractState
  groupName: string | undefined
  admissionDate: string
}
const StudyCard: FC<StudyCardProps> = ({ courseName, groupName, admissionDate, contractState }) => (
  <StudyCardStyled contractState={contractState}>
    <div>
      <span style={{ fontWeight: 600 }}>{courseName}</span>
      <span>{groupName || 'Без группы'}</span>
    </div>
    <div>
      <span>{parseContractState(contractState)}</span>
      <span>{admissionDate}</span>
    </div>
  </StudyCardStyled>
)

const btnStyle = { marginLeft: 'auto' }

type QCourse = GStudentByIdQuery['student']['info'][number]['course']

const handlerCourseNameGetId = (el: QCourse): number => el.id
const handlerCourseNameGetText = (el: QCourse): string => el.name

const handlerContractStateGetId = (el: GContractState): GContractState => el
const handlerContractStateGetText = (el: GContractState) => contractStateDecoder[el]
export const StudiesFields: FC = () => {
  const { studentModified: st, studentIsEdit: isEdit } = useStudentForm(s => [ s.studentModified, s.studentIsEdit ])
  if (st === null) return <></>
  const { data: { courses } = { courses: [] } } = useCoursesSmallListQuery()
  // const { data: { groups } = { groups: [] } } = useGroupsSmallListQuery()

  useWatcher(st.info.length, () => {
    const formBody = document.getElementById('StFormBody')
    if (formBody) formBody.scrollTop = formBody.scrollHeight
  })

  const currentCourses = useMemo(() => st.info.map(({ course: { id, name } }) => ({ id, name })), [ st.info ])
  const handlersCourse = useMemo(() => st.info.map((_, index) => (el: QCourse) => StForm.changeStudy({ index, data: { course: el } })), [ st.info.length ])
  const handlersContractState = useMemo(() => st.info.map((_, index) => (el: GContractState) => StForm.changeStudy({ index, data: { contractState: el } })), [ st.info.length ])
  const handlerAdmissionDate = useMemo(() => st.info.map((_, index) => (admissionDate: string) => StForm.changeStudy({ index, data: { admissionDate } })), [ st.info.length ])
  const handlerRemove = useMemo(() => st.info.map((_, index) => () => StForm.delStudy(index)), [ st.info.length ])

  return (
    <>
      {isEdit ? (
        <>
          <FlexRow>
            <Title>Обучение</Title>
            <Btn style={btnStyle} onClick={StForm.createStudy}>
              <Icon thumb='add' />
              Добавить
            </Btn>
          </FlexRow>
          {st.info.map((study, index) => (
            <Fragment key={`${study.course.id}_${study.attempt}`}>
              <Title>
                Курс {index + 1}
                <BtnMini as='span' onClick={handlerRemove[index]}>
                  <Icon height='10' thumb='del' />
                </BtnMini>
              </Title>
              <FormField
                caption='Название курса'
                element={currentCourses[index]}
                elements={courses}
                getId={handlerCourseNameGetId}
                getText={handlerCourseNameGetText}
                isEdit={isEdit && IS_CLIENT_TEMP_ID(study.attempt)}
                variant='select'
                default
                onSelect={handlersCourse[index]}
              />
              <FormField
                caption='Статус'
                element={study.contractState}
                elements={keys(contractStateDecoder)}
                getId={handlerContractStateGetId}
                getText={handlerContractStateGetText}
                isEdit={isEdit}
                variant='select'
                onSelect={handlersContractState[index]}
              />
              <FormField
                caption='Дата заявки'
                isEdit={isEdit}
                text={study.admissionDate}
                variant='date'
                onEdit={handlerAdmissionDate[index]}
              />
              {/* TODO: Здесь мб нужно сделать добавление в группу? */}
            </Fragment>
          ))}
        </>
      ) : (
        <>
          <Title>Обучение</Title>
          {st.info.map(study => (
            <StudyCard
              key={`${study.course.id}_${study.attempt}`}
              admissionDate={study.admissionDate}
              contractState={study.contractState}
              courseName={study.course.name}
              groupName={study.group?.name}
            />
          ))}
        </>
      )}
    </>
  )
}
