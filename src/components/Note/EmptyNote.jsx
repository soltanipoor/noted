import noteIcon from '@/assets/images/icons/note.svg'

function EmptyNote() {
  return (
    <div className="empty-note">
      <img src={noteIcon} />
      <div className="empty-note__title">
        یک یادداشت را برای نمایش انتخاب کنید
      </div>
      <div className="empty-note__description">
        از لیست سمت راست یک يادداشت را انتخاب کنید، یا یک یادداشت جدید ایجاد
        کنید.
      </div>
    </div>
  );
}

export default EmptyNote;
