import css from '../section/Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={css.class_div}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </div>
  );
};
