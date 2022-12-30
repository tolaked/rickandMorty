import axios from "axios"

export const axiosGetConfig = async (url, data) => {
    return axios({
        method: "get",
        url: url,
        data: data
    })
}