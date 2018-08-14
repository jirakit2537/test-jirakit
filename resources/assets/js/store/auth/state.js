
import { getLocalUser } from "./auth";

const user = getLocalUser();
export default {

    currentUser: user,
    isLoggedIn: !!user,
    loading: false,
    auth_error: null,

}
