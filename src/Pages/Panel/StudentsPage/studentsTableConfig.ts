import { TStudent } from '../../../store/students/types'

export type TStudentTable = Omit<TStudent, 'last_name' | 'first_name' | 'patronymic'> & {
  FIO: string
}
