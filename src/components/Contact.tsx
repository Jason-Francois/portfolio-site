import { useState } from "react";
import styles from "../styles/Contact.module.css";
import { AxiosError } from "axios";
import { FormValues } from "@/interfaces/interfaces";

interface Response {
  isSuccessful: string;
}
export default function Contact() {
  const axios = require("axios");
  const [formValues, setFormValues] = useState<FormValues>({
    fName: "",
    fEmail: "",
    fMessage: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("/api/contact", formValues)
      .then((response: Response) => console.log(response))
      .catch((err: AxiosError) => console.error(err));
  };
  return (
    <>
      <section
        id="contact"
        className={`${styles["contact-form__container"]} px-8  py-16 md:py-32`}
      >
        <div
          className={`${styles["contact-form"]} m-0 m-auto max-w-[35rem] rounded-xl p-8 sm:p-16 bg-white`}
        >
          <h1 className="text-4xl text-center font-bold mb-12">
            <span className="relative border-solid pb-1 section__header">
              Contact
            </span>
          </h1>

          <form id="contact-form" onSubmit={handleSubmit}>
            <fieldset className={`${styles["contact-form__group"]}`}>
              <label
                className={`${styles["contact-form__label"]}`}
                htmlFor="fName"
              >
                Name
              </label>
              <input
                type="text"
                id="fName"
                name="fName"
                value={formValues.fName}
                onChange={handleChange}
                required
              />
            </fieldset>

            <fieldset className={`${styles["contact-form__group"]}`}>
              <label
                className={`${styles["contact-form__label"]}`}
                htmlFor="fEmail"
              >
                Email Address
              </label>
              <input
                type="text"
                id="fEmail"
                name="fEmail"
                value={formValues.fEmail}
                onChange={handleChange}
                required
              />
            </fieldset>

            <fieldset className={`${styles["contact-form__group"]}`}>
              <label
                className={`${styles["contact-form__label"]}`}
                htmlFor="fMessage"
              >
                Message
              </label>
              <textarea
                id="fMessage"
                name="fMessage"
                placeholder="Enter a message"
                cols={20}
                className={`rounded-md w-full`}
                value={formValues.fMessage}
                onChange={handleChange}
              ></textarea>
            </fieldset>
            <button
              id="contactBtn"
              className={`block w-1/2 font-bold m-auto m-0 btn-primary rounded-md mt-8 p-3  transition-all text-white`}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
