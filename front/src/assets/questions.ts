export const questions = [
  {
    type: "date",
    label: "מה התאריך של הסדנה שהשתתפת בה?",
    id: "courseDate",
    required: true,
  },
  {
    type: "rating",
    label: "כיצד היית מדרג/ת את מצב הרוח הכללי שלך לפני תחילת הסדנה?",
    id: "rating1",
    required: true,
  },
  {
    type: "rating",
    label: "כיצד היית מדרג/ת את מצב הרוח הכללי שלך לאחר שסיימת את הסדנה?",
    id: "rating2",
    required: true,
  },
  {
    type: "rating",
    label: "האם הרגשת שהקהילה הקטנה שנוצרה בסדנה תומכת בתהליך האישי שלך?",
    id: "rating3",
    required: true,
  },
  {
    type: "text",
    label: "ספר/י על שני דברים משמעותיים שלקחת מהסדנה",
    id: "text1",
    multiline: true,
  },
  {
    type: "text",
    label: "מהי הסדנה שהייתה הכי משמעותית עבורך?",
    id: "text2",
    multiline: true,
  },
  {
    type: "text",
    label: "האם הייתה סדנה שהיית מוותר/ת עליה?",
    id: "text3",
    multiline: true,
  },
  {
    type: "text",
    label: "מה היית מוסיפ/ה, משנה או משפר/ת?",
    id: "text4",
    multiline: true,
  },
  {
    type: "checkbox",
    label: "בחר סדנאות עליהן תרצה למלא משוב",
    id: "subCourses",
    options: ["סדנת האקומי", "סדנת EMDR", "סדנת התמקדות "],
  },
  {
    type: "select",
    label: "האם היית רוצה להשתתף בסדנת המשך של 'לילה כיום יאיר'?",
    id: "select1",
    options: ["בהחלט", "קשה לי להחליט כרגע", "הסדנה הזאת הספיקה לי"],
  },
  {
    type: "text",
    label: `נשמח ונודה מאוד אם תקדיש/י רגע מזמנך לפרגן לנו בהמלצה אותה נוכל לפרסם.
שתף/י מה קיבלת מהסדנה? כיצד הרגשת במהלכה? מה הבנת או למדת על עצמך?
ואם זה מרגיש לך בנוח, זה יהיה נהדר אם תוסיפ/י את שמך ואת העיסוק שלך`,
    id: "text5",
    multiline: true,
  },
  {
    type: "text",
    label: "משהו נוסף שהיית רוצה שנדע?",
    id: "text6",
    multiline: true,
  },
  {
    type: "text",
    label: "שם מלא (רשות)",
    id: "text7",
    multiline: true,
  },
];

export const subCourseQuestions = [
  {
    type: "rating",
    label: "מה הציון שמתאים לטעמך לתוכן הסדנה?",
    id: "rating1",
  },
  {
    type: "rating",
    label: "מה הציון שמתאים לרמת ההנחייה?",
    id: "rating2",
  },
  {
    type: "text",
    label: "נשמח לשמוע מה קיבלת מהסדנה",
    id: "text",
    multiline: true,
  },
];
