import "./../Styles/UserManagement.css";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../../../ReduxStorage/UserManagementStore.js";
import DisplayUpdateState from "./DisplayUpdateState.jsx";

const UserManagement = () => {
    const users = useSelector(state => state.userManagementReducer);
    const [update, setUpdate] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers(null))
    }, []);



    return (
        <div className={"user-management-page"}>
            <div className={"user-display-title title-user-management"}>
                <div>ID</div>
                <div>Email</div>
                <div>Position</div>
                <div>Role</div>
            </div>
            <div className={"user-field-spacer"}>
            {users.length !== 0 ? users.length >= 1 && !users.status ?
                    users.map(({userId, email, position, roles}, index) =>
                        <DisplayUpdateState key={index}
                            userId={userId} position={position} role={roles} email={email} index={index} />
                    )
                    : <div>Loading</div>
                : <div>Error</div>
            }
            </div>
            <Button className={"apply-button"} onClick={() => setUpdate(true)}>Apply</Button>
            <Button onClick={() => window.location.reload()} className={"cancel-changes-button"}>Cancel</Button>
        </div>
    );
};

export default UserManagement;