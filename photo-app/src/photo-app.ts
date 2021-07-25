

export enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

export class User {
  
  protected nameUser: string
  protected lastName: string

  constructor( nameUser: string, lastName: string ){
    this.nameUser = nameUser
    this.lastName = lastName
  }
  
}

export class Item {
  protected id: number
  protected title: string
  constructor( id: number, title: string){
    this.id = id
    this.title = title
  }
}

export class Picture extends Item{
  // Properties
    private size: PhotoOrientation
  public constructor( id: number, title: string, size: PhotoOrientation ){
    super( id, title )
    this.size   = size
  }

  private toString(): string{
    return `[{ id: ${ this.id }, title: ${ this.title }, size: ${ this.size } }]`
  }

}

export class Album extends Item{
  // Properties
    private pictures: Picture[]

    public constructor( id: number, title: string ){
      super( id, title )
      this.pictures = []
    }

    public addPictures( picture: Picture ){
      this.pictures.push( picture )
    }
}
