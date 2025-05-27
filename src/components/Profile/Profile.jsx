import style from "./Profile.module.css";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={style.profileCard}>
      <div className={style.infoBlock}>
        <img src={avatar} alt={username} />
        <p className={style.userName}>{username}</p>
        <p className={style.userTag}>@{tag}</p>
        <p className={style.userLocation}>{location}</p>
      </div>

      <ul className={style.statsList}>
        <li className={style.statsItem}>
          <span className={style.statsLabel}>Followers</span>
          <span className={style.statsValue}>{stats.followers}</span>
        </li>
        <li className={style.statsItem}>
          <span className={style.statsLabel}>Views</span>
          <span className={style.statsValue}>{stats.views}</span>
        </li>
        <li className={style.statsItem}>
          <span className={style.statsLabel}>Likes</span>
          <span className={style.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
