type AvatarProps = {
  avatarsize: number;
  imgurl?: string;
};

const ProfileAvatar = (props: AvatarProps) => {
  const {
    avatarsize = 36,
    imgurl = "https://cdn-images-1.medium.com/max/1200/1*NpUUls7kjn9JhO4ChjGV7w.png",
  } = props;
  let imgprops: object = {
    width: `${avatarsize}px`,
    height: `${avatarsize}px`,
    borderRadius: `50%`,
  };

  return <img alt="profile avatar" style={imgprops} src={imgurl} />;
};

export default ProfileAvatar;
