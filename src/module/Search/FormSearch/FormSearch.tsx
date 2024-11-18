import FormCheck from "../FormCheck/FormCheck";
import FormInput from "../FormInput/FormInput";
import s from "./FormSearch.module.scss";

const FormSearch = () => {
  return (
    <form className={s.formSearch}>
      <FormInput />
      <FormCheck />
    </form>
  );
};

export default FormSearch;
