import { useState } from 'react'

import './index.css'

function Gallery() {
    const images = [
        "/images/ded4d3_5f548152104b4fe0b2ad2a578ef9f832~mv2.avif",
        "/images/ded4d3_716a3140d7774b1ebee398f983d6f78c~mv2.avif",
        "/images/ded4d3_28bccaaf77ed4641bf9d099f85ad6a3c~mv2.avif",
        "/images/ded4d3_f270a541f0744338ae9edf94377bf892~mv2.avif",
        "/images/ded4d3_f363babe43b847709de9d4036cea279c~mv2.avif",
        "/images/ded4d3_2e558787fb374ec0915dfc8f69bb8c0c~mv2.avif",
        "/images/ded4d3_ab9a260cd87048f284f08cbd9f7d6e5e~mv2.avif",
        "/images/ded4d3_a85a30700055448aa5429c38d3624af2~mv2.avif",
        "/images/ded4d3_c59a2d304da94130964833d8c21db290~mv2.avif",
        "/images/ded4d3_35eb53b566884f62b24263575d46b3e8~mv2.avif",
        "/images/ded4d3_3a76464d031049d7bce8c83bc1c0a746~mv2.avif",
        "/images/ded4d3_640bb118128449779b645ea529506812~mv2.avif",
        "/images/ded4d3_0f9ae8ecd098492eaf17a5584f3cf725~mv2.avif",
    ];

    return (
        <div className="gallery">
            {images.map((src, index) => (
                <img key={index} src={src} alt={`Gallery Image ${index + 1}`} />
            ))}
        </div>
    );
}

const Title = ({ text }: { text: string }) => {
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

    return (

        <div>

            <div style={{ width: '60%', margin: '0 auto', textAlign: 'center' }}>
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

                <div>
                    <OrangeTitle text="החזרה הביתה" />
                </div>

                <div>
                    <Title text="לבוגרי הריטריט" />
                </div>


                <div style={{ fontSize: '17px' }}>
                    <span>
                        ריכזנו לכם קישורים להמשך טיפול פרטני באחת מהטכניקות שחויתם: האקומי, EMDR, ועוד כלים טיפוליים ומידע רב נוסף על אפשרויות טיפול ומיצוי זכויות.
                    </span>
                </div>

                <div style={{ fontSize: '20px' }}>
                    <span>
                        לדף המידע להמשך אחרי הריטריט
                    </span>
                </div>

                <div>
                    <Title text="הצצה לאוירת הריטריט" />
                </div>

            </div>


            <div>
                <Gallery />
            </div>

        </div>
    )
}
