import { Item } from './item'
import { Picture } from './picture'

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
