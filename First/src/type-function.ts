
// Js Function()

// function createPicture( title, date, size ){
//   // code
// }

// TS function 
type sizePicture = '100x100' | '500x500' | '1000x1000'

const createPicture = ( title: string, date: string, size: sizePicture ): void => {
  console.log( `Creating Picture: ${ title } date: ${ date } size: ${ size }` )
}

// createPicture( 'Park', '05-04-2020', '500x500' )

// Option

const createPictureOptions = ( title?: string, date?: string, size?: sizePicture ): void => {
  console.log( `Creating Picture: ${ title } date: ${ date } size: ${ size }` )
}

// createPictureOptions( 'Park', '05-04-2020', '500x500' )
// createPictureOptions( 'Park', '05-04-2020',  )
// createPictureOptions( 'Park' )
// createPictureOptions( )

const createObjectPicture = ( title: string, date: string, size: sizePicture ): object => {
  return { title, date, size }
}
console.log(
  createObjectPicture( 'Park', '05-04-2020', '500x500' )
)

// return variables

const createError = ( code: number, error: string): never | string => {
  if( error !== 'error' ){
    return `Everything looks great!`
  }else{
    throw new Error( `Message: ${ error } error code: ${ code }` )
  }
}

console.log(
  createError( 200, 'ok')
);

try{
  console.log(
    createError( 404, 'error' )
  );
}catch( e ){
  // console.log( e )
}finally{
  console.log('end');
}