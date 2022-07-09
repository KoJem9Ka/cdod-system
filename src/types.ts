export type TStudent = {
  id: string
  last_name: string
  first_name: string
  patronymic: string
  birth_date: Date
  course: string
  group: string
  phone_number: string
  notes?: string
  paid: boolean
  materials_paid?: boolean
  request_date: Date
  contract_status: 'Выпущен' | 'Учится'
}