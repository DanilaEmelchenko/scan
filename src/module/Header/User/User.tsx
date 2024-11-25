import { useAppDispatch } from "../../../hooks/redux";
import { authLogout } from "../../../state/AuthSlice";
import s from "./User.module.scss";

const User = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={s.user}>
      <div className={s.info}>
        <p className={s.name}>Алексей А.</p>
        <p onClick={() => dispatch(authLogout())} className={s.exit}>
          Выйти
        </p>
      </div>
      <img src="/images/main/avatar.svg" alt="avatar" />
    </div>
  );
};

export default User;
