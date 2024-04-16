interface PictureProps {
  size?: string;
  id: string;
}

export default function Picture({ size, id }: PictureProps) {
  return (
    <figure>
      {size}
      <img
        src={`${import.meta.env.VITE_API_URL}Avatar?userId=${id}`}
        className="w-32 h-32 rounded-full"
        alt="avatar"
      ></img>
    </figure>
  );
}
