import useAvatar from "../hooks/useAvatar";

interface PictureProps {
  size?: string;
  id: string;
}

export default function Picture({ size, id }: PictureProps) {
  const avatar = useAvatar(id);

  return (
    <figure>
      {size}
      <img src={avatar} className="w-32 h-32 rounded-full" alt="avatar"></img>
    </figure>
  );
}
