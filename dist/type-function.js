"use strict";
// Js Function()
const createPicture = (title, date, size) => {
    console.log(`Creating Picture: ${title} date: ${date} size: ${size}`);
};
// createPicture( 'Park', '05-04-2020', '500x500' )
// Option
const createPictureOptions = (title, date, size) => {
    console.log(`Creating Picture: ${title} date: ${date} size: ${size}`);
};
// createPictureOptions( 'Park', '05-04-2020', '500x500' )
// createPictureOptions( 'Park', '05-04-2020',  )
// createPictureOptions( 'Park' )
// createPictureOptions( )
const createObjectPicture = (title, date, size) => {
    return { title, date, size };
};
console.log(createObjectPicture('Park', '05-04-2020', '500x500'));
// return variables
const createError = (code, error) => {
    if (error !== 'error') {
        return `Everything looks great!`;
    }
    else {
        throw new Error(`Message: ${error} error code: ${code}`);
    }
};
console.log(createError(200, 'ok'));
try {
    console.log(createError(404, 'error'));
}
catch (e) {
    // console.log( e )
}
finally {
    console.log('end');
}
