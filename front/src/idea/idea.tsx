// import React from 'react';
// import { Sun } from 'lucide-react';
import retreatPhoto from '../assets/retreatPhoto.png';
import circular_photo from '../assets/הרעיון - עיגול מילים.avif';
import ideaBackground from '../assets/ideaBackground.png';

const Idea: React.FC = () => {

    return (
        <div>
            <div style={{
                backgroundImage: `url(${ideaBackground})`,
                backgroundPosition:'bottom',
                backgroundSize : '1300px 650px',
                minHeight : '600px',
                // height: '100%',
                // filter : 'brightness(1.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                direction: 'rtl'
            }}>
                <div style={{ position: 'relative' }}>
                    <img
                        style={{
                            width: '70%',
                            height: '70%',
                            zIndex: 1,
                            position: 'relative',
                            backgroundColor : 'rgba(255,255,255,0.1)'
                        }}
                        src={circular_photo}
                        alt="Circular photo"
                    />

                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 2,
                            textAlign: 'center'
                        }}
                    >
                        <h1 style={{ color: "orange", fontSize: "20px" }}>לילה כיום יאיר</h1>
                        <h1 style={{ color: "rgb(var(--color_45))" }}>מרעיון</h1>
                        <h1 style={{ color: "rgb(var(--color_45))" }}>לביצוע</h1>
                    </div>
                </div>
            </div>

            <div style={{
                background: '#f7f7f0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'}}>
                <div style={{ width: "50%", marginTop: "3em" }}>
                    כשבוע מראשית המלחמה יצרנו מרחב ריפוי שנותן מענה, מקיף ומקצועי לעיבוד ושחרור של הטראומה על מנת לייצר 'חיסון' שיקטין את הסיכוי להתפתחות תסמינים של פוסט טראומה ולהעצים את התקווה והאמונה שאפשר לחיות חיים מלאים ושמחים גם אחרי ארוע מסוג זה, ואף לגדול מתוכה.
                </div>
                <div style={{ width: "50%", marginTop: "3em" }}>
                    מענה טיפולי מקצועי יכול להשפיע על אספקטים רבים ברווחת האדם: נפשיים, גופניים, משפחתיים, תפקודיים, בריאותיים ועוד.
                </div>
                <div style={{ width: "50%", marginTop: "3em" }}>
                    בתהליך הריפוי אנו משלבים טיפולי גוף נפש, רוח, תודעה, יצירה, מוסיקה, וטבע והם מועברים על ידי מטפלים  קלינים בכירים ומנוסים מתחום הטראומה (כמו האקומי ו- EMDR), לצד מטפלים מנוסים ובכירים בכל שאר התחומים. כל זה נעשה בתוך קהילה, שהיא חלק גדול בריפוי.
                </div>
                <div style={{ width: "50%", marginTop: "3em", marginBottom:"3em"}}>
                    'לילה כיום יאיר' הוא מיזם משותף של: שירה ברוקנר - אשר מגיעה מתחומי הטיפול הקליני, לצד עולמות הגוף, טבע, רוח, תנועה, תודעה. וניצן קרן - שמגיע מעולמות ההפקה האירוח, ועולם הרטריטים.
                </div>
            </div>
            
            <div>
                <img src={retreatPhoto} style={{width:"100%"}}/>
            </div>

            <div style={{
                background: '#f5f0df',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                direction: 'rtl'}}>
                <div style={{ width: "40%", marginTop: "3em" }}>
                    <h1 style={{ color: "orange", fontSize: "20px" }}>לב העשייה</h1>
                    <h1 style={{ color: "rgb(var(--color_45))" }}>הערכים שלנו</h1> 
                </div>
                <div style={{ width: "40%"}}>
                    <h1 style={{ color: "orange", fontSize: "20px" }}>בית</h1>
                    מחבק, אנושי, משפחה                
                </div>
                <div style={{ width: "40%", marginTop: "3em" }}>
                    <h1 style={{ color: "orange", fontSize: "20px" }}>מעגל ריפוי</h1>
                    רפואה שלמה במובן הרחב: גוף, נפש, רוח, מוסיקה, תנועה, יצירה, טבע, הזנה, תפילה, קהילה
                </div>
                <div style={{ width: "40%", marginTop: "3em" }}>
                    <h1 style={{ color: "orange", fontSize: "20px" }}>אנושיות</h1>
                    אותנטיות, שיח פתוח וקרוב, פגיעות, חוסן, קבלה, עיניים טובות ומלוות
                </div>
                <div style={{ width: "40%", marginTop: "3em" }}>
                    <h1 style={{ color: "orange", fontSize: "20px" }}>צמיחה</h1>
                    תקווה לחיים טובים,<br/>
                    אמונה בצמיחה מתוך אירוע טראומטי,<br/>
                    רשות וזכות להמשיך בחיים מלאים משמעותיים טובים<br/>
                </div>
                <div style={{ width: "40%", marginTop: "3em" }}>
                    <h1 style={{ color: "orange", fontSize: "20px" }}>מקצועיות</h1>
                    טובי המומחים בתחום הטראומה, בעלי נסיון עשיר בתחום זה. שיטות שהוכחו מחקרית בטראומה, והכרות מעמיקה עם עולם הפסיכדליה על רבדיו השונים. לצד מומחים בתחומי הריפוי השונים                </div>
                <div style={{ width: "40%", marginTop: "3em" ,marginBottom :"3em"}}>
                    <h1 style={{ color: "orange", fontSize: "20px" }}>קהילה</h1>
                    "אף פעם אתה לא לבד"<br/>
                    כח היחד, השייכות. חזרה לשבט <br/>               
                </div>
            </div>
        </div>
    )

}

export default Idea;