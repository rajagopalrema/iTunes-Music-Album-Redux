import { IMusicAlbumData } from "../interface/interface"

const DisplayTable = ({ musicAlbumList }: { musicAlbumList: IMusicAlbumData[] }) => {
    const tableRows = musicAlbumList.map((info) => {
        return (
            <div className="card mt-3 " style={{width: '100%;',backgroundColor:'white'}} >
                    <div className="col-sm-16">
                    <h5 className="card-header fw-bolder" style={{backgroundColor:'#5A5A5A',color:'#ffffff'}}>{info.collectionName}</h5>
                    <div className="card" style={{width: '100%;',backgroundColor:'#ffffff'}} >
                            <div className="card-body " style={{backgroundColor:'#ffffff'}} >
                                <div className="row">
                                    <div className="col-sm-5">
                                        <h5 className="card-title fw-bold" style={{color:'#1E2F97'}}>{info.artistName}</h5>
                                        <span style={{color:'#1E2F97'}}>Country : {info.country}</span>
                                        <p className="fs-6 text">Price: ${info.collectionPrice}</p>
                                        <a href={info.previewUrl} rel="noreferrer" target="_blank" >
                                            <img style={{ width: '80px', height: '80px' }} src="data:image/jpeg;base64,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" alt="Play Song..."></img>
                                        </a>
                                        
                                    </div>
                                    <div className="col-sm-4">
                                        <p className="fs-6 text">{info.primaryGenreName}</p>
                                        <p className="card-text fs-6 text">{info.trackCensoredName}</p>
                                        <span className="fs-6 text"><a href={info.trackViewUrl} className="link-danger" target="_blank">View Track</a></span>
                                    </div>
                                    <div className="col-sm-3 text-right">
                                    <img style={{ width: '150px', height: '150px'}}  src={info.artworkUrl100} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    });
    return (
        <div className="container">
            <table className="table table-striped">
                {tableRows}
            </table>
        </div>
    )
}
export default DisplayTable

