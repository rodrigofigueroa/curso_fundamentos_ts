import { Album } from './album'
export class User {
  
  protected nameUser: string
  protected lastName: string
  protected album: Album[]

  constructor( nameUser: string, lastName: string ){
    this.nameUser = nameUser
    this.lastName = lastName
    this.album    = []
  }

  addAlbum( album: Album ){
    this.album.push( album )
  }

  deleteAlbum( albumDelete: Album ){
    const index = this.album.findIndex( i => i.id === albumDelete.id )
    let deleteItem
    if( index >= 0 ){
      deleteItem = this.album.splice( index, 1 )
    }
    return deleteItem
  }  
}