import { GET_MUSIC_ALBUM_ERROR, GET_MUSIC_ALBUM_NO_DATA, GET_MUSIC_ALBUM_START, GET_MUSIC_ALBUM_SUCCESS } from '../constants/MusicAlbumActionTypes'

const initialState = {
    musicalData: [],
    loading: false,
    error: null,
};

const musicalbumreducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_MUSIC_ALBUM_START:
            return {
                ...state,
                loading: true,
                error:false
            };
        case GET_MUSIC_ALBUM_SUCCESS:
            return {
                ...state,
                loading: false,
                musicalData: action.musicAlbumData,
                error:false
            };
            case GET_MUSIC_ALBUM_NO_DATA:
            return {
                ...state,
                loading: true,
                musicalData: action.NoDataFound,
                error:false
            };
        case GET_MUSIC_ALBUM_ERROR:
            return {
                loading: false,
                musicalData: action.errMsg,
                error:true
            };

        default:
            return state;
    }
}

export default musicalbumreducer;