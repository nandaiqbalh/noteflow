import { logos } from "../../utils/content.js";

const Logos = () => {
  return (
    <section className="bg-gradient-to-top">
      <div className="m-auto max-w-[90rem] px-24 py-28">
        <p className="text-primary-50 text-xl/loose font-light mb-20 text-center">
          Organization powered by{" "}
          <span className="text-primary-50 font-bold tracking-tighter">NoteFlow</span>
        </p>

        <div className="flex flex-col gap-y-16">
          <ul className="flex flex-wrap justify-between">
            {logos.slice(0, 4).map((logo, i) => (
              <li key={i}>
                <img src={logo.src} alt={logo.alt} className="h-10"/>
              </li>
            ))}


          </ul>
          <ul className="flex flex-wrap justify-between">
            {logos.slice(4, 8).map((logo, i) => (
              <li key={i}>
                <img src={logo.src} alt={logo.alt} className="h-10"/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Logos;
