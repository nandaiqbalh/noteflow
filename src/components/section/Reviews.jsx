import { reviews } from "../../utils/content.js";

const Reviews = () => {
  return (
    <section className="mr-auto flex max-w-[90rem] flex-wrap items-center gap-x-4 gap-y-4 px-24">
      <ul className="flex">
        {reviews.map((review) => (
          <li key={review.id} className="-mr-4 last:mr-0">
            <img className="border-primary-100 border-2 rounded-full h-12" src={review.src} alt={review.alt} />
          </li>
        ))}
      </ul>

      <p className="text-primary-100 text-xl/loose font-light">
        Trusted by <span className="text-primary-500 font-bold tracking-tighter">12,653+</span> productivity junkies
      </p>
    </section>
  );
};
export default Reviews;
