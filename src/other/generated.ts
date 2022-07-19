export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type GAnnouncement = {
  courses: Array<Maybe<GCourse>>;
  endDate: Scalars['Date'];
  groups: Array<Maybe<GGroup>>;
  heading: Scalars['String'];
  id: Scalars['Int'];
  pictureUrl: Scalars['String'];
  startDate: Scalars['Date'];
  text: Scalars['String'];
  type: GAnnouncementTypeEnum;
  user: GUser;
  userId: Scalars['Int'];
};

export const enum GAnnouncementTypeEnum {
  Important = 'IMPORTANT',
  Unimportant = 'UNIMPORTANT'
};

export const enum GAppointment {
  Course = 'COURSE',
  Material = 'MATERIAL'
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

export type GContractState = {
  id: Scalars['Int'];
  name: Scalars['String'];
  studentsToCourses: Array<Maybe<GStudentToCourse>>;
};

export type GCourse = {
  announcements: Array<Maybe<GAnnouncement>>;
  coursePrice: Scalars['Float'];
  durationInMonths: Scalars['Int'];
  equipmentPriceWithRobot: Maybe<Scalars['Float']>;
  equipmentPriceWithoutRobot: Maybe<Scalars['Float']>;
  groups: Array<Maybe<GGroup>>;
  id: Scalars['Int'];
  name: Scalars['String'];
  payNotes: Array<GPayNote>;
  programFileUrl: Scalars['String'];
  studentToCourses: Array<Maybe<GStudentToCourse>>;
  teachers: Array<Maybe<GTeacher>>;
};

export type GCourseCreateInput = {
  coursePrice: Scalars['Float'];
  durationInMonths: Scalars['Int'];
  equipmentPriceWithRobot: InputMaybe<Scalars['Float']>;
  equipmentPriceWithoutRobot: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  programFileUrl: Scalars['String'];
};

export type GCourseType = {
  durationInMonths: Scalars['Int'];
  equipmentPriceWithRobot: Maybe<Scalars['Float']>;
  equipmentPriceWithoutRobot: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  programFileUrl: Scalars['String'];
};

export type GCourseTypeFilterInput = {
  and: InputMaybe<Array<GCourseTypeFilterInput>>;
  durationInMonths: InputMaybe<GComparableInt32OperationFilterInput>;
  equipmentPriceWithRobot: InputMaybe<GComparableNullableOfDoubleOperationFilterInput>;
  equipmentPriceWithoutRobot: InputMaybe<GComparableNullableOfDoubleOperationFilterInput>;
  id: InputMaybe<GComparableInt32OperationFilterInput>;
  name: InputMaybe<GStringOperationFilterInput>;
  or: InputMaybe<Array<GCourseTypeFilterInput>>;
  price: InputMaybe<GComparableDoubleOperationFilterInput>;
  programFileUrl: InputMaybe<GStringOperationFilterInput>;
};

export type GCourseTypeSortInput = {
  durationInMonths: InputMaybe<GSortEnumType>;
  equipmentPriceWithRobot: InputMaybe<GSortEnumType>;
  equipmentPriceWithoutRobot: InputMaybe<GSortEnumType>;
  id: InputMaybe<GSortEnumType>;
  name: InputMaybe<GSortEnumType>;
  price: InputMaybe<GSortEnumType>;
  programFileUrl: InputMaybe<GSortEnumType>;
};

export type GCourseUpdateInput = {
  coursePrice: InputMaybe<Scalars['Float']>;
  durationInMonths: InputMaybe<Scalars['Int']>;
  equipmentPriceWithRobot: InputMaybe<Scalars['Float']>;
  equipmentPriceWithoutRobot: InputMaybe<Scalars['Float']>;
  id: Scalars['Int'];
  name: InputMaybe<Scalars['String']>;
  programFileUrl: InputMaybe<Scalars['String']>;
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

export type GGroup = {
  announcements: Array<Maybe<GAnnouncement>>;
  course: GCourse;
  courseId: Scalars['Int'];
  id: Scalars['Int'];
  lessons: Array<Maybe<GLesson>>;
  name: Scalars['String'];
  startDate: Scalars['Date'];
  studentsToGroups: Array<Maybe<GStudentsToGroups>>;
  teacher: GTeacher;
  teacherId: Scalars['Int'];
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
  contractState: Scalars['String'];
  contractStateId: Scalars['Int'];
  course: GCourseType;
  courseId: Scalars['Int'];
  group: Maybe<GGroupType>;
  isCoursePaid: Scalars['Boolean'];
  isEquipmentPaid: Maybe<Scalars['Boolean']>;
  isGetRobot: Maybe<Scalars['Boolean']>;
  studentId: Scalars['Int'];
};

export type GLesson = {
  classRoom: Scalars['String'];
  duration: Scalars['Int'];
  group: GGroup;
  groupId: Scalars['Int'];
  homework: Scalars['String'];
  id: Scalars['Int'];
  lessonTopic: Scalars['String'];
  startDateTime: Scalars['DateTime'];
  studentsToLessons: Array<Maybe<GStudentToLesson>>;
  teacherToLessons: Array<Maybe<GTeacherToLesson>>;
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
  attachStudentsToGroups: Scalars['Boolean'];
  courseCreateCourse: GCourseType;
  courseDeleteMany: Scalars['Boolean'];
  courseUpdateMany: Scalars['Boolean'];
  detachStudentsToCourses: Scalars['Boolean'];
  dettachStudentsFromGroups: Scalars['Boolean'];
  groupCreate: GGroupType;
  groupDeleteMany: Scalars['Boolean'];
  groupUpdateMany: Scalars['Boolean'];
  parentCreate: GParentType;
  parentDeleteMany: Scalars['Boolean'];
  parentUpdateMany: Scalars['Boolean'];
  studentCreate: GStudent;
  studentDeleteMany: Scalars['Boolean'];
  studentUpdateMany: Scalars['Boolean'];
  updateFromGoogleTable: Scalars['Boolean'];
  updateStudentsToCourses: Scalars['Boolean'];
};


export type GMutationAttachStudentsToCoursesArgs = {
  studentsToCourses: Array<GStudentToCourseCreateInput>;
};


export type GMutationAttachStudentsToGroupsArgs = {
  studentsToGroups: Array<GStudentToGroupInput>;
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


export type GMutationDetachStudentsToCoursesArgs = {
  studentsToCourses: Array<GStudentToCourseDetachInput>;
};


export type GMutationDettachStudentsFromGroupsArgs = {
  studentsToGroups: Array<GStudentToGroupInput>;
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


export type GMutationParentCreateArgs = {
  parent: GParentCreateInput;
};


export type GMutationParentDeleteManyArgs = {
  parentsIds: Array<Scalars['Int']>;
};


export type GMutationParentUpdateManyArgs = {
  parent: Array<GParentUpdateInput>;
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

export type GParent = {
  secondEmail: Maybe<Scalars['String']>;
  secondPhoneNumber: Maybe<Scalars['String']>;
  signDate: Scalars['Date'];
  students: Array<Maybe<GStudent>>;
  user: GUser;
  userId: Scalars['Int'];
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

export type GParentType = {
  address: Maybe<Scalars['String']>;
  applyingDate: Scalars['Date'];
  birthday: Maybe<Scalars['Date']>;
  education: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  inn: Maybe<Scalars['String']>;
  isAdmin: Scalars['Boolean'];
  lastName: Scalars['String'];
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

export type GPayNote = {
  appointment: GAppointment;
  checkURL: Scalars['String'];
  course: GCourse;
  courseId: Scalars['Int'];
  date: Scalars['Date'];
  id: Scalars['Int'];
  student: GStudent;
  studentId: Scalars['Int'];
  sum: Scalars['Float'];
  user: GUser;
  userId: Scalars['Int'];
};

export type GPost = {
  id: Scalars['Int'];
  name: Scalars['String'];
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

export type GSchool = {
  district: GDistrict;
  id: Scalars['Int'];
  name: Scalars['String'];
  students: Array<Maybe<GStudent>>;
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

export type GStudent = {
  birthDate: Scalars['Date'];
  description: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  parent: GParent;
  parentId: Scalars['Int'];
  patronymic: Maybe<Scalars['String']>;
  payNotes: Array<Maybe<GPayNote>>;
  school: GSchool;
  schoolId: Scalars['Int'];
  studentToCourses: Array<Maybe<GStudentToCourse>>;
  studentToLessons: Array<Maybe<GStudentToLesson>>;
  studentsToGroups: Array<Maybe<GStudentsToGroups>>;
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

export type GStudentToCourse = {
  contractState: GContractState;
  contractStateId: Scalars['Int'];
  contractUrl: Maybe<Scalars['String']>;
  course: GCourse;
  courseId: Scalars['Int'];
  debt: Maybe<Scalars['Float']>;
  equipmentPriceWithRobot: Maybe<Scalars['Boolean']>;
  signDate: Scalars['Date'];
  student: GStudent;
  studentId: Scalars['Int'];
};

export type GStudentToCourseCreateInput = {
  admissionDate: Scalars['Date'];
  contractStateId: Scalars['Int'];
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
  contractStateId: InputMaybe<Scalars['Int']>;
  contractUrl: InputMaybe<Scalars['String']>;
  courseId: Scalars['Int'];
  isGetRobot: InputMaybe<Scalars['Boolean']>;
  studentId: Scalars['Int'];
};

export type GStudentToGroupInput = {
  groupId: Scalars['Int'];
  studentId: Scalars['Int'];
};

export type GStudentToLesson = {
  lesson: GLesson;
  lessonId: Scalars['Int'];
  mark: Scalars['Int'];
  note: Scalars['String'];
  status: GStatus;
  student: GStudent;
  studentId: Scalars['Int'];
};

export type GStudentType = {
  birthDate: Scalars['Date'];
  description: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['Int'];
  info: Array<GInfoType>;
  lastName: Scalars['String'];
  parent: GParentType;
  parentId: Scalars['Int'];
  patronymic: Maybe<Scalars['String']>;
  school: GSchoolType;
  schoolId: Scalars['Int'];
};

export type GStudentTypeFilterInput = {
  and: InputMaybe<Array<GStudentTypeFilterInput>>;
  birthDate: InputMaybe<GComparableDateOnlyOperationFilterInput>;
  description: InputMaybe<GStringOperationFilterInput>;
  firstName: InputMaybe<GStringOperationFilterInput>;
  id: InputMaybe<GComparableInt32OperationFilterInput>;
  lastName: InputMaybe<GStringOperationFilterInput>;
  or: InputMaybe<Array<GStudentTypeFilterInput>>;
  parentId: InputMaybe<GComparableInt32OperationFilterInput>;
  patronymic: InputMaybe<GStringOperationFilterInput>;
  schoolId: InputMaybe<GComparableInt32OperationFilterInput>;
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

export type GStudentsToGroups = {
  group: GGroup;
  groupId: Scalars['Int'];
  student: GStudent;
  studentId: Scalars['Int'];
};

export type GTeacher = {
  courses: Array<Maybe<GCourse>>;
  groups: Array<Maybe<GGroup>>;
  post: GPost;
  postId: Scalars['Int'];
  teacherToLessons: Array<Maybe<GTeacherToLesson>>;
  user: GUser;
  userId: Scalars['Int'];
  workPlace: Scalars['String'];
};

export type GTeacherToLesson = {
  lesson: GLesson;
  lessonId: Scalars['Int'];
  teacher: GTeacher;
  teacherId: Scalars['Int'];
  workTime: Scalars['TimeSpan'];
};

export type GTeacherType = {
  address: Maybe<Scalars['String']>;
  birthday: Maybe<Scalars['Date']>;
  education: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  inn: Maybe<Scalars['String']>;
  isAdmin: Scalars['Boolean'];
  lastName: Scalars['String'];
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

export type GUser = {
  address: Maybe<Scalars['String']>;
  announcements: Array<Maybe<GAnnouncement>>;
  birthday: Maybe<Scalars['Date']>;
  education: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstname: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  inn: Maybe<Scalars['String']>;
  isAdmin: Scalars['Boolean'];
  lastname: Maybe<Scalars['String']>;
  passportCode: Maybe<Scalars['String']>;
  passportDate: Maybe<Scalars['Date']>;
  passportIssue: Maybe<Scalars['String']>;
  passportNo: Maybe<Scalars['String']>;
  password: Scalars['String'];
  patronymic: Maybe<Scalars['String']>;
  payNotes: Array<Maybe<GPayNote>>;
  phoneNumber: Maybe<Scalars['String']>;
  snils: Maybe<Scalars['String']>;
};
