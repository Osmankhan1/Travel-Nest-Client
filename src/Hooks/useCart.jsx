import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "./useAxiosSequre";
import useAuth from "../Provider/useAuth";


const useCart = () => {
    // tan stack query
    const axiosSequre = useAxiosSequre()
    const {user } = useAuth();
    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSequre.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart, refetch]
   
};

export default useCart;