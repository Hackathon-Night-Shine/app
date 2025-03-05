import '../../App.css';

export const Audience = () => {
    return (
        <div className="brown" style={{ display: 'flex', width: '100vw', justifyContent: 'center' }}>
            <div style={{ width: '50vw' }}>
                <h2 className="orange" style={{margin: 0, marginTop: '10%' }}>למי אנחנו פונים</h2>
                <h1 className='brown' style={{ margin: 0, marginBottom: '5%' }}> קהל היעד</h1>
                <p>
                    קהל היעד של המיזם הוא יוצאי המסיבה, שעברו לאור העובדה שמדובר באנשים שאינם חלק מהקהילה (כמו יישוב או יחידה צבאית), והתפזרו באותו מקור למקומות שונים. מתוך כך, הם פגיעים יותר להתפתחות של הסמנים (בדומה ליכולות החברים בצבא, שעם הם מהווים קבוצת סיכון גבוהה יותר).
                </p>

                <p>
                    בנוסף, מדובר בקבוצת אנשים ראשונה בעולם שחוותה טראומה בסדר גודל כזה, כשחלקה הגדול נמצא תחת השפעה של חומרים פסיכדליים ואשר נדרש ידע מקצועי ייחודי. קבוצה שעוד מחקר הרבה והתווה בסיס להתפתחות של מחקר.
                </p>

                <p>
                    לאט ובהדרגה אנחנו פותחים אפשרות לקהלים נוספים, נפגעי טראומה מקבוצות שונות:  צעירי העוטף, מפונים, חטופים, לוחמים, צוותי פינוי טיפול שהיו במגע עם האסון, מודיעים, רופאים ואנשים רבים שחווים  חויה של אובדן.                    </p>
            </div>
        </div>
    )
}