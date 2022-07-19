type Date = string

export type TStudent = {
  id: number
  lastName: string
  firstName: string
  patronymic: string
  birthDate: Date
  description?: string

  parent_id: number
  school_id: number
}

export type TSchool = {
  id: number
  name: string
  district: 'Central' | 'Dzerzhinsky' | 'Kirovsky' | 'Krasnoarmeisk' | 'Krasnooktyabrsky' | 'Soviet' | 'Tractorozavodsky' | 'Voroshilovsky'
}

export type ContractState = 'Consideration' | 'Studying' | 'Completed' | 'Left' | 'Excluded'
export type TStudyInfo = {
  admissionDate: Date
  contractState: ContractState
  isCoursePaid: boolean
  isEquipmentPaid?: boolean
  isGetRobot?: boolean

  student_id: number
  group_id: number
  course_id: number
}

export type TGroup = {
  id: number
  name: string
  startDate: Date

  course_id: number
  teacher_id: number

  studentsCount: number
}

export type TCourse = {
  id: number
  name: string
  price: number
  equipmentPriceWithRobot?: number
  equipmentPriceWithoutRobot?: number
}

export type TTeacher = {
  id: number
  lastName: string
  firstName: string
  patronymic: string
  phone: string
  email: string
  isAdmin: boolean
  post: string
}

export type TParent = {
  id: number
  lastName: string
  firstName: string
  patronymic: string
  phoneNumber: string
  email: string
  secondPhoneNumber: string
  secondEmail: string
  applyingDate: Date
}