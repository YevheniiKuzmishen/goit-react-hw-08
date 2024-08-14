import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.pageCоntainer}>
      <div className={css.pageTitle}>
        <h2>Phonebook welcome page </h2>
        <p>
          This application allows you to store the contacts you need, find them
          using search, and delete unnecessary ones.
        </p>
      </div>
    </div>
  );
}
