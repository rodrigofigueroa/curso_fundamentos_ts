

// const landscape = 0
// const portrait  = 1
// const square    = 2
// const panorama  = 3

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape
// console.log(  landscape )

enum PictueOrientation {
  Landscape = 0,
  Portrait,
  Square,
  Panorama
}

// console.log(  PictueOrientation.Portrait )

enum PictueOrientation2 {
  Landscape = 10,
  Portrait,
  Square,
  Panorama
}

// console.log( PictueOrientation2.Square );

enum Countries {
  Mexico = 'mex',
  Colombia = 'col',
  EEUU = 'usa',
  Canada = 'can'
}

const country: Countries = Countries.Canada
console.log( country )