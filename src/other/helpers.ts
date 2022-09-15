import dayjs from 'dayjs'
import { cloneDeep, compact, invert, isEqual, isNil, isObject, keys, mean, merge, uniq } from 'lodash'
import { GContractState, GInfoType, GParentInput, GParentType, GRelationType, GStudentByIdQuery } from './generated'

export const IS_DEV = process.env.NODE_ENV === 'development'

export const mergeState = <A, B>(a: A, b: B): A & B => merge(cloneDeep(a), b)

const onCycle = () => {
  const seen = new WeakSet()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (key: unknown, value: unknown) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) return
      seen.add(value)
    }
    return value
  }
}
export const getJSON = (obj?: object | null) => JSON.stringify(obj, onCycle())

export const formatDate = (date: string | null) => (date ? dayjs(date).format('YYYY-MM-DD') : null)

export const humanizeDate = (date: string | null, operation?: 'floor') => {
  const method = operation === 'floor' ? 'years' : 'days'
  return date && dayjs.duration(dayjs().diff(dayjs(date, 'YYYY-MM-DD'), method, false), method).humanize()
}

export const formatPhone = (phone: string): string => {
  const matching = phone.match(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/)
  if (matching?.length === 6) {
    const [ , , bbb, ccc, dd, ee ] = matching
    return `+7(${bbb})${ccc}-${dd}-${ee}`
  }
  return phone
}


//strJoinSpace удаляет из массива строк "null" и "undefined" и склеивает пробелами; полезно для склейки ФИО
export const strJoinSpace = (...strs: (string | null | undefined)[]) => compact(strs).join(' ')

export const strsNonFalsy = (...strings: (string | undefined)[]): boolean => strings.every(val => val !== '' && !isNil(val))

const hexToRGB = (hex: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let c: any
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) c = [ c[0], c[0], c[1], c[1], c[2], c[2] ]
    c = '0x' + c.join('')
    return [ (c >> 16) & 255, (c >> 8) & 255, c & 255 ]
  }
  throw new Error('Bad Hex')
}

export const hexToRgbA = (hex: string, opacity: number) => `rgba(${[ ...hexToRGB(hex), opacity || 1 ].join(',')})`

export const hexIsDark = (hex: string) => mean(uniq(hexToRGB(hex))) < 255 * 0.65

export type TRelationTypeKey = keyof typeof relationTypeDecoder
export type TRelationTypeString = typeof relationTypeDecoder[TRelationTypeKey]
export const relationTypeDecoder /*: Record<GRelationType, string>*/ = {
  [GRelationType.Mother]    : 'Мама',
  [GRelationType.Father]    : 'Папа',
  [GRelationType.Grandma]   : 'Бабушка',
  [GRelationType.Grandpa]   : 'Дедушка',
  [GRelationType.Brother]   : 'Брат',
  [GRelationType.Sister]    : 'Сестра',
  [GRelationType.Aunt]      : 'Тетя',
  [GRelationType.Uncle]     : 'Дядя',
  [GRelationType.Godparent] : 'Крёстный(ая)',
  [GRelationType.Guardian]  : 'Опекун',
  [GRelationType.Other]     : 'Родитель',
} as const
export const relationTypeEncoder = invert(relationTypeDecoder)

export const parseParentType = (relationType1: GParentType['type']): TRelationTypeString => (isNil(relationType1) ? 'Родитель' : relationTypeDecoder[relationType1])

export const contractStateDecoder = {
  [GContractState.Completed]     : 'Закончил',
  [GContractState.Consideration] : 'На рассмотрении',
  [GContractState.Rejected]      : 'Отказ',
  [GContractState.Studying]      : 'Учится',
  [GContractState.Left]          : 'Ушёл',
  [GContractState.Excluded]      : 'Исключён',
} as const
const contractStateColorizer = {
  [GContractState.Completed]     : '#1473E6',
  [GContractState.Consideration] : '#FD6F02',
  [GContractState.Rejected]      : '#CCCCCC',
  [GContractState.Studying]      : '#009132',
  [GContractState.Left]          : '#CCCCCC',
  [GContractState.Excluded]      : '#FFDBDD',
} as const
export const parseContractState = (contractState1: GInfoType['contractState'], who: 'text' | 'color' = 'text'): string => (who === 'text' ? contractStateDecoder[contractState1] : contractStateColorizer[contractState1])

// если поменять -1 на что то другое, то сломается запрос сохранения группы
export const NON_EXISTING_ID = -1
export const GEN_CLIENT_TEMP_ID = () => Date.now() // generated id > 1663016327000
export const IS_CLIENT_TEMP_ID = (id: number) => id > NON_EXISTING_LOW_ID || id === NON_EXISTING_ID
export const NON_EXISTING_LOW_ID = new Date(2000, 1, 1).getTime() // 949352400000

export const CREATE = {
  student : (): GStudentByIdQuery['student'] => ({
    id          : NON_EXISTING_ID,
    lastName    : null,
    firstName   : null,
    patronymic  : null,
    birthDate   : null,
    description : null,
    school      : null,
    info        : [],
    parent      : {
      id                : NON_EXISTING_ID,
      lastName          : null,
      firstName         : null,
      patronymic        : null,
      applyingDate      : dayjs().format('YYYY-MM-DD'),
      email             : null,
      phoneNumber       : null,
      relationType      : null,
      secondEmail       : null,
      secondPhoneNumber : null,
    },
  }),
  parent : (): GParentInput => ({
    lastName   : null,
    firstName  : null,
    patronymic : null,

    relationType : null,
    applyingDate : null,

    phoneNumber       : null,
    secondPhoneNumber : null,

    password    : null,
    email       : null,
    secondEmail : null,

    inn           : null,
    snils         : null,
    address       : null,
    birthday      : null,
    education     : null,
    passportNo    : null,
    passportCode  : null,
    passportDate  : null,
    passportIssue : null,
  }),
  // TODO: Переделать под отправной инпут привязки студента к курсу
  study : (): GStudentByIdQuery['student']['info'][number] => ({
    course : {
      id   : NON_EXISTING_ID,
      name : '',
    },
    attempt       : GEN_CLIENT_TEMP_ID(),
    contractState : GContractState.Consideration,
    isCoursePaid  : false,
    admissionDate : dayjs().format('YYYY-MM-DD'),
  }),
}

type TJwt = {
  emailaddress: string
  role: string
  exp: 1662018919
  iss: string
  aud: string
}
export const parseJwt = <T extends string | null>(token: T): T extends string ? TJwt : null => {
  if (token === null) return null as any
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  let jsonPayload = decodeURIComponent(
    window
        .atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
  )
  jsonPayload = jsonPayload.replace(/(?<=(,|{)").+?\/(?=[a-z]+")/g, '')
  return JSON.parse(jsonPayload)
}

type TReplaceDeep<O extends Record<string, any>, T, R> = {
  [key in keyof O]: O[key] extends T ? R : O[key] extends object ? TReplaceDeep<O[key], T, R> : O[key]
}

export const recursiveConvertObjValues = <O extends Record<string, any>, T, R>(obj: O, target: T, replacement: R): TReplaceDeep<O, T, R> => {
  const obj1 = { ...obj }
  for (const key of keys(obj1)) {
    if (!Object.hasOwn(obj1, key)) continue
    if (isEqual(obj1[key], target)) obj1[key] = replacement as any
    else if (isObject(obj1[key])) obj1[key] = recursiveConvertObjValues(obj1[key], target, replacement) as any
  }
  return obj1
}

export const enumerate = <T>(arr: T[]) => arr.reduce<[T, number][]>((rez, el, i) => [ ...rez, [ el, i ] ], [])
