import axios from "axios";


const axiosPublic = axios.create({
    baseURL: "http://localhost:3000/api"
})
// https://pdfmagic-bice.vercel.app/api

const useAxiosPubic = () => {
    return axiosPublic;
};

export default useAxiosPubic;