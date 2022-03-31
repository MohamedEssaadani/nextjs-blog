import Image from "next/image";

export default function profile() {
  return (
    <>
      <Image
        src={"/images/profile.jpg"}
        alt="Es-saadani"
        height={144}
        width={144}
      />
    </>
  );
}
