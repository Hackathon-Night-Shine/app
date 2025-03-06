import { Grid2, Stack, Typography } from "@mui/material";
import photo1 from "../../assets/TZEIRIM_LOGO_1_edited.avif";
import photo2 from "../../assets/thanks.avif";

const centeredPanel = {
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "8em",
};

const participantsReviews = [
  "הייתי בתחתית וחסר כל תקווה וחזר לי הצבע לחיים",
  "הרגשתי לפני הריטריט כאילו החיים נצבעו בשחור והראיתם לי שאפשר להחזיר את הצבע",
  "חזרתי הביתה מואר, חשבתי שאני לא אצא מהלופ הזה של הכעס העצמי, ופשוט בזכות נוכחות של כל אחד ואחת מכם, הצלחתי לחזור לעצמי ולהתייחס פנימה והחוצה בחמלה ואהבה.\nוהמשפט הזה מקבל בשבילי משמעות ענקית פתאום ״לילה כיום יאיר״\nשנשמור על האור שלנו דולק תמיד",
  "עברתי מסע של עיבוד ולמדתי כלים שכבר היום השתמשתי בהם והרגשתי שהם עוזרים לי בזמן אמת",
  "כבר מרגיש אחר, וניכר גם דרך ההשתקפות מהסביבה.\nמודה על כולכם",
  "היה שווה להישאר בחיים כדי להגיע לרגע הזה איתכם שאנחנו חולקים ומשתפים באהבה הטהורה שלנו. אמן שתדעו אהבה בכל דרך שתבחרו להמשיך ללכת בה ותדעו לחלוק את אהבתכם עם העולם. מאחל לנו שנדע להעביר את האהבה הזאת הלאה ומתוך המעגל הקטן שלנו נוכל ליצור עוד ועוד מעגלים של אהבה ואולי בסוף כל העולם יהיה מעגל אהבה אחד גדול",
];

const Home: React.FC = () => (
  <div
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Stack
      style={{
        ...centeredPanel,
        background:
          'url("https://static.wixstatic.com/media/1ed143_57f11dec29b14e6fbc147fce304e41f3~mv2.jpg/v1/fill/w_1895,h_819,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1ed143_57f11dec29b14e6fbc147fce304e41f3~mv2.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        style={{
          width: "285px",
          height: "auto",
        }}
        src="https://static.wixstatic.com/media/1ed143_e434f89406ee4a5d8f926498b6513148~mv2.png/v1/fill/w_428,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%D7%9C%D7%99%D7%9C%D7%94%20%D7%9B%D7%99%D7%95%D7%9D%20%D7%99%D7%90%D7%99%D7%A8_4x.png"
      ></img>
    </Stack>

    <Stack style={{ ...centeredPanel }}>
      <h1 style={{ fontSize: "48px", color: "#5e2e12" }}>על לילה כיום יאיר</h1>

      <Typography>
        כשבוע מראשית המלחמה יצרנו מרחב ריפוי שנותן מענה מקיף ומקצועי לעיבוד
        ושחרור של הארועים, על מנת לייצר 'חיסון' שיקטין את הסיכוי להתפתחות
        תסמינים של פוסט טראומה, ולהעצים את התקווה והאמונה שאפשר לחיות חיים מלאים
        אחרי ארוע מסוג זה, ואף לצמוח מתוכו.
      </Typography>

      <Typography>
        <a
          href="https://www.laylakeyomyair.org/about-the-retreat"
          target="_self"
        >
          קראו עוד על הריטריטים שלנו&nbsp;
        </a>
      </Typography>
    </Stack>

    <Stack
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F7DFC7",
        paddingBlock: "3%",
        width: "100%",
        color: "rgb(94, 46, 18)",
      }}
    >
      <video
        src={
          "https://video.wixstatic.com/video/1ed143_f78b7019c3d94dbcb405104a0f3c6462/1080p/mp4/file.mp4"
        }
        width={900}
        height={500}
        controls
      ></video>
    </Stack>
    <Stack
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingBlock: "3%",
        width: "1263px",
        height: "921px",
        background:
          'url("https://static.wixstatic.com/media/ded4d3_c92d3d4aed04440fa581ae6a6ffd658f~mv2.jpg/v1/fill/w_1828,h_1333,al_c,q_90,enc_avif,quality_auto/ded4d3_c92d3d4aed04440fa581ae6a6ffd658f~mv2.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow: "inset 0 0 0 1000px rgba(94, 46, 18,.8)",
      }}
    >
      <Typography
        variant="h3"
        style={{ fontWeight: "800", color: "rgb(243, 176, 115)" }}
      >
        משתתפים מספרים
      </Typography>
      <Grid2 container spacing={1} width={"70%"}>
        {participantsReviews.map((review) => (
          <Grid2 size={6} alignContent="center">
            <img
              width={53}
              height={31}
              src="https://static.wixstatic.com/media/ded4d3_32ef1a394e2244109d63df3adf6c29a9~mv2.png/v1/fill/w_80,h_47,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/illustration_2x.png"
            />
            <Typography
              variant="subtitle1"
              style={{ color: "white", fontWeight: "bold" }}
            >
              "{review}"
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </Stack>

    <div
      style={{
        display: "flex",
        gap: "30%",
        justifyContent: "center",
        backgroundColor: "#F7DFC7",
        paddingBlock: "3%",
        width: "100%",
        color: "rgb(94, 46, 18)",
      }}
    >
      <div style={{ width: "55vw" }}>
        <h1 style={{ fontSize: "60px", marginBlock: 0 }}>כתבו עלינו</h1>
        <a
          href="https://www.maariv.co.il/news/israel/Article-1049995"
          target="_blank"
        >
          <img
            style={{
              marginBlock: "10%",
              height: "228px",
              borderRadius: "14px",
            }}
            src="https://static.wixstatic.com/media/1ed143_5873827faae34fe5a73555203074e0e6~mv2.png/v1/fill/w_900,h_342,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202023-11-12%20at%2013_22_18.png"
            loading="lazy"
          />
        </a>
        <a
          href="https://www.timesofisrael.com/for-killing-field-party-survivors-meditation-with-horses-offers-new-therapeutic-hope/"
          target="_blank"
        >
          <img
            src="https://static.wixstatic.com/media/1ed143_b159ef76deeb4077a6991d19d424101d~mv2.png/v1/fill/w_900,h_342,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202023-11-09%20at%2020_09_45.png"
            loading="lazy"
            style={{ height: "228px", borderRadius: "14px" }}
          />
        </a>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#F3B073",
        paddingBlock: "3%",
        width: "100%",
        color: "rgb(94, 46, 18)",
      }}
    >
      <div style={{ width: "35vw" }}>
        <div style={{ fontSize: "20px", fontWeight: 600 }}>
          לא יכלנו לעשות את זה בלי השותפים שלנו שהאמינו ברעיון והעמידו לרשותנו
          מימון באהבה
        </div>
        <h1 style={{ fontSize: "60px", marginBlock: 0 }}>תודה</h1>
        <img src={photo2} />
        <img src={photo1} />
      </div>
    </div>
  </div>
);

export default Home;
