import Card from "./Card";
import { useRef } from "react";
function Forground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference={ref} key={index} />
      ))}
    </div>
  );
}

export default Forground;
