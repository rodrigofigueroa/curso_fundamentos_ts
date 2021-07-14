export {}

// let idUser: number | string
//     idUser = 10
//     idUser = '10'

// function getidUser( id: number | string ) {
//   return 'Project M'
// }

// getidUser( 10 )
// getidUser( '10' )


// Using type

type idUser =  number | string

type Username = string 

function getidUser( id: idUser) : Username {
  return 'Project M'
}
console.log(
  getidUser( 10 ),
  getidUser( '10' )
);

// Adding s tring

type PictureSize = '100x100' | '300x300' | '500x500'

let smalSize: PictureSize = '100x100'
// let mediumSize: PictureSize = '600x600' // Error

