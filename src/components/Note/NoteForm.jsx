import folderIcon from '@/assets/images/icons/folder.svg'
import calenderIcon from '@/assets/images/icons/calender.svg'
import { useState } from 'react'

const NoteForm = () => {
    const [value, setValue] = useState(`دیزاین یه ماشین حساب رو پیاده کردیم و مروری بر مطالب گذشته شد.
    دیزاین ماشین حساب شبیه ماشین حساب آیفون بود.
    مطالبی که مرور کردیم:
    - html tags
    - css flex
    - dom
    - functions
    - event listener
    
    در ادامه GIT رو نصب کردیم و با دستورات زیر name, email رو کانفیگ کردیم:
    git config --global user.name "FIRST_NAME LAST_NAME"
    git config --global user.email "MY_NAME@example.com"
    
    برای کامیت کردن، ابتدا باید تغییرات رو با دستور زیر به stage اضافه کنیم:
    git add .
    بعد برای کامیت کردن تغییرات تو stage دستور زیر رو استفاده می‌کنیم:
    git commit -m "this is my message for changes"
    
    برای کلون کردن یک ریپازیتوری از دستور زیر استفاده می‌کنیم:
    git clone https://...`)
  return (
    <div className="note-form">
        <div className="note-form__header">
            <div className="note-form__header__title">
            خلاصه جلسه ۱۲ صد کدرز
            </div>
        </div>

        <div className="note-form__details">
            <div className="note-form__details__item">
                <img src={folderIcon}/>
                <div className='note-form__details__title'>پوشه</div>
                <div className='note-form__details__value'>شخصی</div>
            </div>

            <div className="note-form__details__item">
                <img src={calenderIcon}/>
                <div className='note-form__details__title'>زمان ایجاد</div>
                <div className='note-form__details__value'>۱۸ شهریور ۱۴۰۲</div>
            </div>
        </div>

        <div className="note-form__content">
            <textarea value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    </div>
  )
}

export default NoteForm