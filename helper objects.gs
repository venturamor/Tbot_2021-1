/**
 * Object that saves the fields in the users spreadsheet
 */
const fieldUsers = {
  id: 1,
  name: 2,
  lastSeen: 3,
  reg1: 4,
  reg2: 5,
  reg3: 6,
  reg4: 7,
  reg5: 8,
  authorized: 10
}

/**
 * Object that saves the fields in the general part in the json from cheese&fork
 */
const fieldNamesGeneral = {
  faculty: "פקולטה",
  courseName: "שם מקצוע",
  courseNumber: "מספר מקצוע",
  nakaz: "נקודות",
  lecture: "הרצאה",
  tutorial: "תרגיל",
  lab: "מעבדה",
  seminar: "סמינר\/פרויקט",
  kdam: "מקצועות קדם",
  silabus: "סילבוס",
  lead: "אחראים",
  examA: "מועד א",
  examB: "מועד ב"
}

/**
 * Object that saves the fields in schedule part in the json from cheese&fork
 */
const fieldNamesSchedule = {
  group: "קבוצה",
  num: "מס.",
  type: "סוג",
  lead: "מרצה\/מתרגל",
  day: "יום",
  time: "שעה",
  place: "בניין",
  room: "חדר"
}

/**
 * object that saves the fields in the cources spreadsheets
 */
const fieldCourses = {
  faculty: 1,
  courseName: 2,
  courseNumber: 3,
  silabus : 4,
  kdam: 5,
  lead: 6,
  examA: 7,
  examB: 8,
  nakaz: 9,
  lecture: 10,
  tutorial: 11,
  lab: 12,
  seminar: 13,
  zoom: 14,
  telegram: 15,
  teams: 16,
  whatsApp: 17,
  spreadsheet: 18
}

/**
 * object that saves the fields in the HaifaEvents spreadsheet
 */
//Mor_
const HaifaEventsfields = {
  event : 1, 
  date : 2,
  hour : 3,
  location : 4, 
  category : 5,
  link : 6, 
  image : 7
}
