import { UIButton, UIAvatar } from "@components/UI";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { clearUserData } from "@store/reducers/userReducer";
import { useNavigate } from "react-router";
import { routesPath } from "../../../api/routes";
import { rolesTranslation } from "@api/roles";
import { ReactComponent as UserIcon } from "@public/images/username.svg";
import { ReactComponent as RolesIcon } from "@public/images/roles.svg";
import { ReactComponent as EmailIcon } from "@public/images/emailicon.svg";
import { ReactComponent as CalendarIcon } from "@public/images/calendar.svg";
import cn from "classnames";
import cls from "./ProfileCard.module.scss";

const ProfileCard = (props) => {
    const {
        className,
        authData
    } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogoutClick = useCallback(() => {
        dispatch(clearUserData());
        navigate(routesPath.HOME);
    }, [dispatch]);

    return (
        <div className={cn(cls.card_wrapper, className)}>
            <UIAvatar
                avatar={authData?.avatar}
                name={authData?.name}
                type="large"
                withZoom="true"
                hasLink={false}
            />
            <ul className={cls.infoTable}>
                <li className={cls.infoTableRow}>
                    <span className={cls.infoTableLabel}>
                        <UserIcon /> Имя:
                    </span>
                    <span className={cls.infoTableValue}>
                        {authData?.name ? authData?.name : "-"}
                    </span>
                </li>
                <li className={cls.infoTableRow}>
                    <span className={cls.infoTableLabel}>
                        <EmailIcon /> Email:
                    </span>
                    <span className={cls.infoTableValue}>
                        {authData?.email ? authData?.email : "-"}
                    </span>
                </li>
                <li className={cls.infoTableRow}>
                    <span className={cls.infoTableLabel}>
                        <CalendarIcon /> Профиль создан:
                    </span>
                    <span className={cls.infoTableValue}>
                        {authData?.creationAt ? new Date(authData?.creationAt).toLocaleString() : "-"}
                    </span>
                </li>
                <li className={cls.infoTableRow}>
                    <span className={cls.infoTableLabel}>
                        <RolesIcon /> Роль:
                    </span>
                    <span className={cls.infoTableValue}>
                        {authData?.role ? rolesTranslation[authData?.role] : "-"}
                    </span>
                </li>
            </ul>
            <UIButton
                type={"accent"}
                text="Выйти из профиля"
                onClick={handleLogoutClick}
            />
        </div>
    );
};

export default ProfileCard;