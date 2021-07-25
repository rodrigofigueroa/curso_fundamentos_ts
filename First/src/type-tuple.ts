export {}

let user: [ number, string ]
    user = [ 2, 'theStrokes' ]

let user2: [ number, string, boolean ]
    user2 = [ 1, 'user2', true ]

let tuple: [ number, string ][] = []
    tuple.push( [ 1, 'luix' ] )
    tuple.push( [ 2, 'luix2' ] )
    tuple.push( [ 3, 'lensQueen' ] )

console.log( tuple )

tuple[ 1 ][ 1 ] =  tuple[ 1 ][ 1 ].concat( '002' )

console.log( tuple );