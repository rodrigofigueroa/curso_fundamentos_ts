
export {}

enum PictureSize {
  Landscape,
  Square,
  Portrait
}

class Picture {
  // Properties
    private _id: number
    #title: string
    private _size: PictureSize

  public constructor( id: number, title: string, size: PictureSize ){
    this._id     = id
    this.#title  = title
    this._size   = size
    console.log(this.#title);
  }

  get id(){
    return this._id
  }

  set id( id: number ){
    this._id = id
  }

  get title(){
    return this.#title
  }

  set title( title: string ){
    this.#title = title
    console.log( this.#title )
  }

  get size(){
    return this._size
  }

  set size( s: PictureSize ){
    this._size = s
  }  

  private toString(): string{
    return `[{ id: ${ this.id }, title: ${ this.title }, size: ${ this.size } }]`
  }

}

class Album {
  // Properties
    private _id: number
    private _title: string
    private pictures: Picture[]

    public constructor( id: number, title: string ){
      this._id       = id
      this._title    = title
      this.pictures = []
    }

    get id(){
      return this._id
    }

    set id( id: number ){
      this._id = id
    }

    get title(){
      return this._title
    }

    set title( t: string ){
      this._title = t
    }

    public addPictures( picture: Picture ){
      this.pictures.push( picture )
    }
}

const album: Album = new Album( 1, 'Finn and Jake ALbum' )
const picture: Picture = new Picture( 1, 'Jake and Me', PictureSize.Landscape )
const picture2: Picture = new Picture( 2, 'Jake playing', PictureSize.Square )

album.addPictures( picture )
album.addPictures( picture2 )

console.log( 'album', album )

// public

picture2.id = 200  // Works because if the get
picture2.title = 'Another Title' // Works because of set

album.id = 250 // Works because of get
album.title = 'ANother xD album' // Works because of set

console.log( 'album', album )
console.log( 'album', picture2 )

