
import './index.css'
import FullHeightGallery from './gallery';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export const Title = ({ text }: { text: string }) => {
    return (
        <div className="title-container">
            <h4 className="title-text">{text}</h4>
        </div>
    );
}

function OrangeTitle({ text }: { text: string }) {
    return <h4 className="orange-title">{text}</h4>;
}

export const AboutTheRetreat = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div style={{ width: '60vw', margin: '0 auto', textAlign: 'center' }}>
                <div>
                    <OrangeTitle text="איך עושים את זה" />
                </div>

                <div>
                    <Title text="על הריטריט" />
                </div>

                <div style={{ fontSize: '17px' }}>
                    <span>
                        הריטריט נמשך שלושה ימים, ומתקיים בחאן יפיפה בחוף הכרמל ומאפשר לכל משתתף לעשות עוד צעד בתהליך הריפוי, בהתאם לשלב בו הוא נמצא. אנחנו מזמינים לתוך קפסולה של שלושה ימים המאפשרים לגעת בחויה באופן עמוק ומשמעותי. הזמן והמרחב, מאפשרים גם התנסות בכלים שונים, מפגש עם החלקים השונים של האדם, וליווי אישי למציאת הכלים המתאימים לו בשלב הזה. גוף, נפש, רוח, תודעה, יצירה, טבע, מוסיקה וקהילה.&nbsp;<br />
                        הכוונה היא לאפשר תהליך ריפוי וגילוי, תוך הזכרות וחיזוק המשאבים החיצוניים והפנימיים. המרחב מוגן, אנושי ומכיל, מאפשר לתכנים לחלחל באיטיות, ליצור חיבורים חדשים, ותנועה לקראת המשך התפתחות וצמיחה.
                    </span>
                </div>

                <div>
                    <OrangeTitle text="למי זה מתאים?" />
                </div>
                <div style={{ fontSize: '18px' }}>
                    <p>
                        הריטריט נותן מענה לצעירים אשר נפגעו במסיבות הדרום, צעירי העוטף, וצעירי משפחות החטופים. לאלו שמרגישים צורך להיות יחד במקום מוגן, עם עיניים מלוות של טובי המטפלים ואנשי המקצוע ולעבור תהליך אישי וקבוצתי מרפא.
                        &nbsp;
                    </p>

                    <p>
                        המקום טבול בטבע ירוק, המתחם מעוצב עד הפרטים הקטנים, וצוות ההפקה נותן תחושה של בית. לאורך הריטריט יש פינות קפה, פירות ופינוקים. הלינה במרחב המרכזי או בחדרים פרטיים.
                        &nbsp;
                    </p>

                    <p>
                        הליווי המקצועי של הריטריט נעשה ע״י שירה ברוקנר, יוזמת הרעיון, המגיעה עם ידע קליני משנות עבודה רבות עם חויות קצה בצבא ובבית מאזן, וכן שנות עבודה עם הגוף, ריפוי בטבע, לימודי טיפול בטראומה ודכאון באמצעות חומרים משנה תודעה ויצירת מרחבי ריפוי ויצירה. יחד איתה מטפלים ומנחים נוספים הנותנים מענה אישי ומקצועי לאורך כל הדרך.
                    </p>
                </div>

                <div className="custom-line"></div>
                <OrangeTitle text="החזרה הביתה" />
                <Title text="לבוגרי הריטריט" />

                <div style={{ fontSize: '17px' }}>
                    <span>
                        ריכזנו לכם קישורים להמשך טיפול פרטני באחת מהטכניקות שחויתם: האקומי, EMDR, ועוד כלים טיפוליים ומידע רב נוסף על אפשרויות טיפול ומיצוי זכויות.
                    </span>
                </div>

                <div>&nbsp;</div>

                <div style={{ fontSize: '20px' }}>
                    <Button onClick={() => navigate('/after-retreat')} variant="contained" color="primary">לדף המידע להמשך אחרי הריטריט </Button>
                </div>

                <div className="custom-line"></div>
                <Title text="הצצה לאוירת הריטריט" />
            </div>
            <div>
                <FullHeightGallery />
            </div>

        </div>
    )
}
