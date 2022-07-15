import { randDate } from './generators'



let grId = 0
let crId = 0

class Group {
  public id: number
  public startDate: Date

  constructor( public name: string ) {
    this.id = ++grId
    this.startDate = randDate( /*'2020-01-10', '2022-05-01'*/ )
  }
}

// class Course {
//   public id: number
//   public price: number
//   public equipmentPriceWithRobot?: number
//   public equipmentPriceWithoutRobot?: number
//
//   constructor( public name: string, public groups: Group[] ) {
//     this.id = ++crId
//     this.price = random( 2000, 5000 )
//     this.equipmentPriceWithRobot = name.includes( 'Робофабрика' ) && random( 1000, 2000 ) || undefined
//     this.equipmentPriceWithoutRobot = name.includes( 'Робофабрика' ) && random( 2500, 3000 ) || undefined
//   }
// }

export const courses: [ string, string[] ][] = [
  [ '2D', [ '2D.1' ] ],
  [ '3D', [ '3D.1' ] ],
  [ 'Виртуальная реальность', [ 'VR1', 'VR2', 'VR3' ] ],
  [ 'Мультипликация', [ 'Мульт.1', 'Мульт.2' ] ],
  [ 'Прототипирование', [ 'Прототип1' ] ],
  [ 'Робофабрика 1', [ 'Робо1.1', 'Робо1.2', 'Робо1.3', 'Робо1.4' ] ],
  [ 'Робофабрика 2', [ 'Робо2.1', 'Робо2.2', 'Робо2.3' ] ],
  [ 'Робофабрика 3', [ 'Робо3.1', 'Робо3.2' ] ],
  [ 'Android', [ 'Android' ] ],
  [ 'C#', [ 'програм.1.C#' ] ],
  [ 'Python', [ 'програм.2.Python', 'програм.3.Python' ] ],
]