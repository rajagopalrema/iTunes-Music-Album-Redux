import { Dispatch, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { IMusicAlbumData } from "../interface/interface";
import { fetchMusicAlbumData } from "../redux/actions/Action";
import InfiniteScroll from "react-infinite-scroller";
import DisplayTable from "../components/DisplayTable";

function DisplayMusicData() {

  const musicalAlbumData: IMusicAlbumData[] = useSelector((state: any) => (state.musicalData.musicalData));
  let musicalAlbumDataNotFound:boolean = useSelector((state: any) => (state.musicalData.NoDataFound));
  let musicalAlbumDataError:boolean = useSelector((state: any) => (state.musicalData.errMsg))
  let loading = useSelector((state: any) => (state.musicalData.loading))
  const dispatch: Dispatch<any> = useDispatch();
  const [query, setQuery] = useState<string>('');
  const [hasMore, setHasMore] = useState(true);
  const [dataIndex, setDataIndex] = useState<number>(0);
  console.log(musicalAlbumDataNotFound);
  const itemsPerPage: number = 10;
  const handleSearch = (e) => {
    setQuery(e.target.value);
  }

  useEffect(() => {
    dispatch(fetchMusicAlbumData('null'))
  }, [dispatch]);

  useEffect(() => {
    setDataIndex(itemsPerPage);
    if (musicalAlbumData.length > itemsPerPage) setHasMore(true);
  }, [musicalAlbumData]);

  const musicAlbumDataLoad = () => {
    if (dataIndex >= musicalAlbumData.length) {
      setHasMore(false);
    }
    else {
      setTimeout(() => {
        setDataIndex(dataIndex + itemsPerPage);
      }, 500)
    }
  }

  const searchString = () => {
    query.length > 0 ?
      dispatch(fetchMusicAlbumData(query)) : dispatch(fetchMusicAlbumData('null'));
      musicalAlbumDataNotFound = false;
  }

  const getMusicDataList = (): IMusicAlbumData[] => {
    return musicalAlbumData.slice(0, dataIndex);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h5 className="display-6 text-muted"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/ITunes_logo.svg/2039px-ITunes_logo.svg.png" style={{ width: '80px', height: '80px', padding: '20px 20px 20px 20px' }}></img><strong>itunes - Music Album Search</strong></h5>
            <div className="input-group w-95 ">
              <input type="search" onChange={handleSearch} className="form-control rounded" placeholder="Enter artists, albums and/or songs to search..." aria-label="Search" aria-describedby="search-addon" />
              <button type="button" onClick={searchString} className="btn btn-danger">Search</button>
            </div>
          </div>
        </div>
      </div>
      
      {musicalAlbumData.length === 0 && !loading ? (
        <div className="d-flex justify-content-center">
          <p><h2 style={{ paddingTop: '100px' }}>Ooops...No result found...</h2> </p>
        </div>
      ) : (
        <div>
          <InfiniteScroll
            pageStart={0}
            initialLoad={false}
            loadMore={musicAlbumDataLoad}
            hasMore={hasMore}
            loader={<div className="d-flex justify-content-center">
              <div className="spinner-border text-danger" role="status">
                <span className="sr-only"></span>
              </div>
            </div>}
            useWindow={true}>
            <DisplayTable musicAlbumList={getMusicDataList()} />
          </InfiniteScroll>
          <div>
            {musicalAlbumDataError && (<p>{musicalAlbumDataError}</p>)}
          </div>
        </div>
      )}
    </div>
  )
}

export default DisplayMusicData;

