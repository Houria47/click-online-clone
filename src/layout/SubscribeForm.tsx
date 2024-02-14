import LocaleContext from "@/store/locale-context";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { HiHeart } from "react-icons/hi";

const SubscripeForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [done, setDone] = useState(false);
  const { t } = useContext(LocaleContext);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    let email = enteredEmail.trim();
    if (
      email.length !== 0 &&
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    ) {
      setEnteredEmail("");
      setDone(true);
      setInvalidEmail(false);
    } else {
      setInvalidEmail(true);
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(e.target.value);
    setInvalidEmail(false);
    setDone(false);
  };

  return (
    <>
      <form
        noValidate
        onSubmit={submitHandler}
        className="text-sm rounded-md mt-8 flex items-center bg-white overflow-hidden"
      >
        <input
          name="email"
          type="email"
          value={enteredEmail}
          onChange={onChangeHandler}
          placeholder={t("email")}
          className="min-w-0 flex-1 outline-none px-2 text-foreground focus:placeholder:opacity-0 placeholder:duration-300"
        />
        <button className="px-3 py-2 bg-accent hover:brightness-125 text-white">
          {t("send")}
        </button>
      </form>
      {invalidEmail && (
        <small className="text-accent mt-2 block">{t("invalid-email")}</small>
      )}
      {done && (
        <p className="text-white mt-3 text-sm flex items-center -md:justify-center gap-2">
          {t("thanks-for-subscribing")} <HiHeart className="text-accent" />
        </p>
      )}
    </>
  );
};

export default SubscripeForm;
