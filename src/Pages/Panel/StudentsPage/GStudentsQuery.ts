export type GStudentsQuery = {
  students: {
    id: string
    lastName: string
    patronymic: string
    birthDate: string
    firstName: string
    description: string | null
    parent: {
      phoneNumber: string
      secondPhoneNumber: string
      applyingDate: string
    }
    info: {
      isCoursePaid: boolean
      isEquipmentPaid: boolean | null
      admissionDate: string
      contractState: string
      course: { name: string }
      group: { name: string } | null
    }[]
  }[]
}