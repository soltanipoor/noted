import folderIcon from "@/assets/images/icons/folder.svg";
import calenderIcon from "@/assets/images/icons/calender.svg";

const NoteForm = ({ note, onUpdate }) => {
  return (
    <div className="note-form">
      <div className="note-form__header">
        <div className="note-form__header__title">
          <input
            value={note ? note.title : ""}
            placeholder="عنوان یادداشت خود را وارد نمایید"
            onChange={(e) => onUpdate("title", e.target.value)}
          />
        </div>
      </div>

      <div className="note-form__details">
        <div className="note-form__details__item">
          <img src={folderIcon} />
          <div className="note-form__details__title">پوشه</div>
          <div className="note-form__details__value">شخصی</div>
        </div>

        {note && (
          <div className="note-form__details__item">
            <img src={calenderIcon} />
            <div className="note-form__details__title">زمان ایجاد</div>
            <div className="note-form__details__value">
              {note.date}
            </div>
          </div>
        )}
      </div>

      <div className="note-form__content">
        <textarea
          value={note ? note.description : ""}
          placeholder="هر آنچه که دل تنگت می‌خواهد بنویس ..."
          onChange={(e) => onUpdate("description", e.target.value)}
        />
      </div>
    </div>
  );
};

export default NoteForm;
