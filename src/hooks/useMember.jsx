import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useMember = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isMember, isPending: isMemberLoading } = useQuery({
        queryKey: [user?.email, 'isMember'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is Member', user)
            const res = await axiosSecure.get(`/users/member/${user.email}`);
            return res.data?.member;
        }
    })

    // console.log(isSurveyor, 'is surveyor');
    return [isMember, isMemberLoading]
};

export default useMember;