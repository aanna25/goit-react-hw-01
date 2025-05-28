import style from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={style.friendCard}>
      <img src={avatar} alt="Avatar" />
      <p className={style.friendName}>{name}</p>
      <p className={isOnline ? style.statusOnline : style.statusOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
