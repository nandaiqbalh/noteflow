import Testimonial from "./Testimonial.jsx";

const TestimonialList = ({testimonials}) => {
  return (
    <ul className={`flex flex-col gap-y-6 max-xl:gap-y-4 max-lg:nth-[3]:hidden max-lg:nth-[2]:hidden`}>
      {testimonials.map((testimonial) => (
        <Testimonial testimonial={testimonial}  key={testimonial.id}/>
      ))}
    </ul>
  );
};
export default TestimonialList;
