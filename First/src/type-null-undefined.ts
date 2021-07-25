
let oneNull: null = null
// oneNull = 'all' // Error

let anotherNull = null

anotherNull = 'This is a null string'

let undefinedVariable: undefined = undefined

// undefinedVariable = '' //Error

let anotherUndefinedVariable = undefined

anotherUndefinedVariable = 'undefined string'

// --strictNullChecks

let strictCheck: string = ''

// strictCheck = null       // Error
// strictCheck = undefined  // Error