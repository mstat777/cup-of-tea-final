import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signOut } from "../../../../store/slices/user";


function Signout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(signOut());
        navigate("/");
    }, [dispatch, navigate, signOut]);

    return null;
}

export default Signout;
