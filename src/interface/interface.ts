export interface IMusicAlbumData{
    artistId:number,
    wrapperType: string,
    kind: string,
    collectionId: number,
    trackid: number,
    artistName: string,
    collectionName : string,
    trackName: string,
    collectionCensoredName: string,
    artworkUrl100:string,
    artworkUrl30:string,
    artworkUrl160:string,
    collectionPrice:string,
    country:string,
    primaryGenreName:string,
    trackCensoredName:string,
    releaseDate:string,
    previewUrl:string,
    trackViewUrl:string
}

export interface IMusicDataError{
    type:boolean,
    error:string
}