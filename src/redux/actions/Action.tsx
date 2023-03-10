import { Dispatch } from 'react';
import {
    GET_MUSIC_ALBUM_ERROR,
    GET_MUSIC_ALBUM_START,
    GET_MUSIC_ALBUM_NO_DATA,
    GET_MUSIC_ALBUM_SUCCESS
} from '../constants/MusicAlbumActionTypes';
import { IMusicAlbumData} from '../../interface/interface';
import axios from "axios";

export const GetMusicAlbumDataStart = (loader: boolean) => ({
    type: GET_MUSIC_ALBUM_START,
    loader
});
export const GetMusicAlbumDataSuccess = (musicAlbumData: IMusicAlbumData) => ({
    type: GET_MUSIC_ALBUM_SUCCESS,
    musicAlbumData
});

export const MusicDataNotFound = (NoDataFound: boolean) => ({
    type: GET_MUSIC_ALBUM_NO_DATA,
    NoDataFound
})

export const MusicDataError = (errMsg: boolean) => ({
    type: GET_MUSIC_ALBUM_ERROR,
    errMsg
})

export function fetchMusicAlbumData(query:String) {
    return function (dispatch: Dispatch<any>) {
        dispatch(GetMusicAlbumDataStart(true));
        axios
            .get("https://itunes.apple.com/search?term="+query+"&limit=200")
            .then(response => {
                const musicData = response.data.results;
                if (musicData.length) {
                    dispatch(MusicDataNotFound(false));
                }
                else {
                    dispatch(MusicDataNotFound(true));
                }
                dispatch(GetMusicAlbumDataSuccess(musicData));
            }).catch((error) => {
                dispatch(MusicDataError(error.message));
            });
    };
};

