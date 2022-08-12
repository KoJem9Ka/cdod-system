class PathClass {
  readonly Root = '/'
  readonly Login = `${ this.Root }login`

  readonly Students = `${ this.Root }students`
  readonly Schedule = `${ this.Root }schedule`
  readonly Courses = `${ this.Root }courses`
  readonly Groups = `${ this.Root }groups`
  readonly Notifications = `${ this.Root }notifications`
  readonly Teachers = `${ this.Root }teachers`
  readonly Payment = `${ this.Root }payment`

  readonly Default = this.Students
}

export const AbsolutePath = new PathClass()