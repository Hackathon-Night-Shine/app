import Yoni from "../../assets/1.avif";
import David from "../../assets/2.avif";
import Liron from "../../assets/3.avif";
import Jizel from "../../assets/4_small.avif";
import Adi from "../../assets/5.avif";
import Gali from "../../assets/6.avif";
import Avi from "../../assets/Avi.avif";
import Ido from "../../assets/Ido-1BW.avif";
import Shira from "../../assets/Shira_05.avif";
import Adir from "../../assets/adir.avif";
import Chai from "../../assets/chai.avif";
import Dana from "../../assets/dana laor.avif";
import Dava from "../../assets/dava.avif";
import Eran from "../../assets/eran zamir.avif";
import Ester from "../../assets/ester.avif";
import Guy from "../../assets/guy.avif";
import Halel from "../../assets/halel.avif";
import Idan from "../../assets/idan.avif";
import Ilana from "../../assets/ilana.avif";
import Itay from "../../assets/itay.avif";
import Karina from "../../assets/karina.avif";
import Keren from "../../assets/keren.avif";
import Liori from "../../assets/liori.avif";
import Michal from "../../assets/michal.avif";
import Mira from "../../assets/mira.avif";
import Nizan from "../../assets/nizan.avif";
import Nofar from "../../assets/nofar.avif";
import Ofir from "../../assets/ofir.avif";
import Omri from "../../assets/omri.avif";
import Orit from "../../assets/orit.avif";
import Pinchas from "../../assets/pinchas.jpg";
import Rebeca from "../../assets/rebeca2.avif";
import Refael from "../../assets/refael.avif";
import Ronit from "../../assets/ronit.avif";
import Saray from "../../assets/saray.avif";
import Shachar from "../../assets/shachar.avif";
import Sharona from "../../assets/sharona.avif";
import Tal from "../../assets/tal.avif";
import Tamar from "../../assets/tamar.avif";
import Toli from "../../assets/toli.avif";
import Tuti from "../../assets/tuti.avif";
import Yuval from "../../assets/yuvi_edited.avif";
import "./index.css";

export const AboutUs = () => {
  const teamMembers = [
    { name: "יוני רדני", role: "הפקה בפועל ואירוח", image: Yoni },
    { name: "דוד אמיר", role: "הפקה בפועל ואירוח", image: David },
    { name: "לירון גבו", role: "הפקה בפועל ואירוח", image: Liron },
    { name: "אבי מזרחי", role: "הפקה בפועל ואירוח", image: Avi },
    { name: "ג'יזל צפיר", role: "שפית הבית", image: Jizel },
    { name: "אופיר הגלילי", role: "מנהלת מחקר", image: Ofir },
    { name: "נופר ינקלביץ", role: "צוות טלפונים", image: Nofar },
    { name: "עדי פודולור", role: "מנהלת משרד", image: Adi },
    { name: "ערן זמיר", role: "סאונד מן", image: Eran },
    { name: "דנה לאור", role: "עיצוב ארוח וחוויה", image: Dana },
    { name: "גלי שפירא", role: "עיצוב גרפי", image: Gali },
  ];
  const teamMembers2 = [
    {
      name: "ד״ר עידו סמיון",
      role: "ראש מכון האקומי, לפסיכותרפיה מבוססת מיינדפולנס וגוף, המשולבת בין חקירה עמוקה של חומרים לא מודעים, מודעות גוף ועבודה חווייתית ברגע ההווה. ומוביל מחקרים על שימוש בחומרים פסיכדליים לטראומה ודיכאון.",
      image: Ido,
    },
    {
      name: "דר אורית נחמיאס חיימווביץ",
      role: "פסיכולוגית קלינית מומחית, מטפלת בכירה ומדריכה בשיטת EMDR. שיטה טיפולית שעילותה הוכחה מחקרית כמסייעת לאנשים להחלים מטראומה.",
      image: Orit,
    },
    {
      name: "ד״ר תולי פלינט",
      role: "מבכירי המטפלים בשיטת EMDR בארץ.",
      image: Toli,
    },
    {
      name: "רונית סדגר",
      role: " פסיכולוגית, מטפלת ומדריכה בטיפול משפחתי. הקימה וניהלה את  המרכז הרב תחומי לטיפול בנפגעות תקיפה מינית בביח בני ציון, חיפה. מטפלת ומדריכה פסיכותרפיסטים בנושא פגיעות והטרדות מיניות, והדרכת מנהלים",
      image: Ronit,
    },
    {
      name: "אילנה בן אמיר",
      role: "פסיכולוגית קלינית מומחית, מייסדת שותפה במרכז SmartTherapy. מתמחה בשלוב חוויות מדומה VR ככלי טיפולי ייחודי, ומפתחת הכשרות למטפלים.",
      image: Ilana,
    },
    {
      name: "ד״ר שחר לב ארי, Ph.D.",
      role: "חבר סגל וראש החוג הקודם לקידום בריאות באוניברסיטת תל אביב. מייסד ומנהל לשעבר של מעבדת המחקר והמרכז לרפואה משלימה-משולבת במערך האונקולוגי של המרכז הרפואי תל אביב. זוכה פרס החוקר ישראלי מצטיין בתחום הרפואה המשלימה והאינטגרטיבית. חבר סגל אורח במעבדתו של פרופ' מייקל סניידר, מוביל עולמי בתחום רפואה מותאמת אישית באוניברסיטת סטנפור",
      image: Shachar,
    },
  ];
  const teamMembers3 = [
    {
      name: "פנחס כהן",
      role: "עובד סוציאלי קליני, מטפל ומנחה קבוצות",
      image: Pinchas,
    },
    {
      name: "דווה ג'י קידון",
      role: "מטפלת במים, טיפול בטראומה SE",
      image: Dava,
    },
    {
      name: "מיכל פישר",
      role: "מדריכה בריכת מאזן ומטפלת במים",
      image: Michal,
    },
    {
      name: "לירן אברהם",
      role: "פסיכולוגית שיקומית מומחית",
      image: Saray,
    },
    {
      name: "אדיר כהן",
      role: "עובד סוציאלי קליני ופסיכותרפיסט",
      image: Adir,
    },
  ];

  const teamMembers4 = [
    { name: "רפאל עמנואל רן", role: "קול יוגה", image: Refael },
    { name: "טיישאי שחר", role: "פסיכודרמה", image: Chai },
    { name: "יובל בן אלי", role: "פסיכודרמה", image: Yuval },
    { name: "קרן דרור", role: "עבודה טיפולית עם סוסים", image: Keren },
    { name: "רבקה רוזנשטיין", role: "יוגה", image: Rebeca },
    { name: "מירה פונצ׳ר", role: "פיסול בחימר", image: Mira },
    { name: "תמר ברי", role: "יצירה באדמה", image: Tamar },
    { name: "הלל גאודרו", role: "בישול והזנה", image: Halel },
    { name: "טל גניב", role: "story telling ומלאכות עתיקות", image: Tal },
    {
      name: "עידן מור (גדי וילצ׳רסקי)",
      role: "מרצה על צמיחה מפוסט טראומה",
      image: Idan,
    },
    {
      name: "גיא פליקסבורדט",
      role: "הריאציה ותודעה לצמיחה מטראומה",
      image: Guy,
    },
  ];

  const therapists = [
    { name: "אסתר פנחס", role: "טווינה, דיקור וצמחים", image: Ester },
    { name: "חוטי סהר בן טוב", role: "שיאצו, יוגה", image: Tuti },
    {
      name: "שרונה שביב",
      role: "איורוודה, רפואה הודית מסורתית",
      image: Sharona,
    },
    { name: "קרינה רוזנבאום", role: "עיסוי תאילנדי", image: Karina },
    {
      name: "איתי פוטר",
      role: "אבחה ואמפקון, טכניקות מגע יפניות",
      image: Itay,
    },
  ];
  return (
    <>
      <main>
        <h2 className="orange">מי אנחנו</h2>
        <h1 className="brown" style={{ marginBlock: 0 }}>
          מייסדי העמותה
        </h1>

        {/* קונטיינר של שני המייסדים */}
        <div style={{ display: "flex", gap: "10%", justifyContent: "center" }}>
          {/* ניצן קרן */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: "400px",
            }}
          >
            <img
              src={Nizan}
              alt="ניצן קרן - לילה כיום יאיר"
              width="268"
              height="279"
              style={{ width: 284, height: 279, borderRadius: "50%" }}
            />
            <h2 className="orange" style={{ marginBlock: 0 }}>
              ניצן קרן
            </h2>
            <h3 className="orange">יזם ומנהל הפקה</h3>
            <h4 className="brown">
              בעלים של חברת הפקה המתמחה בהפקת אירועים לחברות וארגונים
              בינלאומיים. מתמחה ביצירת מרחבים, ריטריטים שקשורים לרוח ותודעה, אחד
              מהמפיקים של זואי ריטריט מהנבחרים בארץ.
            </h4>
          </div>

          {/* שירה ברוקנר */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: "400px",
            }}
          >
            <img
              src={Shira}
              alt="שירה ברוקנר - לילה כיום יאיר"
              width="268"
              height="279"
              style={{ width: 284, height: 279, borderRadius: "50%" }}
            />
            <h2 className="orange">שירה ברוקנר</h2>
            <h3 className="orange" style={{ marginBlock: 0 }}>
              יזמית ומנהלת קלינית ותכנים
            </h3>
            <h4 className="brown">
              פסיכולוגית קלינית. מומחית בטיפול במצבי קיצון עם רקע עשיר של טיפול
              וניהול צוותים טיפוליים במסגרות שונות: צבא, קהיליית המודיעין, בית
              מאזן ועוד. זאת לצד ניסיון טיפולי רב בעבודת גוף-נפש, מסעות בטבע
              והכשרה של טיפול באמצעות חומרים משני תודעה. לצד הטיפול האישי, יוזמת
              ומאמינה במרחבי ריפוי. הייתה שותפה בין השאר בהקמת 'גאגא', "בין
              הצללים", ו'רוקדים שבעה', העוסק בהתמודדות עם מוות ואובדן.
            </h4>
          </div>
        </div>
      </main>
      <main className="backgroundColor">
        <h2 className="orange">מי אנחנו</h2>
        <h1 className="brown" style={{ marginBlock: 0 }}>
          שותפים לניהול{" "}
        </h1>
        {/* קונטיינר של שני המייסדים */}
        <div style={{ display: "flex", gap: "10%", justifyContent: "center" }}>
          {/* ניצן קרן */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: "400px",
            }}
          >
            <img
              src={Omri}
              alt="עמרי רוסו - לילה כיום יאיר"
              width="268"
              height="279"
              style={{ width: 284, height: 279, borderRadius: "50%" }}
            />
            <h2 className="orange" style={{ marginBlock: 0 }}>
              עמרי רוסו{" "}
            </h2>
            <h3 className="orange">מנהל תפעול </h3>
            <h4 className="brown">
              לומד, מתרגל ומלמד קצת יותר מעשור את הדרך הבודהיסטית, הגישה
              הלא-דואלית ותפיסות רוחניות נוספות. מטפל ברפואה סינית: דיקור,
              טווינה וצמחים, בפסיכולוגיה רוחנית ובעזרת סוסים. מלווה תהליכים
              אישיים וקבוצתיים דרך אספקטים של גוף-נפש-רוח וחקירה מבוססת
              מיינדפולנס. מתוך תהליכים אישיים שעבר בחייו, יש לו חיבור מיוחד
              בהתעמקות בתהליכי אבל ושכול וליווי אנשים במצבי קיצון וטראומה.
            </h4>
          </div>

          {/* שירה ברוקנר */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: "400px",
            }}
          >
            <img
              src={Liori}
              alt="ליאור גולדברג - לילה כיום יאיר"
              width="268"
              height="279"
              style={{ width: 284, height: 279, borderRadius: "50%" }}
            />
            <h2 className="orange">ליאור גולדברג</h2>
            <h3 className="orange" style={{ marginBlock: 0 }}>
              מנהלת קהילה{" "}
            </h3>
            <h4 className="brown">
              אשת טבע, חינוך, יצירה וטיפול. מנהלת קהילה ומלווה תהליכי ריפוי דרך
              חיבור עמוק לטבע ולעצמי. מאמינה ביצירת מרחבי קהילה רב תחומיים
              המשלבים תרבות, אומנות ושיח{" "}
            </h4>
          </div>
        </div>
      </main>
      <main>
        <h2 className="orange" style={{ marginBlock: 0 }}>
          מעטפת אנושית{" "}
        </h2>
        <h1 className="brown" style={{ marginBlock: 0 }}>
          {" "}
          ההפקה ומאחורי הקלעים
        </h1>
        <section className="team-container2">
          <div className="team-grid2">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image2"
                />
                <h3 className="team-name2">{member.name}</h3>
                <p className="team-role2">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <h2 className="orange" style={{ marginBlock: 0 }}>
        {" "}
        מטפלים בכירים
      </h2>
      <h1 className="brown" style={{ marginBlock: 0 }}>
        {" "}
        שותפים קלינים ומנחי סדנאות
      </h1>
      <h3 className="brown">את הריטריט מלווים מטפלים בכירים בתחום הטראומה</h3>

      <section className="team-container2">
        <div className="team-grid2">
          {teamMembers2.map((member, index) => (
            <div key={index} className="team-member2">
              <img
                src={member.image}
                alt={member.name}
                className="team-image2"
              />
              <h3 className="team-name2">{member.name}</h3>
              <p className="team-role2">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <main>
        <h2 className="orange" style={{ marginBlock: 0 }}>
          {" "}
          מעטפת אנושית{" "}
        </h2>
        <h1 className="brown" style={{ marginBlock: 0 }}>
          {" "}
          עיניים מלוות
        </h1>
        <h3 className="brown">
          {" "}
          כל משתתף בריטריט מלווה על ידי אנשי טיפול שתפקידם להיות "עיניים מלוות"
          לאורך כל הסדנה מקבלת הפנים ועד סיום הריטריט. במהלך הריטריט המלווה פוגש
          את המשתתפים בקבוצה קטנה ומלווה אותם בתהליך. בנוסף, תפקידו לזהות מצבים
          מורכבים, לתת מענה או להפנות לאיש טיפול בכיר יותר. לקראת סוף הריטריט
          מסייע בהכוונה ליציאה רכה אל העולם והמשך טיפול באחד מהכלים שבהם התנסה
          המשתתף בסדנה.
        </h3>

        <section className="team-container">
          <div className="team-grid">
            {teamMembers3.map((member, index) => (
              <div key={index} className="team-member2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image2"
                />
                <h3 className="team-name2">{member.name}</h3>
                <p className="team-role2">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <main>
        <h2 className="orange" style={{ marginBlock: 0 }}>
          {" "}
          סדנאות{" "}
        </h2>
        <h1 className="brown" style={{ marginBlock: 0 }}>
          {" "}
          מגוון שפות וכלים
        </h1>
        <h3 className="brown">
          {" "}
          במהלך הריטריט המשתתפים נחשפים לעבודה רגשית ומשאוב דרך כלים של קול,
          תנועה, מגע, מוסיקה, אומנות, כתיבה, מלאכות עתיקות, טבע ועוד. הכוונה היא
          לתת לכל אדם את הביטוי והעבודה בשפה שלו ולהחשף למגוון כלים חדשים.
        </h3>

        <section className="team-container2">
          <div className="team-grid2">
            {teamMembers4.map((member, index) => (
              <div key={index} className="team-member2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image2"
                />
                <h3 className="team-name2">{member.name}</h3>
                <p className="team-role2">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <main>
        <h2 className="orange" style={{ marginBlock: 0 }}>
          {" "}
          המיכל{" "}
        </h2>
        <h1 className="brown" style={{ marginBlock: 0 }}>
          {" "}
          מטפלי גוף
        </h1>
        <section className="team-container2">
          <div className="team-grid2">
            {therapists.map((member, index) => (
              <div key={index} className="team-member2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image2"
                />
                <h3 className="team-name2">{member.name}</h3>
                <p className="team-role2">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <main>
        <h4 className="orange">חברי העמותה</h4>
        <h5>
          שניר מחלוף, אילנה בן אמיר, גל פסח, יואל ויברה, דוד רוזנברג, גלעד תלמי,
          יונתן סולז׳, אפרת גולדברג, רינת לפידות
        </h5>
        <h4 className="orange">וועד מנהל</h4>
        <h5>גיא מלל ואביעד פינטו</h5>
        <h4 className="orange">וועדת ביקורת</h4>
        <h5>גל פסח ורינת לפידות</h5>
      </main>
    </>
  );
};
