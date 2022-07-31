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

export type GComparableDoubleOperationFilterInput = {
  eq: InputMaybe<Scalars['Float']>;
  gt: InputMaybe<Scalars['Float']>;
  gte: InputMaybe<Scalars['Float']>;
  in: InputMaybe<Array<Scalars['Float']>>;
  lt: InputMaybe<Scalars['Float']>;
  lte: InputMaybe<Scalars['Float']>;
  neq: InputMaybe<Scalars['Float']>;
  ngt: InputMaybe<Scalars['Float']>;
  ngte: InputMaybe<Scalars['Float']>;
  nin: InputMaybe<Array<Scalars['Float']>>;
  nlt: InputMaybe<Scalars['Float']>;
  nlte: InputMaybe<Scalars['Float']>;
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
  coursePrice: Scalars['Float'];
  durationInMonths: Scalars['Int'];
  equipmentPriceWithRobot: InputMaybe<Scalars['Float']>;
  equipmentPriceWithoutRobot: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  programId: InputMaybe<Scalars['Int']>;
};

export type GCourseType = {
  color: Maybe<Scalars['String']>;
  durationInMonths: Scalars['Int'];
  equipmentPriceWithRobot: Maybe<Scalars['Float']>;
  equipmentPriceWithoutRobot: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  programId: Maybe<Scalars['Int']>;
  svgIconUrl: Maybe<Scalars['String']>;
};

export type GCourseTypeFilterInput = {
  and: InputMaybe<Array<GCourseTypeFilterInput>>;
  color: InputMaybe<GStringOperationFilterInput>;
  durationInMonths: InputMaybe<GComparableInt32OperationFilterInput>;
  equipmentPriceWithRobot: InputMaybe<GComparableNullableOfDoubleOperationFilterInput>;
  equipmentPriceWithoutRobot: InputMaybe<GComparableNullableOfDoubleOperationFilterInput>;
  id: InputMaybe<GComparableInt32OperationFilterInput>;
  name: InputMaybe<GStringOperationFilterInput>;
  or: InputMaybe<Array<GCourseTypeFilterInput>>;
  price: InputMaybe<GComparableDoubleOperationFilterInput>;
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
  coursePrice: InputMaybe<Scalars['Float']>;
  durationInMonths: InputMaybe<Scalars['Int']>;
  equipmentPriceWithRobot: InputMaybe<Scalars['Float']>;
  equipmentPriceWithoutRobot: InputMaybe<Scalars['Float']>;
  id: Scalars['Int'];
  name: InputMaybe<Scalars['String']>;
  programId: InputMaybe<Scalars['Int']>;
};

export const enum GDistrict {
  Central = 'CENTRAL',
  Tractor = 'TRACTOR',
  Voroshilovskiy = 'VOROSHILOVSKIY'
};

export type GDistrictOperationFilterInput = {
  eq: InputMaybe<GDistrict>;
  in: InputMaybe<Array<GDistrict>>;
  neq: InputMaybe<GDistrict>;
  nin: InputMaybe<Array<GDistrict>>;
};

export type GGroupCreateInput = {
  courseId: Scalars['Int'];
  name: Scalars['String'];
  startDate: Scalars['Date'];
  teacherId: Scalars['Int'];
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

export type GGroupUpdateInput = {
  id: Scalars['Int'];
  name: InputMaybe<Scalars['String']>;
  startDate: InputMaybe<Scalars['Date']>;
  teacherId: InputMaybe<Scalars['Int']>;
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

export type GMutation = {
  attachStudentsToCourses: Scalars['Boolean'];
  courseCreateCourse: GCourseType;
  courseDeleteMany: Scalars['Boolean'];
  courseUpdateMany: Scalars['Boolean'];
  createSchool: GSchoolType;
  detachStudentsToCourses: Scalars['Boolean'];
  groupCreate: GGroupType;
  groupDeleteMany: Scalars['Boolean'];
  groupUpdateMany: Scalars['Boolean'];
  login: Scalars['String'];
  parentCreate: GParentType;
  parentDeleteMany: Scalars['Boolean'];
  parentUpdateMany: Scalars['Boolean'];
  schoolDeleteMany: Scalars['Boolean'];
  schoolUpdateMany: Scalars['Boolean'];
  studentCreate: GStudentType;
  studentDeleteMany: Scalars['Boolean'];
  studentUpdateMany: Scalars['Boolean'];
  updateFromGoogleTable: Scalars['Boolean'];
  updateStudentsToCourses: Scalars['Boolean'];
};


export type GMutationAttachStudentsToCoursesArgs = {
  studentsToCourses: Array<GStudentToCourseCreateInput>;
};


export type GMutationCourseCreateCourseArgs = {
  course: GCourseCreateInput;
};


export type GMutationCourseDeleteManyArgs = {
  courseIds: Array<Scalars['Int']>;
};


export type GMutationCourseUpdateManyArgs = {
  courses: Array<GCourseUpdateInput>;
};


export type GMutationCreateSchoolArgs = {
  school: GSchoolCreateInput;
};


export type GMutationDetachStudentsToCoursesArgs = {
  studentsToCourses: Array<GStudentToCourseDetachInput>;
};


export type GMutationGroupCreateArgs = {
  group: GGroupCreateInput;
};


export type GMutationGroupDeleteManyArgs = {
  groupIds: Array<Scalars['Int']>;
};


export type GMutationGroupUpdateManyArgs = {
  groups: Array<GGroupUpdateInput>;
};


export type GMutationLoginArgs = {
  user: GParentLoginInput;
};


export type GMutationParentCreateArgs = {
  parent: GParentCreateInput;
};


export type GMutationParentDeleteManyArgs = {
  parentsIds: Array<Scalars['Int']>;
};


export type GMutationParentUpdateManyArgs = {
  parent: Array<GParentUpdateInput>;
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


export type GMutationUpdateStudentsToCoursesArgs = {
  studentsToCourses: Array<GStudentToCourseUpdateInput>;
};

export type GNullableOfRelationTypeOperationFilterInput = {
  eq: InputMaybe<GRelationType>;
  in: InputMaybe<Array<InputMaybe<GRelationType>>>;
  neq: InputMaybe<GRelationType>;
  nin: InputMaybe<Array<InputMaybe<GRelationType>>>;
};

export type GParentCreateInput = {
  address: InputMaybe<Scalars['String']>;
  applyingDate: Scalars['Date'];
  birthday: Scalars['Date'];
  education: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstname: Scalars['String'];
  inn: InputMaybe<Scalars['String']>;
  lastname: Scalars['String'];
  passportCode: InputMaybe<Scalars['String']>;
  passportDate: InputMaybe<Scalars['Date']>;
  passportIssue: InputMaybe<Scalars['String']>;
  passportNo: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  patronymic: InputMaybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  secondEmail: InputMaybe<Scalars['String']>;
  secondPhoneNumber: InputMaybe<Scalars['String']>;
  snils: InputMaybe<Scalars['String']>;
};

export type GParentLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type GParentType = {
  address: Maybe<Scalars['String']>;
  applyingDate: Scalars['Date'];
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
  secondEmail: Maybe<Scalars['String']>;
  secondPhoneNumber: Maybe<Scalars['String']>;
  snils: Maybe<Scalars['String']>;
  type: Maybe<GRelationType>;
};

export type GParentTypeFilterInput = {
  address: InputMaybe<GStringOperationFilterInput>;
  and: InputMaybe<Array<GParentTypeFilterInput>>;
  applyingDate: InputMaybe<GComparableDateOnlyOperationFilterInput>;
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

export type GParentUpdateInput = {
  address: InputMaybe<Scalars['String']>;
  applyingDate: InputMaybe<Scalars['Date']>;
  birthday: InputMaybe<Scalars['Date']>;
  education: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
  firstname: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  inn: InputMaybe<Scalars['String']>;
  lastname: InputMaybe<Scalars['String']>;
  passportCode: InputMaybe<Scalars['String']>;
  passportDate: InputMaybe<Scalars['Date']>;
  passportIssue: InputMaybe<Scalars['String']>;
  passportNo: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
  patronymic: InputMaybe<Scalars['String']>;
  phoneNumber: InputMaybe<Scalars['String']>;
  secondEmail: InputMaybe<Scalars['String']>;
  secondPhoneNumber: InputMaybe<Scalars['String']>;
  snils: InputMaybe<Scalars['String']>;
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
  Grandma = 'GRANDMA',
  Grandpa = 'GRANDPA',
  Guardian = 'GUARDIAN',
  Mother = 'MOTHER',
  Other = 'OTHER',
  Sister = 'SISTER',
  Uncle = 'UNCLE'
};

export type GSchoolCreateInput = {
  district: GDistrict;
  name: Scalars['String'];
};

export type GSchoolType = {
  district: GDistrict;
  id: Scalars['Int'];
  name: Scalars['String'];
  students: Array<GStudentType>;
};

export type GSchoolTypeFilterInput = {
  and: InputMaybe<Array<GSchoolTypeFilterInput>>;
  district: InputMaybe<GDistrictOperationFilterInput>;
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
  birthDate: Scalars['Date'];
  description: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  parentId: Scalars['Int'];
  patronymic: InputMaybe<Scalars['String']>;
  schoolId: Scalars['Int'];
};

export type GStudentToCourseCreateInput = {
  admissionDate: Scalars['Date'];
  contractState: GContractState;
  contractUrl: InputMaybe<Scalars['String']>;
  courseId: Scalars['Int'];
  isGetRobot: InputMaybe<Scalars['Boolean']>;
  studentId: Scalars['Int'];
};

export type GStudentToCourseDetachInput = {
  courseId: Scalars['Int'];
  studentId: Scalars['Int'];
};

export type GStudentToCourseUpdateInput = {
  admissionDate: InputMaybe<Scalars['Date']>;
  contractState: InputMaybe<GContractState>;
  contractUrl: InputMaybe<Scalars['String']>;
  courseId: Scalars['Int'];
  isGetRobot: InputMaybe<Scalars['Boolean']>;
  studentId: Scalars['Int'];
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
  post: Scalars['String'];
  postId: Scalars['Int'];
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
  postId: InputMaybe<GComparableInt32OperationFilterInput>;
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


export type GCourseByIdQuery = { course: { id: number, name: string, price: number, programId: number | null, durationInMonths: number, equipmentPriceWithRobot: number | null, equipmentPriceWithoutRobot: number | null, color: string | null, svgIconUrl: string | null } };

export type GCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GCoursesQuery = { courses: Array<{ id: number, name: string, price: number, programId: number | null, durationInMonths: number, equipmentPriceWithRobot: number | null, equipmentPriceWithoutRobot: number | null, color: string | null, svgIconUrl: string | null }> };

export type GGroupByIdQueryVariables = Exact<{
  groupID: Scalars['Int'];
}>;


export type GGroupByIdQuery = { group: { id: number, name: string, course: { name: string }, teacher: { lastName: string | null, firstName: string | null, patronymic: string | null } }, students: Array<{ id: number, firstName: string | null, lastName: string | null, patronymic: string | null, birthDate: string | null }> };

export type GGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GGroupsQuery = { groups: Array<{ id: number, name: string, startDate: string, studentsCount: number, course: { name: string }, teacher: { lastName: string | null, firstName: string | null, patronymic: string | null } }> };

export type GAllStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GAllStudentsQuery = { students: Array<{ id: number, lastName: string | null, firstName: string | null, patronymic: string | null, birthDate: string | null, description: string | null, parent: { id: number, firstName: string | null, lastName: string | null, patronymic: string | null, phoneNumber: string | null, secondPhoneNumber: string | null, email: string, secondEmail: string | null, applyingDate: string }, info: Array<{ attempt: number, admissionDate: string, contractState: GContractState, isCoursePaid: boolean, isEquipmentPaid: boolean | null, course: { name: string } }> }> };

export type GParentByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GParentByIdQuery = { parent: { id: number, lastName: string | null, firstName: string | null, patronymic: string | null, phoneNumber: string | null, secondPhoneNumber: string | null, type: GRelationType | null, email: string, secondEmail: string | null, applyingDate: string } };

export type GParentsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GParentsListQuery = { parents: Array<{ id: number, lastName: string | null, firstName: string | null, patronymic: string | null }> };

export type GStudentQueryVariables = Exact<{
  studentID: Scalars['Int'];
}>;


export type GStudentQuery = { student: { id: number, lastName: string | null, firstName: string | null, patronymic: string | null, birthDate: string | null, description: string | null, school: { id: number, name: string, district: GDistrict } | null, parent: { id: number }, info: Array<{ attempt: number, admissionDate: string, contractState: GContractState, isCoursePaid: boolean, isEquipmentPaid: boolean | null, isGetRobot: boolean | null, course: { id: number, name: string }, group: { id: number, name: string } | null }> } };

export type GStudentFormQueryVariables = Exact<{ [key: string]: never; }>;


export type GStudentFormQuery = { schools: Array<{ id: number, name: string, district: GDistrict }> };


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
export const StudentDocument = gql`
    query Student($studentID: Int!) {
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
 * __useStudentQuery__
 *
 * To run a query within a React component, call `useStudentQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentQuery({
 *   variables: {
 *      studentID: // value for 'studentID'
 *   },
 * });
 */
export function useStudentQuery(baseOptions: Apollo.QueryHookOptions<GStudentQuery, GStudentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GStudentQuery, GStudentQueryVariables>(StudentDocument, options);
      }
export function useStudentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GStudentQuery, GStudentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GStudentQuery, GStudentQueryVariables>(StudentDocument, options);
        }
export type StudentQueryHookResult = ReturnType<typeof useStudentQuery>;
export type StudentLazyQueryHookResult = ReturnType<typeof useStudentLazyQuery>;
export type StudentQueryResult = Apollo.QueryResult<GStudentQuery, GStudentQueryVariables>;
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