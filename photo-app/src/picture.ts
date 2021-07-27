import { Item } from './item'
import { PhotoOrientation } from './photo-orientation'
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