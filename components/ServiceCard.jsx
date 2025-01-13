import Image from "next/image";

export default function ServiceCard({ cards }) {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-14">
      {cards.map((card) => (
        <div className="w-[400px] h-[345px] rounded-[10px] shadow-md flex items-center justify-center flex-col" key={card.id}>
          <Image
            src={card.imageSrc}
            alt="card Img"
            width={100}
            height={100}
            className="h-[89px] w-[89px] mx-auto"
          />

          <h2 className="text-4xl font-semibold text-[#292E3D] text-center mt-5 px-10">
            {card.title}
          </h2>
          <p className="text-center text-xl text-[#292E3D] mt-1 px-10">
            {card.description}
          </p>
          {/* <a href="#" className="text-sm italic text-[#8A1538] underline flex items-center justify-end pr-5 mt-1">Learn More</a> */}
        </div>
      ))}
    </div>

  );
}
