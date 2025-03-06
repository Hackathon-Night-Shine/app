import { Card, CardContent, CardActions, Button, Typography, Container, Grid } from "@mui/material";
import './index.css';
import photo from '../../assets/woman.avif';

const therapists = [
    { name: "Jane Doe", specialty: "Hakomi Therapy", location: "Tel Aviv", contact: "jane@example.com" },
    { name: "John Smith", specialty: "EMDR Therapy", location: "Jerusalem", contact: "john@example.com" },
];

export function AfterRetreat() {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h3" gutterBottom>אחרי הריטריט</Typography>
            <Typography paragraph>מקווים שהדרך חזרה והנחיתה הייתה רכה וטובה

                רוצים לוודא שאתם ממשיכים את המסע  בידיים טובות, שנכונות לכם.

                ריכזנו לכם בימים האחרונים קישורים להמשך טיפול פרטני באחת מהטכניקות שחויתם: האקומי , EMDR. בכל אחת מהם מוצעים שלושה מפגשים חינם
                .  <br />
                כמו כן ריכזנו את מטפלי הגוף שפגשתם ברטריט,
                אליהם תוכלו ישירות להתקשר ולקבוע בתשלום.


                <br />
                הריטריטים הבאים שלנו מפורסמים פה באתר בדף הריטריט.

                אם יש לכם חבר-ה שאתם חושבים שהחויה הזו יכולה להיות עבורו  מייטיבה, זה הזמן לשלוח להם ולנו פרטים, כדי שנוכל לדבר איתם ולשריין להם מקום. כמו שאתם יודעים, המקום מוגבל, ונשמח להרחיב את המעגל מפה לאוזן, או ללב.</Typography>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScYbnmleRTAqfP09hfIPrud1O0KMpkd9TeDatH7SGXGBLbXWw/viewform" target="_black">
                <Button >למילוי משוב לחץ כאן</Button>
            </a>
            <div className="custom-line"></div>

            <Typography variant="h5" gutterBottom>הרפיית ג׳קובסון</Typography>
            <video src="https://youtu.be/4h_vaLjQSE0" width={600}
                height={400}
                controls
                autoPlay
            ></video>
            <div className="custom-line"></div>

            <Typography paragraph>EMDR Israel</Typography>
            <Typography paragraph>טיפולים לנפגעי המלחמה בפסיכותרפיית EMDR Israel

                הפעילות הטיפולית פרובונו של מטפלי ומטפלות emdr מתרחבת.
                מוזמנים להירשם בהתאם לצורך ונציג מטעמנו יצור קשר טלפוני ותשובצו לטיפול לפי הצורך שלך.</Typography>


            <img style={{ width: '100%' }} src={photo} />
        </Container>
    );
}
