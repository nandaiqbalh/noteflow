import Close from "../../icons/Close";
import Checkmark from "../../icons/Checkmark";
import { useState } from "react";
import { useModalContext } from "../../../contexts/ModalContext.jsx";

const initialState = {
  email: "",
  password: "",
};

const SignUpModal = () => {
  const { setActiveModal } = useModalContext();
  const [checked, setChecked] = useState(false);
  const [inputs, setInputs] = useState({ initialState });

  function handleInputChange(event) {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (checked) {
      console.log(inputs);
      setInputs(initialState);

      setActiveModal("");

      // submit to database or etc
    }
  }

  return (
    <section className={`grid max-w-3xl grid-cols-2`}>
      <div
        className={`bg-primary-1300 flex flex-col justify-center gap-y-4 bg-[url(../src/assets/Noise.webp)] bg-repeat p-10 text-center`}
      >
        <h4 className={`text-primary-50 text-xl/12 font-bold tracking-tight`}>
          Lets Get You Signed Up
        </h4>
        <p className={`text-primary-100 text-lg/8`}>
          No charges, no fees. Get note taking in minutes!
        </p>
      </div>
      <div
        className={`bg-primary-1500 flex flex-col justify-between gap-y-24 bg-[url(../src/assets/Noise.webp)] bg-repeat p-10`}
      >
        <button
          onClick={() => setActiveModal("")}
          className={`border-primary-75 hover:bg-primary-75 group transition-properties ml-auto w-fit cursor-pointer rounded-2xl border-2 p-3`}
        >
          <Close
            width={2}
            className={`stroke-primary-75 group-hover:stroke-primary-1300 transition-properties`}
          />
        </button>

        <div
          className={`text-primary-50 flex flex-col gap-y-6 text-lg/8 font-semibold tracking-tight`}
        >
          <label>
            Email
            <input
              className={`bg-primary-75 placeholder-primary-1500 text-primary-1300 mt-2 block w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light placeholder:opacity-20`}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="janedone@gmail.com"
              value={inputs.email}
            />
          </label>
          <label>
            Password
            <input
              className={`bg-primary-75 placeholder-primary-1500 text-primary-1300 mt-2 block w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light placeholder:opacity-20`}
              name="password"
              onChange={handleInputChange}
              type="password"
              placeholder="**********"
              value={inputs.password}
            />
          </label>
        </div>

        <div>
          <div
            className={`m-auto mb-4 w-fit cursor-pointer gap-x-2`}
            onClick={() => setChecked((prevState) => !prevState)}
          >
            <button
              className={`border-primary-100 transition-properties mr-2 inline-flex h-4 w-4 cursor-pointer items-center justify-center rounded-sm border-2 ${checked && "bg-primary-100"}`}
            >
              <Checkmark className={`stroke-primary-1500`} />
            </button>

            <p className={`text-primary-100 inline cursor-pointer text-sm`}>
              I agree to all terms
            </p>
          </div>
          <button
            className={`bg-primary-500 transition-properties primary-glow-hover text-lg/8s w-full cursor-pointer rounded-full py-4`}
            onClick={handleSubmit}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};
export default SignUpModal;
