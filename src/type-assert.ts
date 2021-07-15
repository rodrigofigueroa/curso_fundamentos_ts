
export {}

let username: any

    username = 'luixaviles'
  
// TS Trust in ME!

let message: string = ( <string>username ).length > 5 
              ? `Welcome ${ username }` 
              : 'Sorry you need to sign up'

console.log( 'Length of username', message )

let userNameId: any = 'Luixaviles'
    userNameId = ( <string>userNameId ).concat(' :D')
message = ( userNameId as string ).substring( 0, 4 )

console.log( message )