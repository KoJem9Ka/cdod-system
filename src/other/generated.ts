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
};

export type GCourse = {
  Groups: Array<GGroup>;
  Infos: Array<GInfo>;
  equipmentPriceWithRobot: Maybe<Scalars['Int']>;
  equipmentPriceWithoutRobot: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Int'];
};

export type GCourseFilter = {
  equipmentPriceWithRobot: InputMaybe<Scalars['Int']>;
  equipmentPriceWithRobot_gt: InputMaybe<Scalars['Int']>;
  equipmentPriceWithRobot_gte: InputMaybe<Scalars['Int']>;
  equipmentPriceWithRobot_lt: InputMaybe<Scalars['Int']>;
  equipmentPriceWithRobot_lte: InputMaybe<Scalars['Int']>;
  equipmentPriceWithRobot_neq: InputMaybe<Scalars['Int']>;
  equipmentPriceWithoutRobot: InputMaybe<Scalars['Int']>;
  equipmentPriceWithoutRobot_gt: InputMaybe<Scalars['Int']>;
  equipmentPriceWithoutRobot_gte: InputMaybe<Scalars['Int']>;
  equipmentPriceWithoutRobot_lt: InputMaybe<Scalars['Int']>;
  equipmentPriceWithoutRobot_lte: InputMaybe<Scalars['Int']>;
  equipmentPriceWithoutRobot_neq: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['ID']>;
  id_neq: InputMaybe<Scalars['ID']>;
  ids: Array<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  name_neq: InputMaybe<Scalars['String']>;
  price: InputMaybe<Scalars['Int']>;
  price_gt: InputMaybe<Scalars['Int']>;
  price_gte: InputMaybe<Scalars['Int']>;
  price_lt: InputMaybe<Scalars['Int']>;
  price_lte: InputMaybe<Scalars['Int']>;
  price_neq: InputMaybe<Scalars['Int']>;
  q: InputMaybe<Scalars['String']>;
};

export type GCourseInput = {
  equipmentPriceWithRobot: InputMaybe<Scalars['Int']>;
  equipmentPriceWithoutRobot: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Int'];
};

export type GGroup = {
  Course: GCourse;
  Infos: Array<GInfo>;
  Teacher: GTeacher;
  course_id: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  startDate: Scalars['String'];
  studentsCount: Scalars['Int'];
  teacher_id: Scalars['ID'];
};

export type GGroupFilter = {
  course_id: InputMaybe<Scalars['ID']>;
  course_id_neq: InputMaybe<Scalars['ID']>;
  id: InputMaybe<Scalars['ID']>;
  id_neq: InputMaybe<Scalars['ID']>;
  ids: Array<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  name_neq: InputMaybe<Scalars['String']>;
  q: InputMaybe<Scalars['String']>;
  startDate: InputMaybe<Scalars['String']>;
  startDate_neq: InputMaybe<Scalars['String']>;
  studentsCount: InputMaybe<Scalars['Int']>;
  studentsCount_gt: InputMaybe<Scalars['Int']>;
  studentsCount_gte: InputMaybe<Scalars['Int']>;
  studentsCount_lt: InputMaybe<Scalars['Int']>;
  studentsCount_lte: InputMaybe<Scalars['Int']>;
  studentsCount_neq: InputMaybe<Scalars['Int']>;
  teacher_id: InputMaybe<Scalars['ID']>;
  teacher_id_neq: InputMaybe<Scalars['ID']>;
};

export type GGroupInput = {
  course_id: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  startDate: Scalars['String'];
  studentsCount: Scalars['Int'];
  teacher_id: Scalars['ID'];
};

export type GInfo = {
  Course: GCourse;
  Group: Maybe<GGroup>;
  Student: GStudent;
  admissionDate: Scalars['String'];
  contractState: Scalars['String'];
  course_id: Scalars['ID'];
  group_id: Scalars['ID'];
  isCoursePaid: Scalars['Boolean'];
  isEquipmentPaid: Maybe<Scalars['Boolean']>;
  isGetRobot: Maybe<Scalars['Boolean']>;
  student_id: Scalars['ID'];
};

export type GInfoFilter = {
  admissionDate: InputMaybe<Scalars['String']>;
  admissionDate_neq: InputMaybe<Scalars['String']>;
  contractState: InputMaybe<Scalars['String']>;
  contractState_neq: InputMaybe<Scalars['String']>;
  course_id: InputMaybe<Scalars['ID']>;
  course_id_neq: InputMaybe<Scalars['ID']>;
  group_id: InputMaybe<Scalars['ID']>;
  group_id_neq: InputMaybe<Scalars['ID']>;
  ids: Array<Scalars['ID']>;
  isCoursePaid: InputMaybe<Scalars['Boolean']>;
  isEquipmentPaid: InputMaybe<Scalars['Boolean']>;
  isGetRobot: InputMaybe<Scalars['Boolean']>;
  q: InputMaybe<Scalars['String']>;
  student_id: InputMaybe<Scalars['ID']>;
  student_id_neq: InputMaybe<Scalars['ID']>;
};

export type GInfoInput = {
  admissionDate: Scalars['String'];
  contractState: Scalars['String'];
  course_id: Scalars['ID'];
  group_id: Scalars['ID'];
  isCoursePaid: Scalars['Boolean'];
  isEquipmentPaid: InputMaybe<Scalars['Boolean']>;
  isGetRobot: InputMaybe<Scalars['Boolean']>;
  student_id: Scalars['ID'];
};

export type GListMetadata = {
  count: Maybe<Scalars['Int']>;
};

export type GMutation = {
  createCourse: Maybe<GCourse>;
  createGroup: Maybe<GGroup>;
  createInfo: Maybe<GInfo>;
  createManyCourse: Array<GCourse>;
  createManyGroup: Array<GGroup>;
  createManyInfo: Array<GInfo>;
  createManyParent: Array<GParent>;
  createManySchool: Array<GSchool>;
  createManyStudent: Array<GStudent>;
  createManyTeacher: Array<GTeacher>;
  createParent: Maybe<GParent>;
  createSchool: Maybe<GSchool>;
  createStudent: Maybe<GStudent>;
  createTeacher: Maybe<GTeacher>;
  removeCourse: Maybe<GCourse>;
  removeGroup: Maybe<GGroup>;
  removeInfo: Maybe<GInfo>;
  removeParent: Maybe<GParent>;
  removeSchool: Maybe<GSchool>;
  removeStudent: Maybe<GStudent>;
  removeTeacher: Maybe<GTeacher>;
  updateCourse: Maybe<GCourse>;
  updateGroup: Maybe<GGroup>;
  updateInfo: Maybe<GInfo>;
  updateParent: Maybe<GParent>;
  updateSchool: Maybe<GSchool>;
  updateStudent: Maybe<GStudent>;
  updateTeacher: Maybe<GTeacher>;
};


export type GMutationCreateCourseArgs = {
  equipmentPriceWithRobot: InputMaybe<Scalars['Int']>;
  equipmentPriceWithoutRobot: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  price: Scalars['Int'];
};


export type GMutationCreateGroupArgs = {
  course_id: Scalars['ID'];
  name: Scalars['String'];
  startDate: Scalars['String'];
  studentsCount: Scalars['Int'];
  teacher_id: Scalars['ID'];
};


export type GMutationCreateInfoArgs = {
  admissionDate: Scalars['String'];
  contractState: Scalars['String'];
  course_id: Scalars['ID'];
  group_id: Scalars['ID'];
  isCoursePaid: Scalars['Boolean'];
  isEquipmentPaid: InputMaybe<Scalars['Boolean']>;
  isGetRobot: InputMaybe<Scalars['Boolean']>;
  student_id: Scalars['ID'];
};


export type GMutationCreateManyCourseArgs = {
  data: Array<GCourseInput>;
};


export type GMutationCreateManyGroupArgs = {
  data: Array<GGroupInput>;
};


export type GMutationCreateManyInfoArgs = {
  data: Array<GInfoInput>;
};


export type GMutationCreateManyParentArgs = {
  data: Array<GParentInput>;
};


export type GMutationCreateManySchoolArgs = {
  data: Array<GSchoolInput>;
};


export type GMutationCreateManyStudentArgs = {
  data: Array<GStudentInput>;
};


export type GMutationCreateManyTeacherArgs = {
  data: Array<GTeacherInput>;
};


export type GMutationCreateParentArgs = {
  applyingDate: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  patronymic: Scalars['String'];
  phoneNumber: Scalars['String'];
  secondEmail: Scalars['String'];
  secondPhoneNumber: Scalars['String'];
};


export type GMutationCreateSchoolArgs = {
  district: Scalars['String'];
  name: Scalars['String'];
};


export type GMutationCreateStudentArgs = {
  birthDate: Scalars['String'];
  description: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  parent_id: Scalars['ID'];
  patronymic: Scalars['String'];
  school_id: Scalars['ID'];
};


export type GMutationCreateTeacherArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  lastName: Scalars['String'];
  patronymic: Scalars['String'];
  phone: Scalars['String'];
  post: Scalars['String'];
};


export type GMutationRemoveCourseArgs = {
  id: Scalars['ID'];
};


export type GMutationRemoveGroupArgs = {
  id: Scalars['ID'];
};


export type GMutationRemoveInfoArgs = {
  id: Scalars['ID'];
};


export type GMutationRemoveParentArgs = {
  id: Scalars['ID'];
};


export type GMutationRemoveSchoolArgs = {
  id: Scalars['ID'];
};


export type GMutationRemoveStudentArgs = {
  id: Scalars['ID'];
};


export type GMutationRemoveTeacherArgs = {
  id: Scalars['ID'];
};


export type GMutationUpdateCourseArgs = {
  equipmentPriceWithRobot: InputMaybe<Scalars['Int']>;
  equipmentPriceWithoutRobot: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: InputMaybe<Scalars['String']>;
  price: InputMaybe<Scalars['Int']>;
};


export type GMutationUpdateGroupArgs = {
  course_id: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  name: InputMaybe<Scalars['String']>;
  startDate: InputMaybe<Scalars['String']>;
  studentsCount: InputMaybe<Scalars['Int']>;
  teacher_id: InputMaybe<Scalars['ID']>;
};


export type GMutationUpdateInfoArgs = {
  admissionDate: InputMaybe<Scalars['String']>;
  contractState: InputMaybe<Scalars['String']>;
  course_id: InputMaybe<Scalars['ID']>;
  group_id: InputMaybe<Scalars['ID']>;
  isCoursePaid: InputMaybe<Scalars['Boolean']>;
  isEquipmentPaid: InputMaybe<Scalars['Boolean']>;
  isGetRobot: InputMaybe<Scalars['Boolean']>;
  student_id: InputMaybe<Scalars['ID']>;
};


export type GMutationUpdateParentArgs = {
  applyingDate: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
  firstName: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName: InputMaybe<Scalars['String']>;
  patronymic: InputMaybe<Scalars['String']>;
  phoneNumber: InputMaybe<Scalars['String']>;
  secondEmail: InputMaybe<Scalars['String']>;
  secondPhoneNumber: InputMaybe<Scalars['String']>;
};


export type GMutationUpdateSchoolArgs = {
  district: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: InputMaybe<Scalars['String']>;
};


export type GMutationUpdateStudentArgs = {
  birthDate: InputMaybe<Scalars['String']>;
  description: InputMaybe<Scalars['String']>;
  firstName: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName: InputMaybe<Scalars['String']>;
  parent_id: InputMaybe<Scalars['ID']>;
  patronymic: InputMaybe<Scalars['String']>;
  school_id: InputMaybe<Scalars['ID']>;
};


export type GMutationUpdateTeacherArgs = {
  email: InputMaybe<Scalars['String']>;
  firstName: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  isAdmin: InputMaybe<Scalars['Boolean']>;
  lastName: InputMaybe<Scalars['String']>;
  patronymic: InputMaybe<Scalars['String']>;
  phone: InputMaybe<Scalars['String']>;
  post: InputMaybe<Scalars['String']>;
};

export type GParent = {
  Students: Array<GStudent>;
  applyingDate: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  patronymic: Scalars['String'];
  phoneNumber: Scalars['String'];
  secondEmail: Scalars['String'];
  secondPhoneNumber: Scalars['String'];
};

export type GParentFilter = {
  applyingDate: InputMaybe<Scalars['String']>;
  applyingDate_neq: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
  email_neq: InputMaybe<Scalars['String']>;
  firstName: InputMaybe<Scalars['String']>;
  firstName_neq: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  id_neq: InputMaybe<Scalars['ID']>;
  ids: Array<Scalars['ID']>;
  lastName: InputMaybe<Scalars['String']>;
  lastName_neq: InputMaybe<Scalars['String']>;
  patronymic: InputMaybe<Scalars['String']>;
  patronymic_neq: InputMaybe<Scalars['String']>;
  phoneNumber: InputMaybe<Scalars['String']>;
  phoneNumber_neq: InputMaybe<Scalars['String']>;
  q: InputMaybe<Scalars['String']>;
  secondEmail: InputMaybe<Scalars['String']>;
  secondEmail_neq: InputMaybe<Scalars['String']>;
  secondPhoneNumber: InputMaybe<Scalars['String']>;
  secondPhoneNumber_neq: InputMaybe<Scalars['String']>;
};

export type GParentInput = {
  applyingDate: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  patronymic: Scalars['String'];
  phoneNumber: Scalars['String'];
  secondEmail: Scalars['String'];
  secondPhoneNumber: Scalars['String'];
};

export type GQuery = {
  Course: GCourse;
  Group: GGroup;
  Info: GInfo;
  Parent: GParent;
  School: GSchool;
  Student: GStudent;
  Teacher: GTeacher;
  _allCoursesMeta: Maybe<GListMetadata>;
  _allGroupsMeta: Maybe<GListMetadata>;
  _allInfosMeta: Maybe<GListMetadata>;
  _allParentsMeta: Maybe<GListMetadata>;
  _allSchoolsMeta: Maybe<GListMetadata>;
  _allStudentsMeta: Maybe<GListMetadata>;
  _allTeachersMeta: Maybe<GListMetadata>;
  allCourses: Array<GCourse>;
  allGroups: Array<GGroup>;
  allInfos: Array<GInfo>;
  allParents: Array<GParent>;
  allSchools: Array<GSchool>;
  allStudents: Array<GStudent>;
  allTeachers: Array<GTeacher>;
};


export type GQueryCourseArgs = {
  id: Scalars['ID'];
};


export type GQueryGroupArgs = {
  id: Scalars['ID'];
};


export type GQueryInfoArgs = {
  id: Scalars['ID'];
};


export type GQueryParentArgs = {
  id: Scalars['ID'];
};


export type GQuerySchoolArgs = {
  id: Scalars['ID'];
};


export type GQueryStudentArgs = {
  id: Scalars['ID'];
};


export type GQueryTeacherArgs = {
  id: Scalars['ID'];
};


export type GQuery_AllCoursesMetaArgs = {
  filter: InputMaybe<GCourseFilter>;
  page: InputMaybe<Scalars['Int']>;
  perPage: InputMaybe<Scalars['Int']>;
};


export type GQuery_AllGroupsMetaArgs = {
  filter: InputMaybe<GGroupFilter>;
  page: InputMaybe<Scalars['Int']>;
  perPage: InputMaybe<Scalars['Int']>;
};


export type GQuery_AllInfosMetaArgs = {
  filter: InputMaybe<GInfoFilter>;
  page: InputMaybe<Scalars['Int']>;
  perPage: InputMaybe<Scalars['Int']>;
};


export type GQuery_AllParentsMetaArgs = {
  filter: InputMaybe<GParentFilter>;
  page: InputMaybe<Scalars['Int']>;
  perPage: InputMaybe<Scalars['Int']>;
};


export type GQuery_AllSchoolsMetaArgs = {
  filter: InputMaybe<GSchoolFilter>;
  page: InputMaybe<Scalars['Int']>;
  perPage: InputMaybe<Scalars['Int']>;
};


export type GQuery_AllStudentsMetaArgs = {
  filter: InputMaybe<GStudentFilter>;
  page: InputMaybe<Scalars['Int']>;
  perPage: InputMaybe<Scalars['Int']>;
};


export type GQuery_AllTeachersMetaArgs = {
  filter: InputMaybe<GTeacherFilter>;
  page: InputMaybe<Scalars['Int']>;
  perPage: InputMaybe<Scalars['Int']>;
};


export type GQueryAllCoursesArgs = {
  filter: InputMaybe<GCourseFilter>;
  page: InputMaybe<Scalars['Int']>;
  perPage: InputMaybe<Scalars['Int']>;
  sortField: InputMaybe<Scalars['String']>;
  sortOrder: InputMaybe<Scalars['String']>;
};


export type GQueryAllGroupsArgs = {
  filter: InputMaybe<GGroupFilter>;
  page: InputMaybe<Scalars['Int']>;
  perPage: InputMaybe<Scalars['Int']>;
  sortField: InputMaybe<Scalars['String']>;
  sortOrder: InputMaybe<Scalars['String']>;
};


export type GQueryAllInfosArgs = {
  filter: InputMaybe<GInfoFilter>;
  page: InputMaybe<Scalars['Int']>;
  perPage: InputMaybe<Scalars['Int']>;
  sortField: InputMaybe<Scalars['String']>;
  sortOrder: InputMaybe<Scalars['String']>;
};


export type GQueryAllParentsArgs = {
  filter: InputMaybe<GParentFilter>;
  page: InputMaybe<Scalars['Int']>;
  perPage: InputMaybe<Scalars['Int']>;
  sortField: InputMaybe<Scalars['String']>;
  sortOrder: InputMaybe<Scalars['String']>;
};


export type GQueryAllSchoolsArgs = {
  filter: InputMaybe<GSchoolFilter>;
  page: InputMaybe<Scalars['Int']>;
  perPage: InputMaybe<Scalars['Int']>;
  sortField: InputMaybe<Scalars['String']>;
  sortOrder: InputMaybe<Scalars['String']>;
};


export type GQueryAllStudentsArgs = {
  filter: InputMaybe<GStudentFilter>;
  page: InputMaybe<Scalars['Int']>;
  perPage: InputMaybe<Scalars['Int']>;
  sortField: InputMaybe<Scalars['String']>;
  sortOrder: InputMaybe<Scalars['String']>;
};


export type GQueryAllTeachersArgs = {
  filter: InputMaybe<GTeacherFilter>;
  page: InputMaybe<Scalars['Int']>;
  perPage: InputMaybe<Scalars['Int']>;
  sortField: InputMaybe<Scalars['String']>;
  sortOrder: InputMaybe<Scalars['String']>;
};

export type GSchool = {
  Students: Array<GStudent>;
  district: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type GSchoolFilter = {
  district: InputMaybe<Scalars['String']>;
  district_neq: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  id_neq: InputMaybe<Scalars['ID']>;
  ids: Array<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  name_neq: InputMaybe<Scalars['String']>;
  q: InputMaybe<Scalars['String']>;
};

export type GSchoolInput = {
  district: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type GStudent = {
  Infos: Array<GInfo>;
  Parent: GParent;
  School: GSchool;
  birthDate: Scalars['String'];
  description: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  parent_id: Scalars['ID'];
  patronymic: Scalars['String'];
  school_id: Scalars['ID'];
};

export type GStudentFilter = {
  birthDate: InputMaybe<Scalars['String']>;
  birthDate_neq: InputMaybe<Scalars['String']>;
  description: InputMaybe<Scalars['String']>;
  description_neq: InputMaybe<Scalars['String']>;
  firstName: InputMaybe<Scalars['String']>;
  firstName_neq: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  id_neq: InputMaybe<Scalars['ID']>;
  ids: Array<Scalars['ID']>;
  lastName: InputMaybe<Scalars['String']>;
  lastName_neq: InputMaybe<Scalars['String']>;
  parent_id: InputMaybe<Scalars['ID']>;
  parent_id_neq: InputMaybe<Scalars['ID']>;
  patronymic: InputMaybe<Scalars['String']>;
  patronymic_neq: InputMaybe<Scalars['String']>;
  q: InputMaybe<Scalars['String']>;
  school_id: InputMaybe<Scalars['ID']>;
  school_id_neq: InputMaybe<Scalars['ID']>;
};

export type GStudentInput = {
  birthDate: Scalars['String'];
  description: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  parent_id: Scalars['ID'];
  patronymic: Scalars['String'];
  school_id: Scalars['ID'];
};

export type GTeacher = {
  Groups: Array<GGroup>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isAdmin: Scalars['Boolean'];
  lastName: Scalars['String'];
  patronymic: Scalars['String'];
  phone: Scalars['String'];
  post: Scalars['String'];
};

export type GTeacherFilter = {
  email: InputMaybe<Scalars['String']>;
  email_neq: InputMaybe<Scalars['String']>;
  firstName: InputMaybe<Scalars['String']>;
  firstName_neq: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  id_neq: InputMaybe<Scalars['ID']>;
  ids: Array<Scalars['ID']>;
  isAdmin: InputMaybe<Scalars['Boolean']>;
  lastName: InputMaybe<Scalars['String']>;
  lastName_neq: InputMaybe<Scalars['String']>;
  patronymic: InputMaybe<Scalars['String']>;
  patronymic_neq: InputMaybe<Scalars['String']>;
  phone: InputMaybe<Scalars['String']>;
  phone_neq: InputMaybe<Scalars['String']>;
  post: InputMaybe<Scalars['String']>;
  post_neq: InputMaybe<Scalars['String']>;
  q: InputMaybe<Scalars['String']>;
};

export type GTeacherInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isAdmin: Scalars['Boolean'];
  lastName: Scalars['String'];
  patronymic: Scalars['String'];
  phone: Scalars['String'];
  post: Scalars['String'];
};
