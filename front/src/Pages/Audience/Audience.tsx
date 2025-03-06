
const Audience: React.FC = () => 
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '20px'}}>
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p style={{ color: '#F0923C', margin: '0', fontSize: '2rem' }}>למי אנחנו פונים</p>
            <h1 style={{ color: '#5e2e12', margin: '0', fontSize: '3rem', fontWeight: 'bold' }}> קהל היעד</h1>
            <p style={{ textAlign: 'center' }}>
                קהל היעד של המיזם הוא יוצאי המסיבה, שעברו לאור העובדה שמדובר באנשים שאינם חלק מהקהילה (כמו יישוב או יחידה צבאית), והתפזרו באותו מקור למקומות שונים. מתוך כך, הם פגיעים יותר להתפתחות של הסמנים (בדומה ליכולות החברים בצבא, שעם הם מהווים קבוצת סיכון גבוהה יותר).
            </p>

            <p style={{ textAlign: 'center' }}>
                בנוסף, מדובר בקבוצת אנשים ראשונה בעולם שחוותה טראומה בסדר גודל כזה, כשחלקה הגדול נמצא תחת השפעה של חומרים פסיכדליים ואשר נדרש ידע מקצועי ייחודי. קבוצה שעוד מחקר הרבה והתווה בסיס להתפתחות של מחקר.
            </p>

            <p style={{ textAlign: 'center' }}>
                לאט ובהדרגה אנחנו פותחים אפשרות לקהלים נוספים, נפגעי טראומה מקבוצות שונות:  צעירי העוטף, מפונים, חטופים, לוחמים, צוותי פינוי טיפול שהיו במגע עם האסון, מודיעים, רופאים ואנשים רבים שחווים  חויה של אובדן.
            </p>
        </div> 
        <img src="assets/audience.png" style={{ width: '100%', height: 'auto'}}/>
    </div>

export default Audience;

