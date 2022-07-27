import React, { FC }      from 'react'
import CustomSelect       from '../../../../../components/DropDown/CustomSelect'
import {
  GSchoolType,
  useStudentFormQuery
}                         from '../../../../../other/generated'
import { useStudentForm } from '../../../../../store/studentsForm/hooks'
import {
  Caption,
  TextLine
}                         from '../../../../../components/Forms'



export const SchoolField: FC = () => {
  const { isEdit, studentOriginal, studentModified, changeStudent } = useStudentForm()
  const {
    loading,
    data: { schools } = { schools: [] },
  } = useStudentFormQuery()

  return (
    <>
      <Caption>Школа</Caption>
      { isEdit
        ? <CustomSelect
          getOptionLabel={ opt => opt.name }
          getOptionValue={ opt => opt.id.toString() }
          isLoading={ loading }
          options={ schools }
          value={ studentModified?.school }
          onChange={ newValue => changeStudent( { school: newValue as GSchoolType } ) }
        />
        : <TextLine>{ studentOriginal?.school?.name }</TextLine>
      }
    </>
  )
}