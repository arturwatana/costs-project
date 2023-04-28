import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectFormm.module.css";
import { useEffect, useState } from "react";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orcammento do projeto"
        name="budget"
        placeholder="Insira o orcamento do projeto"
      />
      <Select
        name="category_id"
        text="Selecione uma categoria"
        options={categories}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
