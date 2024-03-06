export default function Picture({ size }: { size?: string }) {
  return (
    <figure>
      {size}
      <img
        src="https://picsum.photos/100/100"
        className="w-32 rounded-full"
        alt="avatar"
      ></img>
    </figure>
  );
}
