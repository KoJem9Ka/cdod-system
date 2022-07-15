export type GStudentQuery = {
  student: {
    id: string
    lastName: string
    firstName: string
    patronymic: string
    birthDate: string
    school: {
      name: string
      district: string
    }
    parent: {
      lastName: string
      firstName: string
      patronymic: string
      phoneNumber: string
      secondPhoneNumber: string
      email: string
      secondEmail: string
      applyingDate: string
    }
    info: {
      admissionDate: string
      contractState: string
      isCoursePaid: boolean
      isEquipmentPaid: boolean | null
      isGetRobot: boolean | null
      courseId: string
      course: { name: string }
      group: { name: string } | null
    }[]
  } | null
}