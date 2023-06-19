import { useState } from "react";
import styles from "../styles/Contact.module.css";
import { AxiosError } from "axios";
import { FormValues } from "@/interfaces/interfaces";

export default function Contact() {
  const axios = require("axios");
  const defaultFormValues = {
    name: "",
    email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState<FormValues>(defaultFormValues);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("api/contact", formValues)
      .then(() => {
        const successModal = document.querySelector("#successModal");
        successModal?.classList.toggle(`${styles["success"]}`);
        setFormValues(defaultFormValues);
        setTimeout(() => {
          successModal?.classList.toggle(`${styles["success"]}`);
        }, 1500);
      })
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
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                required
              />
            </fieldset>

            <fieldset className={`${styles["contact-form__group"]}`}>
              <label
                className={`${styles["contact-form__label"]}`}
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
              />
            </fieldset>

            <fieldset className={`${styles["contact-form__group"]}`}>
              <label
                className={`${styles["contact-form__label"]}`}
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter a message"
                cols={20}
                className={`rounded-md w-full`}
                value={formValues.message}
                onChange={handleChange}
              ></textarea>
            </fieldset>
            <button
              id="contactBtn"
              className={`block w-1/2 font-bold m-auto m-0 btn-primary rounded-md mt-8 p-3  transition-all text-white`}
            >
              Submit
            </button>
            <div className="relative flex justify-center">
              <div
                id="successModal"
                className={`${styles["success-modal"]} fixed top-0 p-8 rounded-xl bg-green-600 text-white`}
              >
                <p>The message was successfully sent!</p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
