import Image from "next/image";
// import photo from "../../../public/programming.jpg";
export const metadata = {
  title: "About",
  description: "all the information about us",
};
const AboutPage = () => {
  return (
    <div>
      <h2 className="text-5xl text-center p-10">About</h2>
      <Image
        src="/programming.jpg"
        width={500}
        height={500}
        alt="Image"></Image>
      <div>
        <h2 className="text-4xl text-center p-10">Image : 2</h2>

        <Image
          src="/lady-programmer.jpg"
          width={300}
          height={200}
          alt="Image2"></Image>
      </div>
    </div>
  );
};

export default AboutPage;
