

type Props = {
    avatarsize: number
}

const ProfileAvatar = ({avatarsize = 36}: Props) => {

    let imgprops: object = {
        width : `${avatarsize}px`,
        height : `${avatarsize}px`,
        borderRadius: `50%`,
    };


  return (
    <img 
        alt='profile avatar' style={imgprops}
        src="https://cdn-images-1.medium.com/max/1200/1*NpUUls7kjn9JhO4ChjGV7w.png"
        />
  )
}

export default ProfileAvatar