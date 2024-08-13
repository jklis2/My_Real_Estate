interface Photo {
  path: string;
  className: string;
  alt?: string
}

export default function Photo({ path, className, alt }: Photo) {
  return (
    <div className={`px-3 py-2 h-full w-full ${className}`}>
      <img
        className="rounded-2xl block h-28 lg:h-36 object-cover w-full"
        src={path}
        loading="lazy"
        alt={alt ? alt : "Photo"}
      />
    </div>
  );
}
