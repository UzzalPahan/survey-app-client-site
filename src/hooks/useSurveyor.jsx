import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useSurveyor = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isSurveyor, isPending: isSurveyorLoading } = useQuery({
        queryKey: [user?.email, 'isSurveyor'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is surveyor', user)
            const res = await axiosSecure.get(`/users/surveyor/${user.email}`);
            return res.data?.surveyor;
        }
    })

    console.log(isSurveyor, 'is surveyor');
    return [isSurveyor, isSurveyorLoading]
};

export default useSurveyor;