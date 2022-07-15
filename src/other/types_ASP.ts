// export type TStudent = {
//   id: number
//   lastName: string
//   firstName: string
//   patronymic?: string
//   birthDate: Date
//   description?: string
//   info: TStudyInfo[]
//   parent: TParent
//   parentId: number
//   school: TSchool
//   schoolId: number
// }
//
// export type TStudyInfo = {
//   group?: TGroup
//   course: TCourse
//   admissionDate: Date
//   contractState: string
//   contractStateId: number
//   courseId: number
//   isCoursePaid: boolean
//   isEquipmentPaid?: boolean
//   isGetRobot?: boolean
//   studentId: number
// }
//
// export type TGroup = {
//   course: TCourse
//   courseId: number
//   id: number
//   name: string
//   startDate: Date
//   studentsCount: number
//   teacher: TTeacher
//   teacherId: number
// }
//
// export type TCourse = {
//   durationInMonths: number
//   equipmentPriceWithRobot?: number
//   equipmentPriceWithoutRobot?: number
//   id: number
//   name: string
//   price: number
//   programFileUrl: string
// }
//
// export type TTeacher = {
//   address?: string
//   birthday?: Date
//   education?: string
//   email: string
//   firstName: string
//   id: number
//   inn?: string
//   isAdmin: Boolean
//   lastName: string
//   passportCode?: string
//   passportDate?: Date
//   passportIssue?: string
//   passportNo?: string
//   password: string
//   patronymic?: string
//   phoneNumber?: string
//   post: string
//   postId: number
//   snils?: string
//   workPlace: string
// }
//
// export type TParent = {
//   address?: string
//   birthday?: Date
//   education?: string
//   email: string
//   firstName: string
//   id: number
//   inn?: string
//   isAdmin: Boolean
//   lastName: string
//   passportCode?: string
//   passportDate?: Date
//   passportIssue?: string
//   passportNo?: string
//   password: string
//   patronymic?: string
//   phoneNumber?: string
//   secondEmail?: string
//   secondPhoneNumber?: string
//   signDate: Date
//   snils?: string
// }
//
// export type TSchool = {
//   district: TDistrict
//   id: number
//   name: string
//   students: TStudent[]
// }
//
// export type TDistrict = 'CENTRAL' | 'TRACTOR' | 'VOROSHILOVSKIY'
export {}