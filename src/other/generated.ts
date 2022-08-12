import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Date` scalar represents an ISO-8601 compliant date type. */
  Date: string;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: string;
  /** The `TimeSpan` scalar represents an ISO-8601 compliant duration type. */
  TimeSpan: string;
};

export const enum GApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER'
};

export type GAttendanceType = {
  lesson: GLessonType;
  lessonId: Scalars['Int'];
  mark: Scalars['Int'];
  note: Scalars['String'];
  status: GStatus;
  student: GStudentType;
  studentId: Scalars['Int'];
};

export type GAttendanceTypeFilterInput = {
  and: InputMaybe<Array<GAttendanceTypeFilterInput>>;
  lessonId: InputMaybe<GComparableInt32OperationFilterInput>;
  mark: InputMaybe<GComparableInt32OperationFilterInput>;
  note: InputMaybe<GStringOperationFilterInput>;
  or: InputMaybe<Array<GAttendanceTypeFilterInput>>;
  status: InputMaybe<GStatusOperationFilterInput>;
  studentId: InputMaybe<GComparableInt32OperationFilterInput>;
};

export type GAttendanceTypeSortInput = {
  lessonId: InputMaybe<GSortEnumType>;
  mark: InputMaybe<GSortEnumType>;
  note: InputMaybe<GSortEnumType>;
  status: InputMaybe<GSortEnumType>;
  studentId: InputMaybe<GSortEnumType>;
};

export type GBooleanOperationFilterInput = {
  eq: InputMaybe<Scalars['Boolean']>;
  neq: InputMaybe<Scalars['Boolean']>;
};

export type GComparableDateOnlyOperationFilterInput = {
  eq: InputMaybe<Scalars['Date']>;
  gt: InputMaybe<Scalars['Date']>;
  gte: InputMaybe<Scalars['Date']>;
  in: InputMaybe<Array<Scalars['Date']>>;
  lt: InputMaybe<Scalars['Date']>;
  lte: InputMaybe<Scalars['Date']>;
  neq: InputMaybe<Scalars['Date']>;
  ngt: InputMaybe<Scalars['Date']>;
  ngte: InputMaybe<Scalars['Date']>;
  nin: InputMaybe<Array<Scalars['Date']>>;
  nlt: InputMaybe<Scalars['Date']>;
  nlte: InputMaybe<Scalars['Date']>;
};

export type GComparableDateTimeOperationFilterInput = {
  eq: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<Scalars['DateTime']>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  neq: InputMaybe<Scalars['DateTime']>;
  ngt: InputMaybe<Scalars['DateTime']>;
  ngte: InputMaybe<Scalars['DateTime']>;
  nin: InputMaybe<Array<Scalars['DateTime']>>;
  nlt: InputMaybe<Scalars['DateTime']>;
  nlte: InputMaybe<Scalars['DateTime']>;
};

export type GComparableInt32OperationFilterInput = {
  eq: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<Scalars['Int']>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  neq: InputMaybe<Scalars['Int']>;
  ngt: InputMaybe<Scalars['Int']>;
  ngte: InputMaybe<Scalars['Int']>;
  nin: InputMaybe<Array<Scalars['Int']>>;
  nlt: InputMaybe<Scalars['Int']>;
  nlte: InputMaybe<Scalars['Int']>;
};

export type GComparableNullableOfDateOnlyOperationFilterInput = {
  eq: InputMaybe<Scalars['Date']>;
  gt: InputMaybe<Scalars['Date']>;
  gte: InputMaybe<Scalars['Date']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt: InputMaybe<Scalars['Date']>;
  lte: InputMaybe<Scalars['Date']>;
  neq: InputMaybe<Scalars['Date']>;
  ngt: InputMaybe<Scalars['Date']>;
  ngte: InputMaybe<Scalars['Date']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nlt: InputMaybe<Scalars['Date']>;
  nlte: InputMaybe<Scalars['Date']>;
};

export type GComparableNullableOfDoubleOperationFilterInput = {
  eq: InputMaybe<Scalars['Float']>;
  gt: InputMaybe<Scalars['Float']>;
  gte: InputMaybe<Scalars['Float']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt: InputMaybe<Scalars['Float']>;
  lte: InputMaybe<Scalars['Float']>;
  neq: InputMaybe<Scalars['Float']>;
  ngt: InputMaybe<Scalars['Float']>;
  ngte: InputMaybe<Scalars['Float']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nlt: InputMaybe<Scalars['Float']>;
  nlte: InputMaybe<Scalars['Float']>;
};

export type GComparableNullableOfInt32OperationFilterInput = {
  eq: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  neq: InputMaybe<Scalars['Int']>;
  ngt: InputMaybe<Scalars['Int']>;
  ngte: InputMaybe<Scalars['Int']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nlt: InputMaybe<Scalars['Int']>;
  nlte: InputMaybe<Scalars['Int']>;
};

export type GComparableTimeOnlyOperationFilterInput = {
  eq: InputMaybe<Scalars['TimeSpan']>;
  gt: InputMaybe<Scalars['TimeSpan']>;
  gte: InputMaybe<Scalars['TimeSpan']>;
  in: InputMaybe<Array<Scalars['TimeSpan']>>;
  lt: InputMaybe<Scalars['TimeSpan']>;
  lte: InputMaybe<Scalars['TimeSpan']>;
  neq: InputMaybe<Scalars['TimeSpan']>;
  ngt: InputMaybe<Scalars['TimeSpan']>;
  ngte: InputMaybe<Scalars['TimeSpan']>;
  nin: InputMaybe<Array<Scalars['TimeSpan']>>;
  nlt: InputMaybe<Scalars['TimeSpan']>;
  nlte: InputMaybe<Scalars['TimeSpan']>;
};

export const enum GContractState {
  Completed = 'COMPLETED',
  Consideration = 'CONSIDERATION',
  Excluded = 'EXCLUDED',
  Left = 'LEFT',
  Rejected = 'REJECTED',
  Studying = 'STUDYING'
};

export type GCourseCreateInput = {
  color: InputMaybe<Scalars['String']>;
  coursePrice: InputMaybe<Scalars['Float']>;
  durationInMonths: InputMaybe<Scalars['Int']>;
  equipmentPriceWithRobot: InputMaybe<Scalars['Float']>;
  equipmentPriceWithoutRobot: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  programId: InputMaybe<Scalars['Int']>;
  svgIconColor: InputMaybe<Scalars['String']>;
};

export type GCourseType = {
  color: Maybe<Scalars['String']>;
  durationInMonths: Maybe<Scalars['Int']>;
  equipmentPriceWithRobot: Maybe<Scalars['Float']>;
  equipmentPriceWithoutRobot: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  price: Maybe<Scalars['Float']>;
  programId: Maybe<Scalars['Int']>;
  svgIconUrl: Maybe<Scalars['String']>;
};

export type GCourseTypeFilterInput = {
  and: InputMaybe<Array<GCourseTypeFilterInput>>;
  color: InputMaybe<GStringOperationFilterInput>;
  durationInMonths: InputMaybe<GComparableNullableOfInt32OperationFilterInput>;
  equipmentPriceWithRobot: InputMaybe<GComparableNullableOfDoubleOperationFilterInput>;
  equipmentPriceWithoutRobot: InputMaybe<GComparableNullableOfDoubleOperationFilterInput>;
  id: InputMaybe<GComparableInt32OperationFilterInput>;
  name: InputMaybe<GStringOperationFilterInput>;
  or: InputMaybe<Array<GCourseTypeFilterInput>>;
  price: InputMaybe<GComparableNullableOfDoubleOperationFilterInput>;
  programId: InputMaybe<GComparableNullableOfInt32OperationFilterInput>;
  svgIconUrl: InputMaybe<GStringOperationFilterInput>;
};

export type GCourseTypeSortInput = {
  color: InputMaybe<GSortEnumType>;
  durationInMonths: InputMaybe<GSortEnumType>;
  equipmentPriceWithRobot: InputMaybe<GSortEnumType>;
  equipmentPriceWithoutRobot: InputMaybe<GSortEnumType>;
  id: InputMaybe<GSortEnumType>;
  name: InputMaybe<GSortEnumType>;
  price: InputMaybe<GSortEnumType>;
  programId: InputMaybe<GSortEnumType>;
  svgIconUrl: InputMaybe<GSortEnumType>;
};

export type GCourseUpdateInput = {
  color: InputMaybe<Scalars['String']>;
  coursePrice: InputMaybe<Scalars['Float']>;
  durationInMonths: InputMaybe<Scalars['Int']>;
  equipmentPriceWithRobot: InputMaybe<Scalars['Float']>;
  equipmentPriceWithoutRobot: InputMaybe<Scalars['Float']>;
  id: Scalars['Int'];
  name: InputMaybe<Scalars['String']>;
  programId: InputMaybe<Scalars['Int']>;
  svgIconColor: InputMaybe<Scalars['String']>;
};

export const enum GDistrict {
  Central = 'CENTRAL',
  Tractor = 'TRACTOR',
  Voroshilovskiy = 'VOROSHILOVSKIY'
};

export type GGroupType = {
  course: GCourseType;
  courseId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  startDate: Scalars['Date'];
  studentsCount: Scalars['Int'];
  teacher: GTeacherType;
  teacherId: Scalars['Int'];
};

export type GGroupTypeFilterInput = {
  and: InputMaybe<Array<GGroupTypeFilterInput>>;
  courseId: InputMaybe<GComparableInt32OperationFilterInput>;
  id: InputMaybe<GComparableInt32OperationFilterInput>;
  name: InputMaybe<GStringOperationFilterInput>;
  or: InputMaybe<Array<GGroupTypeFilterInput>>;
  startDate: InputMaybe<GComparableDateOnlyOperationFilterInput>;
  teacherId: InputMaybe<GComparableInt32OperationFilterInput>;
};

export type GGroupTypeSortInput = {
  courseId: InputMaybe<GSortEnumType>;
  id: InputMaybe<GSortEnumType>;
  name: InputMaybe<GSortEnumType>;
  startDate: InputMaybe<GSortEnumType>;
  teacherId: InputMaybe<GSortEnumType>;
};

export type GInfoType = {
  admissionDate: Scalars['Date'];
  attempt: Scalars['Int'];
  contractState: GContractState;
  course: GCourseType;
  courseId: Scalars['Int'];
  group: Maybe<GGroupType>;
  isCoursePaid: Scalars['Boolean'];
  isEquipmentPaid: Maybe<Scalars['Boolean']>;
  isGetRobot: Maybe<Scalars['Boolean']>;
  studentId: Scalars['Int'];
};

export type GLessonType = {
  classRoom: Scalars['String'];
  duration: Scalars['Int'];
  group: GGroupType;
  groupId: Scalars['Int'];
  homework: Scalars['String'];
  id: Scalars['Int'];
  startDateTime: Scalars['DateTime'];
  topic: Scalars['String'];
};

export type GLessonTypeFilterInput = {
  and: InputMaybe<Array<GLessonTypeFilterInput>>;
  classRoom: InputMaybe<GStringOperationFilterInput>;
  duration: InputMaybe<GComparableInt32OperationFilterInput>;
  groupId: InputMaybe<GComparableInt32OperationFilterInput>;
  homework: InputMaybe<GStringOperationFilterInput>;
  id: InputMaybe<GComparableInt32OperationFilterInput>;
  or: InputMaybe<Array<GLessonTypeFilterInput>>;
  startDateTime: InputMaybe<GComparableDateTimeOperationFilterInput>;
  topic: InputMaybe<GStringOperationFilterInput>;
};

export type GLessonTypeSortInput = {
  classRoom: InputMaybe<GSortEnumType>;
  duration: InputMaybe<GSortEnumType>;
  groupId: InputMaybe<GSortEnumType>;
  homework: InputMaybe<GSortEnumType>;
  id: InputMaybe<GSortEnumType>;
  startDateTime: InputMaybe<GSortEnumType>;
  topic: InputMaybe<GSortEnumType>;
};

export type GLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type GMutation = {
  courseCreateCourse: GCourseType;
  courseUpdateMany: Scalars['Boolean'];
  createSchool: GSchoolType;
  login: Scalars['String'];
  parentCreate: GParentType;
  parentDeleteMany: Scalars['Boolean'];
  parentUpdate: GParentType;
  schoolDeleteMany: Scalars['Boolean'];
  schoolUpdateMany: Scalars['Boolean'];
  studentCreate: GStudentType;
  studentDeleteMany: Scalars['Boolean'];
  studentUpdateMany: Scalars['Boolean'];
  updateFromGoogleTable: Scalars['Boolean'];
};


export type GMutationCourseCreateCourseArgs = {
  course: GCourseCreateInput;
};


export type GMutationCourseUpdateManyArgs = {
  courses: Array<GCourseUpdateInput>;
};


export type GMutationCreateSchoolArgs = {
  school: GSchoolCreateInput;
};


export type GMutationLoginArgs = {
  user: GLoginInput;
};


export type GMutationParentCreateArgs = {
  parent: GParentInput;
};


export type GMutationParentDeleteManyArgs = {
  parentsIds: Array<Scalars['Int']>;
};


export type GMutationParentUpdateArgs = {
  id: Scalars['Int'];
  parent: GParentInput;
};


export type GMutationSchoolDeleteManyArgs = {
  schoolIds: Array<Scalars['Int']>;
};


export type GMutationSchoolUpdateManyArgs = {
  schools: Array<GSchoolUpdateInput>;
};


export type GMutationStudentCreateArgs = {
  student: GStudentCreateInput;
};


export type GMutationStudentDeleteManyArgs = {
  studentIds: Array<Scalars['Int']>;
};


export type GMutationStudentUpdateManyArgs = {
  students: Array<GStudentUpdateInput>;
};

export type GNullableOfDistrictOperationFilterInput = {
  eq: InputMaybe<GDistrict>;
  in: InputMaybe<Array<InputMaybe<GDistrict>>>;
  neq: InputMaybe<GDistrict>;
  nin: InputMaybe<Array<InputMaybe<GDistrict>>>;
};

export type GNullableOfRelationTypeOperationFilterInput = {
  eq: InputMaybe<GRelationType>;
  in: InputMaybe<Array<InputMaybe<GRelationType>>>;
  neq: InputMaybe<GRelationType>;
  nin: InputMaybe<Array<InputMaybe<GRelationType>>>;
};

export type GParentInput = {
  address: InputMaybe<Scalars['String']>;
  applyingDate: InputMaybe<Scalars['Date']>;
  birthday: InputMaybe<Scalars['Date']>;
  education: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
  firstname: InputMaybe<Scalars['String']>;
  inn: InputMaybe<Scalars['String']>;
  lastname: InputMaybe<Scalars['String']>;
  passportCode: InputMaybe<Scalars['String']>;
  passportDate: InputMaybe<Scalars['Date']>;
  passportIssue: InputMaybe<Scalars['String']>;
  passportNo: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
  patronymic: InputMaybe<Scalars['String']>;
  phoneNumber: InputMaybe<Scalars['String']>;
  relationType: InputMaybe<GRelationType>;
  secondEmail: InputMaybe<Scalars['String']>;
  secondPhoneNumber: InputMaybe<Scalars['String']>;
  snils: InputMaybe<Scalars['String']>;
};

export type GParentType = {
  address: Maybe<Scalars['String']>;
  applyingDate: Maybe<Scalars['Date']>;
  birthday: Maybe<Scalars['Date']>;
  education: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  inn: Maybe<Scalars['String']>;
  isAdmin: Scalars['Boolean'];
  lastName: Maybe<Scalars['String']>;
  passportCode: Maybe<Scalars['String']>;
  passportDate: Maybe<Scalars['Date']>;
  passportIssue: Maybe<Scalars['String']>;
  passportNo: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  patronymic: Maybe<Scalars['String']>;
  phoneNumber: Maybe<Scalars['String']>;
  secondEmail: Maybe<Scalars['String']>;
  secondPhoneNumber: Maybe<Scalars['String']>;
  snils: Maybe<Scalars['String']>;
  type: Maybe<GRelationType>;
};

export type GParentTypeFilterInput = {
  address: InputMaybe<GStringOperationFilterInput>;
  and: InputMaybe<Array<GParentTypeFilterInput>>;
  applyingDate: InputMaybe<GComparableNullableOfDateOnlyOperationFilterInput>;
  birthday: InputMaybe<GComparableNullableOfDateOnlyOperationFilterInput>;
  education: InputMaybe<GStringOperationFilterInput>;
  email: InputMaybe<GStringOperationFilterInput>;
  firstName: InputMaybe<GStringOperationFilterInput>;
  id: InputMaybe<GComparableInt32OperationFilterInput>;
  inn: InputMaybe<GStringOperationFilterInput>;
  isAdmin: InputMaybe<GBooleanOperationFilterInput>;
  lastName: InputMaybe<GStringOperationFilterInput>;
  or: InputMaybe<Array<GParentTypeFilterInput>>;
  passportCode: InputMaybe<GStringOperationFilterInput>;
  passportDate: InputMaybe<GComparableNullableOfDateOnlyOperationFilterInput>;
  passportIssue: InputMaybe<GStringOperationFilterInput>;
  passportNo: InputMaybe<GStringOperationFilterInput>;
  password: InputMaybe<GStringOperationFilterInput>;
  patronymic: InputMaybe<GStringOperationFilterInput>;
  phoneNumber: InputMaybe<GStringOperationFilterInput>;
  secondEmail: InputMaybe<GStringOperationFilterInput>;
  secondPhoneNumber: InputMaybe<GStringOperationFilterInput>;
  snils: InputMaybe<GStringOperationFilterInput>;
  type: InputMaybe<GNullableOfRelationTypeOperationFilterInput>;
};

export type GParentTypeSortInput = {
  address: InputMaybe<GSortEnumType>;
  applyingDate: InputMaybe<GSortEnumType>;
  birthday: InputMaybe<GSortEnumType>;
  education: InputMaybe<GSortEnumType>;
  email: InputMaybe<GSortEnumType>;
  firstName: InputMaybe<GSortEnumType>;
  id: InputMaybe<GSortEnumType>;
  inn: InputMaybe<GSortEnumType>;
  isAdmin: InputMaybe<GSortEnumType>;
  lastName: InputMaybe<GSortEnumType>;
  passportCode: InputMaybe<GSortEnumType>;
  passportDate: InputMaybe<GSortEnumType>;
  passportIssue: InputMaybe<GSortEnumType>;
  passportNo: InputMaybe<GSortEnumType>;
  password: InputMaybe<GSortEnumType>;
  patronymic: InputMaybe<GSortEnumType>;
  phoneNumber: InputMaybe<GSortEnumType>;
  secondEmail: InputMaybe<GSortEnumType>;
  secondPhoneNumber: InputMaybe<GSortEnumType>;
  snils: InputMaybe<GSortEnumType>;
  type: InputMaybe<GSortEnumType>;
};

export type GPostType = {
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type GPostTypeFilterInput = {
  and: InputMaybe<Array<GPostTypeFilterInput>>;
  id: InputMaybe<GComparableInt32OperationFilterInput>;
  name: InputMaybe<GStringOperationFilterInput>;
  or: InputMaybe<Array<GPostTypeFilterInput>>;
};

export type GPostTypeSortInput = {
  id: InputMaybe<GSortEnumType>;
  name: InputMaybe<GSortEnumType>;
};

export type GQuery = {
  attendances: Array<GAttendanceType>;
  course: GCourseType;
  courses: Array<GCourseType>;
  group: GGroupType;
  groups: Array<GGroupType>;
  lesson: GLessonType;
  lessons: Array<GLessonType>;
  parent: GParentType;
  parents: Array<GParentType>;
  post: GPostType;
  posts: Array<GPostType>;
  school: GSchoolType;
  schools: Array<GSchoolType>;
  student: GStudentType;
  students: Array<GStudentType>;
  teacher: GTeacherType;
  teachers: Array<GTeacherType>;
  teachersWorkTime: Array<GTeachersWorkTimeType>;
};


export type GQueryAttendancesArgs = {
  courseId: InputMaybe<Scalars['Int']>;
  lessonId: InputMaybe<Scalars['Int']>;
  order: InputMaybe<Array<GAttendanceTypeSortInput>>;
  studentId: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GAttendanceTypeFilterInput>;
};


export type GQueryCourseArgs = {
  id: Scalars['Int'];
};


export type GQueryCoursesArgs = {
  order: InputMaybe<Array<GCourseTypeSortInput>>;
  where: InputMaybe<GCourseTypeFilterInput>;
};


export type GQueryGroupArgs = {
  id: Scalars['Int'];
};


export type GQueryGroupsArgs = {
  courseId: InputMaybe<Scalars['Int']>;
  order: InputMaybe<Array<GGroupTypeSortInput>>;
  where: InputMaybe<GGroupTypeFilterInput>;
};


export type GQueryLessonArgs = {
  id: Scalars['Int'];
};


export type GQueryLessonsArgs = {
  groupId: InputMaybe<Scalars['Int']>;
  order: InputMaybe<Array<GLessonTypeSortInput>>;
  studentId: InputMaybe<Scalars['Int']>;
  teacherId: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GLessonTypeFilterInput>;
};


export type GQueryParentArgs = {
  id: Scalars['Int'];
};


export type GQueryParentsArgs = {
  order: InputMaybe<Array<GParentTypeSortInput>>;
  where: InputMaybe<GParentTypeFilterInput>;
};


export type GQueryPostArgs = {
  id: Scalars['Int'];
};


export type GQueryPostsArgs = {
  order: InputMaybe<Array<GPostTypeSortInput>>;
  where: InputMaybe<GPostTypeFilterInput>;
};


export type GQuerySchoolArgs = {
  id: Scalars['Int'];
};


export type GQuerySchoolsArgs = {
  order: InputMaybe<Array<GSchoolTypeSortInput>>;
  where: InputMaybe<GSchoolTypeFilterInput>;
};


export type GQueryStudentArgs = {
  id: Scalars['Int'];
};


export type GQueryStudentsArgs = {
  courseId: InputMaybe<Scalars['Int']>;
  groupId: InputMaybe<Scalars['Int']>;
  order: InputMaybe<Array<GStudentTypeSortInput>>;
  parentId: InputMaybe<Scalars['Int']>;
  schoolId: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GStudentTypeFilterInput>;
};


export type GQueryTeacherArgs = {
  groupId: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['Int']>;
};


export type GQueryTeachersArgs = {
  lessonId: InputMaybe<Scalars['Int']>;
  order: InputMaybe<Array<GTeacherTypeSortInput>>;
  where: InputMaybe<GTeacherTypeFilterInput>;
};


export type GQueryTeachersWorkTimeArgs = {
  lessonId: InputMaybe<Scalars['Int']>;
  order: InputMaybe<Array<GTeachersWorkTimeTypeSortInput>>;
  teacherId: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GTeachersWorkTimeTypeFilterInput>;
};

export const enum GRelationType {
  Aunt = 'AUNT',
  Brother = 'BROTHER',
  Father = 'FATHER',
  Godparent = 'GODPARENT',
  Grandma = 'GRANDMA',
  Grandpa = 'GRANDPA',
  Guardian = 'GUARDIAN',
  Mother = 'MOTHER',
  Other = 'OTHER',
  Sister = 'SISTER',
  Uncle = 'UNCLE'
};

export type GSchoolCreateInput = {
  district: InputMaybe<GDistrict>;
  name: Scalars['String'];
};

export type GSchoolType = {
  district: Maybe<GDistrict>;
  id: Scalars['Int'];
  name: Scalars['String'];
  students: Array<GStudentType>;
};

export type GSchoolTypeFilterInput = {
  and: InputMaybe<Array<GSchoolTypeFilterInput>>;
  district: InputMaybe<GNullableOfDistrictOperationFilterInput>;
  id: InputMaybe<GComparableInt32OperationFilterInput>;
  name: InputMaybe<GStringOperationFilterInput>;
  or: InputMaybe<Array<GSchoolTypeFilterInput>>;
};

export type GSchoolTypeSortInput = {
  district: InputMaybe<GSortEnumType>;
  id: InputMaybe<GSortEnumType>;
  name: InputMaybe<GSortEnumType>;
};

export type GSchoolUpdateInput = {
  district: InputMaybe<GDistrict>;
  id: Scalars['Int'];
  name: InputMaybe<Scalars['String']>;
};

export const enum GSortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
};

export const enum GStatus {
  Absent = 'ABSENT',
  AbsentValidReason = 'ABSENT_VALID_REASON',
  Attended = 'ATTENDED'
};

export type GStatusOperationFilterInput = {
  eq: InputMaybe<GStatus>;
  in: InputMaybe<Array<GStatus>>;
  neq: InputMaybe<GStatus>;
  nin: InputMaybe<Array<GStatus>>;
};

export type GStringOperationFilterInput = {
  and: InputMaybe<Array<GStringOperationFilterInput>>;
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  eq: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains: InputMaybe<Scalars['String']>;
  nendsWith: InputMaybe<Scalars['String']>;
  neq: InputMaybe<Scalars['String']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith: InputMaybe<Scalars['String']>;
  or: InputMaybe<Array<GStringOperationFilterInput>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type GStudentCreateInput = {
  birthDate: InputMaybe<Scalars['Date']>;
  description: InputMaybe<Scalars['String']>;
  firstName: InputMaybe<Scalars['String']>;
  lastName: InputMaybe<Scalars['String']>;
  parentId: Scalars['Int'];
  patronymic: InputMaybe<Scalars['String']>;
  schoolId: InputMaybe<Scalars['Int']>;
};

export type GStudentType = {
  birthDate: Maybe<Scalars['Date']>;
  description: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  info: Array<GInfoType>;
  lastName: Maybe<Scalars['String']>;
  parent: GParentType;
  parentId: Scalars['Int'];
  patronymic: Maybe<Scalars['String']>;
  school: Maybe<GSchoolType>;
  schoolId: Maybe<Scalars['Int']>;
};

export type GStudentTypeFilterInput = {
  and: InputMaybe<Array<GStudentTypeFilterInput>>;
  birthDate: InputMaybe<GComparableNullableOfDateOnlyOperationFilterInput>;
  description: InputMaybe<GStringOperationFilterInput>;
  firstName: InputMaybe<GStringOperationFilterInput>;
  id: InputMaybe<GComparableInt32OperationFilterInput>;
  lastName: InputMaybe<GStringOperationFilterInput>;
  or: InputMaybe<Array<GStudentTypeFilterInput>>;
  parentId: InputMaybe<GComparableInt32OperationFilterInput>;
  patronymic: InputMaybe<GStringOperationFilterInput>;
  schoolId: InputMaybe<GComparableNullableOfInt32OperationFilterInput>;
};

export type GStudentTypeSortInput = {
  birthDate: InputMaybe<GSortEnumType>;
  description: InputMaybe<GSortEnumType>;
  firstName: InputMaybe<GSortEnumType>;
  id: InputMaybe<GSortEnumType>;
  lastName: InputMaybe<GSortEnumType>;
  parentId: InputMaybe<GSortEnumType>;
  patronymic: InputMaybe<GSortEnumType>;
  schoolId: InputMaybe<GSortEnumType>;
};

export type GStudentUpdateInput = {
  birthDate: InputMaybe<Scalars['Date']>;
  description: InputMaybe<Scalars['String']>;
  firstName: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName: InputMaybe<Scalars['String']>;
  parentId: InputMaybe<Scalars['Int']>;
  patronymic: InputMaybe<Scalars['String']>;
  schoolId: InputMaybe<Scalars['Int']>;
};

export type GTeacherType = {
  address: Maybe<Scalars['String']>;
  birthday: Maybe<Scalars['Date']>;
  education: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  inn: Maybe<Scalars['String']>;
  isAdmin: Scalars['Boolean'];
  lastName: Maybe<Scalars['String']>;
  passportCode: Maybe<Scalars['String']>;
  passportDate: Maybe<Scalars['Date']>;
  passportIssue: Maybe<Scalars['String']>;
  passportNo: Maybe<Scalars['String']>;
  password: Scalars['String'];
  patronymic: Maybe<Scalars['String']>;
  phoneNumber: Maybe<Scalars['String']>;
  post: Maybe<Scalars['String']>;
  postId: Maybe<Scalars['Int']>;
  snils: Maybe<Scalars['String']>;
  workPlace: Scalars['String'];
};

export type GTeacherTypeFilterInput = {
  address: InputMaybe<GStringOperationFilterInput>;
  and: InputMaybe<Array<GTeacherTypeFilterInput>>;
  birthday: InputMaybe<GComparableNullableOfDateOnlyOperationFilterInput>;
  education: InputMaybe<GStringOperationFilterInput>;
  email: InputMaybe<GStringOperationFilterInput>;
  firstName: InputMaybe<GStringOperationFilterInput>;
  id: InputMaybe<GComparableInt32OperationFilterInput>;
  inn: InputMaybe<GStringOperationFilterInput>;
  isAdmin: InputMaybe<GBooleanOperationFilterInput>;
  lastName: InputMaybe<GStringOperationFilterInput>;
  or: InputMaybe<Array<GTeacherTypeFilterInput>>;
  passportCode: InputMaybe<GStringOperationFilterInput>;
  passportDate: InputMaybe<GComparableNullableOfDateOnlyOperationFilterInput>;
  passportIssue: InputMaybe<GStringOperationFilterInput>;
  passportNo: InputMaybe<GStringOperationFilterInput>;
  password: InputMaybe<GStringOperationFilterInput>;
  patronymic: InputMaybe<GStringOperationFilterInput>;
  phoneNumber: InputMaybe<GStringOperationFilterInput>;
  postId: InputMaybe<GComparableNullableOfInt32OperationFilterInput>;
  snils: InputMaybe<GStringOperationFilterInput>;
  workPlace: InputMaybe<GStringOperationFilterInput>;
};

export type GTeacherTypeSortInput = {
  address: InputMaybe<GSortEnumType>;
  birthday: InputMaybe<GSortEnumType>;
  education: InputMaybe<GSortEnumType>;
  email: InputMaybe<GSortEnumType>;
  firstName: InputMaybe<GSortEnumType>;
  id: InputMaybe<GSortEnumType>;
  inn: InputMaybe<GSortEnumType>;
  isAdmin: InputMaybe<GSortEnumType>;
  lastName: InputMaybe<GSortEnumType>;
  passportCode: InputMaybe<GSortEnumType>;
  passportDate: InputMaybe<GSortEnumType>;
  passportIssue: InputMaybe<GSortEnumType>;
  passportNo: InputMaybe<GSortEnumType>;
  password: InputMaybe<GSortEnumType>;
  patronymic: InputMaybe<GSortEnumType>;
  phoneNumber: InputMaybe<GSortEnumType>;
  postId: InputMaybe<GSortEnumType>;
  snils: InputMaybe<GSortEnumType>;
  workPlace: InputMaybe<GSortEnumType>;
};

export type GTeachersWorkTimeType = {
  lesson: GLessonType;
  lessonId: Scalars['Int'];
  teacher: GTeacherType;
  teacherId: Scalars['Int'];
  workTime: Scalars['TimeSpan'];
};

export type GTeachersWorkTimeTypeFilterInput = {
  and: InputMaybe<Array<GTeachersWorkTimeTypeFilterInput>>;
  lessonId: InputMaybe<GComparableInt32OperationFilterInput>;
  or: InputMaybe<Array<GTeachersWorkTimeTypeFilterInput>>;
  teacherId: InputMaybe<GComparableInt32OperationFilterInput>;
  workTime: InputMaybe<GComparableTimeOnlyOperationFilterInput>;
};

export type GTeachersWorkTimeTypeSortInput = {
  lessonId: InputMaybe<GSortEnumType>;
  teacherId: InputMaybe<GSortEnumType>;
  workTime: InputMaybe<GSortEnumType>;
};

export type GCourseByIdQueryVariables = Exact<{
  courseId: Scalars['Int'];
}>;


export type GCourseByIdQuery = { course: { id: number, name: string, price: number | null, programId: number | null, durationInMonths: number | null, equipmentPriceWithRobot: number | null, equipmentPriceWithoutRobot: number | null, color: string | null, svgIconUrl: string | null } };

export type GCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GCoursesQuery = { courses: Array<{ id: number, name: string, price: number | null, programId: number | null, durationInMonths: number | null, equipmentPriceWithRobot: number | null, equipmentPriceWithoutRobot: number | null, color: string | null, svgIconUrl: string | null }> };

export type GGroupByIdQueryVariables = Exact<{
  groupID: Scalars['Int'];
}>;


export type GGroupByIdQuery = { group: { id: number, name: string, course: { name: string }, teacher: { lastName: string | null, firstName: string | null, patronymic: string | null } }, students: Array<{ id: number, firstName: string | null, lastName: string | null, patronymic: string | null, birthDate: string | null }> };

export type GGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GGroupsQuery = { groups: Array<{ id: number, name: string, startDate: string, studentsCount: number, course: { name: string }, teacher: { lastName: string | null, firstName: string | null, patronymic: string | null } }> };

export type GAllStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GAllStudentsQuery = { students: Array<{ id: number, lastName: string | null, firstName: string | null, patronymic: string | null, birthDate: string | null, description: string | null, parent: { id: number, firstName: string | null, lastName: string | null, patronymic: string | null, phoneNumber: string | null, secondPhoneNumber: string | null, email: string | null, secondEmail: string | null, applyingDate: string | null }, info: Array<{ attempt: number, admissionDate: string, contractState: GContractState, isCoursePaid: boolean, isEquipmentPaid: boolean | null, course: { name: string } }> }> };

export type GParentByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GParentByIdQuery = { parent: { id: number, lastName: string | null, firstName: string | null, patronymic: string | null, phoneNumber: string | null, secondPhoneNumber: string | null, type: GRelationType | null, email: string | null, secondEmail: string | null, applyingDate: string | null } };

export type GParentsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GParentsListQuery = { parents: Array<{ id: number, lastName: string | null, firstName: string | null, patronymic: string | null }> };

export type GStudentByIdQueryVariables = Exact<{
  studentID: Scalars['Int'];
}>;


export type GStudentByIdQuery = { student: { id: number, lastName: string | null, firstName: string | null, patronymic: string | null, birthDate: string | null, description: string | null, school: { id: number, name: string, district: GDistrict | null } | null, parent: { id: number, lastName: string | null, firstName: string | null, patronymic: string | null, phoneNumber: string | null, secondPhoneNumber: string | null, email: string | null, secondEmail: string | null, applyingDate: string | null, relationType: GRelationType | null }, info: Array<{ attempt: number, admissionDate: string, contractState: GContractState, isCoursePaid: boolean, isEquipmentPaid: boolean | null, isGetRobot: boolean | null, course: { id: number, name: string }, group: { id: number, name: string } | null }> } };

export type GStudentWithParentCreateCommitMutationVariables = Exact<{
  student: GStudentCreateInput;
  parent: GParentInput;
}>;


export type GStudentWithParentCreateCommitMutation = { studentCreate: { id: number }, parentCreate: { id: number } };

export type GStudentWithParentUpdateCommitMutationVariables = Exact<{
  student: GStudentUpdateInput;
  parentId: Scalars['Int'];
  parent: GParentInput;
}>;


export type GStudentWithParentUpdateCommitMutation = { studentUpdateMany: boolean, parentUpdate: { id: number } };

export type GStudentFormQueryVariables = Exact<{ [key: string]: never; }>;


export type GStudentFormQuery = { schools: Array<{ id: number, name: string, district: GDistrict | null }> };

export type GLoginMutationVariables = Exact<{
  user: GLoginInput;
}>;


export type GLoginMutation = { login: string };


export const CourseByIdDocument = gql`
    query CourseById($courseId: Int!) {
  course(id: $courseId) {
    id
    name
    price
    programId
    durationInMonths
    equipmentPriceWithRobot
    equipmentPriceWithoutRobot
    color
    svgIconUrl
  }
}
    `;

/**
 * __useCourseByIdQuery__
 *
 * To run a query within a React component, call `useCourseByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCourseByIdQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *   },
 * });
 */
export function useCourseByIdQuery(baseOptions: Apollo.QueryHookOptions<GCourseByIdQuery, GCourseByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GCourseByIdQuery, GCourseByIdQueryVariables>(CourseByIdDocument, options);
      }
export function useCourseByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GCourseByIdQuery, GCourseByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GCourseByIdQuery, GCourseByIdQueryVariables>(CourseByIdDocument, options);
        }
export type CourseByIdQueryHookResult = ReturnType<typeof useCourseByIdQuery>;
export type CourseByIdLazyQueryHookResult = ReturnType<typeof useCourseByIdLazyQuery>;
export type CourseByIdQueryResult = Apollo.QueryResult<GCourseByIdQuery, GCourseByIdQueryVariables>;
export const CoursesDocument = gql`
    query Courses {
  courses(order: {name: ASC}) {
    id
    name
    price
    programId
    durationInMonths
    equipmentPriceWithRobot
    equipmentPriceWithoutRobot
    color
    svgIconUrl
  }
}
    `;

/**
 * __useCoursesQuery__
 *
 * To run a query within a React component, call `useCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCoursesQuery(baseOptions?: Apollo.QueryHookOptions<GCoursesQuery, GCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GCoursesQuery, GCoursesQueryVariables>(CoursesDocument, options);
      }
export function useCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GCoursesQuery, GCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GCoursesQuery, GCoursesQueryVariables>(CoursesDocument, options);
        }
export type CoursesQueryHookResult = ReturnType<typeof useCoursesQuery>;
export type CoursesLazyQueryHookResult = ReturnType<typeof useCoursesLazyQuery>;
export type CoursesQueryResult = Apollo.QueryResult<GCoursesQuery, GCoursesQueryVariables>;
export const GroupByIdDocument = gql`
    query GroupByID($groupID: Int!) {
  group(id: $groupID) {
    id
    name
    course {
      name
    }
    teacher {
      lastName
      firstName
      patronymic
    }
  }
  students(groupId: $groupID) {
    id
    firstName
    lastName
    patronymic
    birthDate
  }
}
    `;

/**
 * __useGroupByIdQuery__
 *
 * To run a query within a React component, call `useGroupByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupByIdQuery({
 *   variables: {
 *      groupID: // value for 'groupID'
 *   },
 * });
 */
export function useGroupByIdQuery(baseOptions: Apollo.QueryHookOptions<GGroupByIdQuery, GGroupByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GGroupByIdQuery, GGroupByIdQueryVariables>(GroupByIdDocument, options);
      }
export function useGroupByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GGroupByIdQuery, GGroupByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GGroupByIdQuery, GGroupByIdQueryVariables>(GroupByIdDocument, options);
        }
export type GroupByIdQueryHookResult = ReturnType<typeof useGroupByIdQuery>;
export type GroupByIdLazyQueryHookResult = ReturnType<typeof useGroupByIdLazyQuery>;
export type GroupByIdQueryResult = Apollo.QueryResult<GGroupByIdQuery, GGroupByIdQueryVariables>;
export const GroupsDocument = gql`
    query Groups {
  groups {
    id
    name
    course {
      name
    }
    teacher {
      lastName
      firstName
      patronymic
    }
    startDate
    studentsCount
  }
}
    `;

/**
 * __useGroupsQuery__
 *
 * To run a query within a React component, call `useGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GGroupsQuery, GGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GGroupsQuery, GGroupsQueryVariables>(GroupsDocument, options);
      }
export function useGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GGroupsQuery, GGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GGroupsQuery, GGroupsQueryVariables>(GroupsDocument, options);
        }
export type GroupsQueryHookResult = ReturnType<typeof useGroupsQuery>;
export type GroupsLazyQueryHookResult = ReturnType<typeof useGroupsLazyQuery>;
export type GroupsQueryResult = Apollo.QueryResult<GGroupsQuery, GGroupsQueryVariables>;
export const AllStudentsDocument = gql`
    query AllStudents {
  students {
    id
    lastName
    firstName
    patronymic
    birthDate
    description
    parent {
      id
      firstName
      lastName
      patronymic
      phoneNumber
      secondPhoneNumber
      email
      secondEmail
      applyingDate
    }
    info {
      attempt
      course {
        name
      }
      admissionDate
      contractState
      isCoursePaid
      isEquipmentPaid
    }
  }
}
    `;

/**
 * __useAllStudentsQuery__
 *
 * To run a query within a React component, call `useAllStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllStudentsQuery(baseOptions?: Apollo.QueryHookOptions<GAllStudentsQuery, GAllStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GAllStudentsQuery, GAllStudentsQueryVariables>(AllStudentsDocument, options);
      }
export function useAllStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GAllStudentsQuery, GAllStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GAllStudentsQuery, GAllStudentsQueryVariables>(AllStudentsDocument, options);
        }
export type AllStudentsQueryHookResult = ReturnType<typeof useAllStudentsQuery>;
export type AllStudentsLazyQueryHookResult = ReturnType<typeof useAllStudentsLazyQuery>;
export type AllStudentsQueryResult = Apollo.QueryResult<GAllStudentsQuery, GAllStudentsQueryVariables>;
export const ParentByIdDocument = gql`
    query ParentByID($id: Int!) {
  parent(id: $id) {
    id
    lastName
    firstName
    patronymic
    phoneNumber
    secondPhoneNumber
    type
    email
    secondEmail
    applyingDate
  }
}
    `;

/**
 * __useParentByIdQuery__
 *
 * To run a query within a React component, call `useParentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useParentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParentByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useParentByIdQuery(baseOptions: Apollo.QueryHookOptions<GParentByIdQuery, GParentByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GParentByIdQuery, GParentByIdQueryVariables>(ParentByIdDocument, options);
      }
export function useParentByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GParentByIdQuery, GParentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GParentByIdQuery, GParentByIdQueryVariables>(ParentByIdDocument, options);
        }
export type ParentByIdQueryHookResult = ReturnType<typeof useParentByIdQuery>;
export type ParentByIdLazyQueryHookResult = ReturnType<typeof useParentByIdLazyQuery>;
export type ParentByIdQueryResult = Apollo.QueryResult<GParentByIdQuery, GParentByIdQueryVariables>;
export const ParentsListDocument = gql`
    query ParentsList {
  parents {
    id
    lastName
    firstName
    patronymic
  }
}
    `;

/**
 * __useParentsListQuery__
 *
 * To run a query within a React component, call `useParentsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useParentsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParentsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useParentsListQuery(baseOptions?: Apollo.QueryHookOptions<GParentsListQuery, GParentsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GParentsListQuery, GParentsListQueryVariables>(ParentsListDocument, options);
      }
export function useParentsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GParentsListQuery, GParentsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GParentsListQuery, GParentsListQueryVariables>(ParentsListDocument, options);
        }
export type ParentsListQueryHookResult = ReturnType<typeof useParentsListQuery>;
export type ParentsListLazyQueryHookResult = ReturnType<typeof useParentsListLazyQuery>;
export type ParentsListQueryResult = Apollo.QueryResult<GParentsListQuery, GParentsListQueryVariables>;
export const StudentByIdDocument = gql`
    query StudentById($studentID: Int!) {
  student(id: $studentID) {
    id
    lastName
    firstName
    patronymic
    birthDate
    description
    school {
      id
      name
      district
    }
    parent {
      id
      lastName
      firstName
      patronymic
      relationType: type
      phoneNumber
      secondPhoneNumber
      email
      secondEmail
      applyingDate
    }
    info {
      course {
        id
        name
      }
      group {
        id
        name
      }
      attempt
      admissionDate
      contractState
      isCoursePaid
      isEquipmentPaid
      isGetRobot
    }
  }
}
    `;

/**
 * __useStudentByIdQuery__
 *
 * To run a query within a React component, call `useStudentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentByIdQuery({
 *   variables: {
 *      studentID: // value for 'studentID'
 *   },
 * });
 */
export function useStudentByIdQuery(baseOptions: Apollo.QueryHookOptions<GStudentByIdQuery, GStudentByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GStudentByIdQuery, GStudentByIdQueryVariables>(StudentByIdDocument, options);
      }
export function useStudentByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GStudentByIdQuery, GStudentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GStudentByIdQuery, GStudentByIdQueryVariables>(StudentByIdDocument, options);
        }
export type StudentByIdQueryHookResult = ReturnType<typeof useStudentByIdQuery>;
export type StudentByIdLazyQueryHookResult = ReturnType<typeof useStudentByIdLazyQuery>;
export type StudentByIdQueryResult = Apollo.QueryResult<GStudentByIdQuery, GStudentByIdQueryVariables>;
export const StudentWithParentCreateCommitDocument = gql`
    mutation StudentWithParentCreateCommit($student: StudentCreateInput!, $parent: ParentInput!) {
  studentCreate(student: $student) {
    id
  }
  parentCreate(parent: $parent) {
    id
  }
}
    `;
export type GStudentWithParentCreateCommitMutationFn = Apollo.MutationFunction<GStudentWithParentCreateCommitMutation, GStudentWithParentCreateCommitMutationVariables>;

/**
 * __useStudentWithParentCreateCommitMutation__
 *
 * To run a mutation, you first call `useStudentWithParentCreateCommitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentWithParentCreateCommitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentWithParentCreateCommitMutation, { data, loading, error }] = useStudentWithParentCreateCommitMutation({
 *   variables: {
 *      student: // value for 'student'
 *      parent: // value for 'parent'
 *   },
 * });
 */
export function useStudentWithParentCreateCommitMutation(baseOptions?: Apollo.MutationHookOptions<GStudentWithParentCreateCommitMutation, GStudentWithParentCreateCommitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GStudentWithParentCreateCommitMutation, GStudentWithParentCreateCommitMutationVariables>(StudentWithParentCreateCommitDocument, options);
      }
export type StudentWithParentCreateCommitMutationHookResult = ReturnType<typeof useStudentWithParentCreateCommitMutation>;
export type StudentWithParentCreateCommitMutationResult = Apollo.MutationResult<GStudentWithParentCreateCommitMutation>;
export type StudentWithParentCreateCommitMutationOptions = Apollo.BaseMutationOptions<GStudentWithParentCreateCommitMutation, GStudentWithParentCreateCommitMutationVariables>;
export const StudentWithParentUpdateCommitDocument = gql`
    mutation StudentWithParentUpdateCommit($student: StudentUpdateInput!, $parentId: Int!, $parent: ParentInput!) {
  studentUpdateMany(students: [$student])
  parentUpdate(id: $parentId, parent: $parent) {
    id
  }
}
    `;
export type GStudentWithParentUpdateCommitMutationFn = Apollo.MutationFunction<GStudentWithParentUpdateCommitMutation, GStudentWithParentUpdateCommitMutationVariables>;

/**
 * __useStudentWithParentUpdateCommitMutation__
 *
 * To run a mutation, you first call `useStudentWithParentUpdateCommitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentWithParentUpdateCommitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentWithParentUpdateCommitMutation, { data, loading, error }] = useStudentWithParentUpdateCommitMutation({
 *   variables: {
 *      student: // value for 'student'
 *      parentId: // value for 'parentId'
 *      parent: // value for 'parent'
 *   },
 * });
 */
export function useStudentWithParentUpdateCommitMutation(baseOptions?: Apollo.MutationHookOptions<GStudentWithParentUpdateCommitMutation, GStudentWithParentUpdateCommitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GStudentWithParentUpdateCommitMutation, GStudentWithParentUpdateCommitMutationVariables>(StudentWithParentUpdateCommitDocument, options);
      }
export type StudentWithParentUpdateCommitMutationHookResult = ReturnType<typeof useStudentWithParentUpdateCommitMutation>;
export type StudentWithParentUpdateCommitMutationResult = Apollo.MutationResult<GStudentWithParentUpdateCommitMutation>;
export type StudentWithParentUpdateCommitMutationOptions = Apollo.BaseMutationOptions<GStudentWithParentUpdateCommitMutation, GStudentWithParentUpdateCommitMutationVariables>;
export const StudentFormDocument = gql`
    query StudentForm {
  schools {
    id
    name
    district
  }
}
    `;

/**
 * __useStudentFormQuery__
 *
 * To run a query within a React component, call `useStudentFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentFormQuery({
 *   variables: {
 *   },
 * });
 */
export function useStudentFormQuery(baseOptions?: Apollo.QueryHookOptions<GStudentFormQuery, GStudentFormQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GStudentFormQuery, GStudentFormQueryVariables>(StudentFormDocument, options);
      }
export function useStudentFormLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GStudentFormQuery, GStudentFormQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GStudentFormQuery, GStudentFormQueryVariables>(StudentFormDocument, options);
        }
export type StudentFormQueryHookResult = ReturnType<typeof useStudentFormQuery>;
export type StudentFormLazyQueryHookResult = ReturnType<typeof useStudentFormLazyQuery>;
export type StudentFormQueryResult = Apollo.QueryResult<GStudentFormQuery, GStudentFormQueryVariables>;
export const LoginDocument = gql`
    mutation login($user: LoginInput!) {
  login(user: $user)
}
    `;
export type GLoginMutationFn = Apollo.MutationFunction<GLoginMutation, GLoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<GLoginMutation, GLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GLoginMutation, GLoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<GLoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<GLoginMutation, GLoginMutationVariables>;