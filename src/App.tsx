import { Dispatch, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { IMusicAlbumData } from "./interface/interface";
import { fetchMusicAlbumData } from "./redux/actions/Action";
import InfiniteScroll from "react-infinite-scroller";
import Distable from "./components/DisplayTable";
import DisplayMusicData from "./components/DisplayMusicData";

function App() {

  return(
    <div>
      <DisplayMusicData />
    </div>
  )

}
export default App;

//   const musicalAlbumData: IMusicAlbumData[] = useSelector((state: any) => (state.musicalData.musicalData));
//   const musicalAlbumDataNotFound = useSelector((state: any) => (state.musicalData.NoDataFound));
//   const musicalAlbumDataError = useSelector((state: any) => (state.musicalData.errMsg))
//   const dispatch: Dispatch<any> = useDispatch();
//   const [query, setQuery] = useState<string>('');
//   const [hasMore, setHasMore] = useState(true);
//   const [dataIndex, setDataIndex] = useState<number>(0);

//   const itemsPerPage: number = 10;
//   console.log("query value " + query);
//   const handleSearch = (e) => {
//     setQuery(e.target.value);
//   }

//   useEffect(() => {
//     dispatch(fetchMusicAlbumData('null'))
//   }, [dispatch]);


//   useEffect(() => {
//     setDataIndex(itemsPerPage);
//     if (musicalAlbumData.length > itemsPerPage) setHasMore(true);
//   }, [musicalAlbumData]);

//   const musicAlbumDataLoad = () => {
//     if (dataIndex >= musicalAlbumData.length) {
//       setHasMore(false);
//     }
//     else {
//       setTimeout(() => {
//         setDataIndex(dataIndex + itemsPerPage);
//       }, 500)
//     }
//   }

//   const searchString = () => {
//     query.length > 0 ?
//       dispatch(fetchMusicAlbumData(query)) : dispatch(fetchMusicAlbumData('null'));
//   }

//   const tableRows = musicalAlbumData.map((info) => {
//     return (
//       <tr>
//         <td>{info.artistName}</td>
//         <td>{info.trackName}</td>
//         <td>{info.collectionName}</td>
//       </tr>
//     );
//   });

//   const getMusicDataList = (): IMusicAlbumData[] => {
//     return musicalAlbumData.slice(0, dataIndex);
//   }
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="jumbotron jumbotron-fluid">
//           <div className="container">
//             <h5 className="display-6 text-muted"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/ITunes_logo.svg/2039px-ITunes_logo.svg.png" style={{ width: '80px', height: '80px', padding: '20px 20px 20px 20px' }}></img><strong>itunes - Music Album Search</strong></h5>
//             <div className="input-group w-75 ">
//               <input type="search" onChange={handleSearch} className="form-control rounded" placeholder="Enter artists, albums and/or songs to search..." aria-label="Search" aria-describedby="search-addon" />
//               <button type="button" onClick={searchString} className="btn btn-danger">Search</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {musicalAlbumData.length === 0 ? (
//         <div className="d-flex justify-content-center">
//           <div className="spinner-border text-danger m-5" role="status">
//             <span className="sr-only"></span>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <InfiniteScroll
//             pageStart={0}
//             initialLoad={false}
//             loadMore={musicAlbumDataLoad}
//             hasMore={hasMore}
//             loader={<div className="d-flex justify-content-center">
//               <div className="spinner-border text-danger" role="status">
//                 <span className="sr-only"></span>
//               </div>
//             </div>}
//             useWindow={true}>
//             <Distable musicAlbumList={getMusicDataList()} />
//           </InfiniteScroll>
//           <div>
//             {musicalAlbumDataNotFound && (<p>No Result Found</p>)}
//           </div>
//           <div>
//             {musicalAlbumDataError && (<p>{musicalAlbumDataError}</p>)}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default App;

