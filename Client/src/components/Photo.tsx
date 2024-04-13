interface Photo {
  path: string;
}

export default function Photo({ path }: Photo) {
  return (
    <div className="px-3 py-2 h-full w-full">
      <img className="rounded-2xl block h-36 object-cover w-full" src={path} />
    </div>
  );
}
