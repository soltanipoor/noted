import NavBarItem from "../Navbar/NavBarItem";
import DocIcon from "@/assets/images/icons/doc.svg";

const lastNotes = [
  {
    name: "هدفم برای سال جدید",
  },
  {
    name: "کتاب‌هایی که می‌خوام بخونم",
  },
  {
    name: "خلاصه جلسه ۱۲ صدکدرز",
  },
];

function LastNotes() {
  return (
    <section className="last-notes-container">
      <h2>آخرین یادداشت‌ها</h2>

      <div className="last-notes">
        {lastNotes.map((item) => {
          return <NavBarItem key={item.name} text={item.name} icon={DocIcon} />;
        })}
      </div>
    </section>
  );
}

export default LastNotes;
