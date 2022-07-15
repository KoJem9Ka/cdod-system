import { generate } from 'json-lint-d-ts'
import fs           from 'fs'
import path         from 'path'



export const chance = ( num: number ): boolean => Math.random() * 100 <= num


export const genTypes = ( jsonStr: object, filePathName: string, name?: string ) => {
  const fileName = path.basename( filePathName ).replace( /\.[^/.]+$/, '' )
  const filePath = path.dirname( filePathName )
  filePath !== '.' && fs.mkdirSync( filePathName, { recursive: true } )
  generate( jsonStr, { name: name ?? fileName, shouldOutput: true, outputPath: filePathName } )
}