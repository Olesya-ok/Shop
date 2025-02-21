import { useSelector } from "react-redux";

export function useAuth() {
    const authState = useSelector((state) => state.auth);
    console.log("Redux auth state:", authState);
    return Boolean(authState?.user);
}
