export type PostCardType = {
  prop1: string;
};

const PostCard = (props: PostCardType) => {
  const { prop1 } = props;
  return (
    <div>
      <div>{props.prop1}</div>
    </div>
  );
};

export default PostCard;
