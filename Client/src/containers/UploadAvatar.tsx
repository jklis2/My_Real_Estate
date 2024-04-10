import Button from "../components/Button";
import H2 from "../components/H2";
import P from "../components/P";
import Picture from "../components/Picture";
import { useGetUserQuery } from "../services/userApi";

export default function UploadAvatar() {
  const { data: userData } = useGetUserQuery(null);
  const userDetails = userData && userData.result[0];
  return (
    <section className="my-10">
      <div className="flex items-center mb-10">
        <Picture id={userDetails.id} />
        <div className="ml-10">
          <H2 className="mb-2">Profile Picture</H2>
          <P className="mb-">JPG or PNG no larger than 5 MB</P>
        </div>
      </div>
      <Button>Upload new image</Button>
    </section>
  );
}
