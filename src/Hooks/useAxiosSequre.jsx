import axios from "axios";

 const axiosSequre = axios.create({
    baseURL: 'https://travel-nest-server.vercel.app'
})
const useAxiosSequre = () => {

    return axiosSequre
};

export default useAxiosSequre;