import Input from "../../components/shared/Input.tsx";
import H2 from "../../components/shared/H2.tsx";
import P from "../../components/shared/P.tsx";
import Picture from "../../components/shared/Picture.tsx";
import { useGetUserQuery } from "../../services/userApi.ts";
import { ChangeEvent, useState } from "react";
import Alert from "../../components/shared/Alert.tsx";
import { useUpdateAvatarMutation } from "../../services/avatarApi.ts";

export default function UploadAvatar() {
  // const [updateAvatar, { error, isLoading, isSuccess }] =
  const [updateAvatar, { isSuccess }] = useUpdateAvatarMutation();

  const [alertData, setAlertData] = useState({
    name: "",
    type: "",
    isVisible: false,
  });
  const { data: userData } = useGetUserQuery(null);
  const [userDetails] = userData?.result || [];

  function onFileChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const inputElement = e.target as HTMLInputElement;
    if (inputElement && inputElement.files) {
      const [file] = inputElement.files;

      if (file.size > 1024 * 1024 * 5) {
        setAlertData({
          type: "Error",
          name: "File is larger than 5MB!",
          isVisible: true,
        });
        return;
      }
      const acceptedTypes = ["image/jpeg", "image/png"];
      if (acceptedTypes.includes(file.type)) {
        const { id } = userDetails;
        if (id) {
          updateAvatar({ id, file });
        }
        setAlertData({
          type: "Success",
          name: "Successfully updated avatar!",
          isVisible: true,
        });
      } else {
        setAlertData({
          type: "Error",
          name: "Incorrect file",
          isVisible: true,
        });
        return;
      }
    }
  }

  const handleClose = () => {
    setAlertData((prevData) => ({
      ...prevData,
      isVisible: false,
    }));
  };

  return (
    <>
      <section className="my-10">
        <div className="flex items-center mb-10">
          <Picture isSuccess={isSuccess} id={userDetails?.id} />
          <div className="ml-10">
            <H2 className="mb-2">Profile Picture</H2>
            <P className="mb-">JPG or PNG no larger than 5 MB</P>
          </div>
        </div>

        <Input
          id="fileInput"
          type="file"
          name="file"
          className="file:bg-slate-300 file:py-2 file:px-6 file:rounded-full file:border-none file:cursor-pointer"
          onChange={onFileChange}
        ></Input>
      </section>

      {alertData?.isVisible && (
        <Alert
          name={alertData.name}
          type={alertData.type as "Success" | "Error"}
          isVisible={true}
          onClose={handleClose}
        />
      )}
    </>
  );
}
