import { useDispatch, useSelector } from "react-redux"
import { downloadStart } from "../saga+slice+API/weatherData.slice"

import {
    selectIsDownloading,
    selectDownloadErr,
    selectedCity
  } from "../saga+slice+API/weatherData.slice";


export default function useExportbtn() {
    const dispatch = useDispatch();
    const cityName = useSelector(selectedCity);
    const isDownloading = useSelector(selectIsDownloading);
    const Error = useSelector(selectDownloadErr)

    const handleDownload = () => {
        dispatch(downloadStart({cityName}))
    } 

    return {
        isDownloading,
        Error,
        handleDownload
    }
}
