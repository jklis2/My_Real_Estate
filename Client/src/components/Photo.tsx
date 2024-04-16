interface Photo {
  path: string;
  className: string
}

export default function Photo({ path, className }: Photo) {
  return (
    <div className={`px-3 py-2 h-full w-full ${className}`}>
      <img className="rounded-2xl block h-36 object-cover w-full" src={path} loading="lazy"/>
    </div>
  );
}
