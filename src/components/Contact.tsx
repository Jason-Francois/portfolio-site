import styles from "../styles/Contact.module.css";
export default function Contact() {
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

          <form id="contact-form">
            <fieldset className={`${styles["contact-form__group"]}`}>
              <label
                className={`${styles["contact-form__label"]}`}
                htmlFor="fName"
              >
                Name
              </label>
              <input type="text" id="fName" name="fName" required />
            </fieldset>

            <fieldset className={`${styles["contact-form__group"]}`}>
              <label
                className={`${styles["contact-form__label"]}`}
                htmlFor="fName"
              >
                Email Address
              </label>
              <input type="text" id="fEmail" name="fEmail" required />
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
              ></textarea>
            </fieldset>
            <button
              id="contactBtn"
              className={`block w-1/2 font-bold m-auto m-0 btn-primary rounded-md mt-8 p-3 hover:brightness-75 transition-all`}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
