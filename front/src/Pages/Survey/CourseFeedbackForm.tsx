// import React, { useState } from "react";
// import {
//   TextField,
//   Select,
//   MenuItem,
//   Button,
//   FormControl,
//   InputLabel,
//   Checkbox,
//   FormGroup,
//   FormControlLabel,
//   Box,
//   Paper,
//   Typography,
//   Radio,
//   RadioGroup,
//   Container,
//   FormHelperText,
// } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { questions, subCourseQuestions } from "../../assets/questions";

// const CourseFeedbackForm = () => {
//   const [formData, setFormData] = useState(() => {
//     const initialFormData = {};
//     questions.forEach((question) => {
//       initialFormData[question.id] =
//         question.type === "rating"
//           ? null
//           : question.type === "checkbox"
//             ? []
//             : "";
//     });
//     initialFormData.subCourseQuestions = {};
//     return initialFormData;
//   });

//   const [errors, setErrors] = useState(() => {
//     const initialErrors = {};
//     questions.forEach((question) => {
//       initialErrors[question.id] = false;
//     });
//     return initialErrors;
//   });

//   const handleChange = (e, subCourse = null) => {
//     const { name, value, type, checked } = e.target;

//     setFormData((prev) => {
//       let newValue = value;

//       if (type === "checkbox" && name === "subCourses") {
//         newValue = checked
//           ? [...prev[name], value]
//           : prev[name].filter((item) => item !== value);

//         const newSubCourseQuestions = { ...prev.subCourseQuestions };

//         if (checked) {
//           // Initialize questions for the newly selected subcourse
//           newSubCourseQuestions[value] = {};
//           subCourseQuestions.forEach((q) => {
//             newSubCourseQuestions[value][q.id] =
//               q.type === "rating" ? null : "";
//           });
//         } else {
//           // Remove questions for the deselected subcourse
//           delete newSubCourseQuestions[value];
//         }

//         return {
//           ...prev,
//           [name]: newValue,
//           subCourseQuestions: newSubCourseQuestions,
//         };
//       } else if (subCourse) {
//         return {
//           ...prev,
//           subCourseQuestions: {
//             ...prev.subCourseQuestions,
//             [subCourse]: {
//               ...prev.subCourseQuestions[subCourse],
//               [name]: type === "radio" ? parseInt(value) : value,
//             },
//           },
//         };
//       } else {
//         return { ...prev, [name]: newValue };
//       }
//     });

//     setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
//   };

//   const handleDateChange = (date, questionId) => {
//     setFormData((prev) => ({ ...prev, [questionId]: date }));
//     setErrors((prev) => ({ ...prev, [questionId]: false }));
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = {};

//     questions.forEach((question) => {
//       if (question.required) {
//         if (question.type === "checkbox") {
//           newErrors[question.id] =
//             !formData[question.id] || formData[question.id].length === 0;
//         } else {
//           newErrors[question.id] = !formData[question.id];
//         }
//         if (newErrors[question.id]) {
//           isValid = false;
//         }
//       } else {
//         newErrors[question.id] = false;
//       }
//     });

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form submitted:", formData);
//       // Here you would typically send the data to your backend
//     } else {
//       console.log("Form has errors, please fix them.");
//     }
//   };
//   const renderQuestion = (question) => {
//     switch (question.type) {
//       case "date":
//         return (
//           <Box
//             key={question.id}
//             sx={{ my: 2, textAlign: "right", direction: "rtl" }}
//           >
//             <Typography
//               variant="subtitle1"
//               sx={{ textAlign: "right", direction: "rtl" }}
//             >
//               {question.label}
//             </Typography>
//             <DatePicker
//               value={formData[question.id]}
//               onChange={(date) => handleDateChange(date, question.id)}
//               format="dd/MM/yyyy"
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   fullWidth
//                   required={question.required}
//                   error={errors[question.id]}
//                   helperText={
//                     errors[question.id] ? "This field is required" : ""
//                   }
//                   sx={{
//                     bgcolor: "white",
//                     borderRadius: 1,
//                     "& .MuiOutlinedInput-root": {
//                       "& fieldset": {
//                         borderColor: "#5E2E12",
//                       },
//                       "&:hover fieldset": {
//                         borderColor: "#F78439",
//                       },
//                     },
//                     textAlign: "right",
//                     direction: "rtl",
//                   }}
//                 />
//               )}
//             />
//           </Box>
//         );
//       case "rating":
//         return (
//           <Box
//             key={question.id}
//             sx={{ my: 2, textAlign: "right", direction: "rtl" }}
//           >
//             <Typography sx={{ textAlign: "right", direction: "rtl" }}>
//               {question.label}
//             </Typography>
//             <RatingCircles
//               name={question.id}
//               value={
//                 formData[question.id] !== null
//                   ? formData[question.id].toString()
//                   : ""
//               }
//               onChange={(e) => handleChange(e)}
//               error={errors[question.id]}
//             />
//           </Box>
//         );
//       case "text":
//         return (
//           <Box
//             key={question.id}
//             sx={{ my: 2, textAlign: "right", direction: "rtl" }}
//           >
//             <Typography sx={{ textAlign: "right", direction: "rtl" }}>
//               {question.label}
//             </Typography>
//             <TextField
//               fullWidth
//               multiline={question.multiline}
//               placeholder="התשובה שלך"
//               name={question.id}
//               value={formData[question.id]}
//               onChange={(e) => handleChange(e)}
//               required={question.required}
//               error={errors[question.id]}
//               helperText={errors[question.id] ? "This field is required" : ""}
//               sx={{
//                 bgcolor: "white",
//                 borderRadius: 1,
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": {
//                     borderColor: "#5E2E12",
//                   },
//                   "&:hover fieldset": {
//                     borderColor: "#F78439",
//                   },
//                 },
//                 textAlign: "right",
//                 direction: "rtl",
//               }}
//             />
//           </Box>
//         );
//       case "select":
//         return (
//           <Box
//             key={question.id}
//             sx={{ my: 2, textAlign: "right", direction: "rtl" }}
//           >
//             <Typography
//               variant="subtitle1"
//               sx={{ textAlign: "right", direction: "rtl" }}
//             >
//               {question.label}
//             </Typography>
//             <FormControl fullWidth required={question.required}>
//               <InputLabel id={`${question.id}-label`}>
//                 {question.label}
//               </InputLabel>{" "}
//               {/* Add an ID to the InputLabel */}
//               <Select
//                 labelId={`${question.id}-label`} // Use the ID for the Select
//                 label={question.label}
//                 name={question.id}
//                 value={formData[question.id]}
//                 onChange={(e) => handleChange(e)}
//                 error={errors[question.id]}
//                 sx={{
//                   bgcolor: "white",
//                   borderRadius: 1,
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "#5E2E12",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "#F78439",
//                     },
//                   },
//                   textAlign: "right",
//                   direction: "rtl",
//                 }}
//               >
//                 <MenuItem value="" disabled>
//                   בחר אפשרות
//                 </MenuItem>{" "}
//                 {/* Placeholder option */}
//                 {question.options.map((option) => (
//                   <MenuItem key={option} value={option}>
//                     {option}
//                   </MenuItem>
//                 ))}
//               </Select>
//               <FormHelperText error={errors[question.id]}>
//                 {errors[question.id] ? "This field is required" : ""}
//               </FormHelperText>
//             </FormControl>
//           </Box>
//         );
//       case "checkbox":
//         return (
//           <Box
//             key={question.id}
//             sx={{ my: 2, textAlign: "right", direction: "rtl" }}
//           >
//             <Typography
//               variant="subtitle1"
//               sx={{ textAlign: "right", direction: "rtl" }}
//             >
//               {question.label}
//             </Typography>
//             <FormGroup sx={{ direction: "rtl" }}>
//               {question.options.map((option) => (
//                 <FormControlLabel
//                   key={option}
//                   control={
//                     <Checkbox
//                       name={question.id}
//                       value={option}
//                       checked={formData[question.id].includes(option)}
//                       onChange={(e) => handleChange(e)}
//                       sx={{
//                         color: "#5E2E12",
//                         "&.Mui-checked": {
//                           color: "#F78439",
//                         },
//                         direction: "rtl",
//                       }}
//                     />
//                   }
//                   label={option}
//                   sx={{ textAlign: "right", direction: "rtl" }}
//                 />
//               ))}
//             </FormGroup>
//             {errors[question.id] && (
//               <FormHelperText error>This field is required</FormHelperText>
//             )}
//             {formData["subCourses"].map((subCourse) =>
//               renderSubCourseQuestions(subCourse)
//             )}
//           </Box>
//         );
//       default:
//         return null;
//     }
//   };
//   const renderSubCourseQuestions = (subCourse) => {
//     return (
//       <Box
//         key={subCourse}
//         sx={{
//           my: 2,
//           textAlign: "right",
//           border: "1px solid #5E2E12",
//           borderRadius: 2,
//           p: 2,
//           direction: "rtl",
//         }}
//       >
//         <Typography
//           variant="h6"
//           sx={{ textAlign: "right", mb: 2, direction: "rtl" }}
//         >
//           {subCourse}:
//         </Typography>
//         {subCourseQuestions.map((question) => (
//           <Box
//             key={question.id}
//             sx={{ my: 2, textAlign: "right", direction: "rtl" }}
//           >
//             <Typography sx={{ direction: "rtl" }}>{question.label}</Typography>
//             {question.type === "rating" ? (
//               <RatingCircles
//                 name={question.id}
//                 value={
//                   formData.subCourseQuestions[subCourse]?.[question.id] || null
//                 }
//                 onChange={(e) => handleChange(e, subCourse)}
//                 error={false}
//               />
//             ) : (
//               <TextField
//                 fullWidth
//                 multiline={question.multiline}
//                 placeholder="תשובה כאן"
//                 name={question.id}
//                 value={
//                   formData.subCourseQuestions[subCourse]?.[question.id] || ""
//                 }
//                 onChange={(e) => handleChange(e, subCourse)}
//                 sx={{
//                   bgcolor: "white",
//                   borderRadius: 1,
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "#5E2E12",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "#F78439",
//                     },
//                   },
//                   textAlign: "right",
//                   direction: "rtl",
//                 }}
//                 InputProps={{
//                   style: {
//                     textAlign: "right",
//                     direction: "rtl", // Ensure text input is right-aligned
//                   },
//                 }}
//               />
//             )}
//           </Box>
//         ))}
//       </Box>
//     );
//   };
//   const RatingCircles = ({ value, onChange, name, error }) => {
//     return (
//       <Box sx={{ textAlign: "right", direction: "rtl" }}>
//         <RadioGroup
//           row
//           name={name}
//           value={value !== null ? value.toString() : ""}
//           onChange={onChange}
//           sx={{ justifyContent: "flex-start", my: 1, direction: "rtl" }}
//         >
//           {[1, 2, 3, 4, 5].map((rating) => (
//             <Box
//               key={rating}
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 direction: "rtl",
//               }}
//             >
//               <Typography variant="caption">{rating}</Typography>
//               <Radio
//                 value={rating.toString()}
//                 sx={{
//                   color: error ? "error.main" : "#5E2E12",
//                   "&.Mui-checked": {
//                     color: error ? "error.main" : "#F78439",
//                   },
//                   "& .MuiSvgIcon-root": {
//                     fontSize: 28,
//                   },
//                   direction: "rtl",
//                 }}
//                 icon={
//                   <span
//                     style={{
//                       width: 20,
//                       height: 20,
//                       borderRadius: "50%",
//                       border: `2px solid ${error ? "#f44336" : "#5E2E12"}`,
//                       display: "inline-block",
//                       direction: "rtl",
//                     }}
//                   />
//                 }
//                 checkedIcon={
//                   <span
//                     style={{
//                       width: 20,
//                       height: 20,
//                       borderRadius: "50%",
//                       border: `2px solid ${error ? "#f44336" : "#F78439"}`,
//                       backgroundColor: error ? "#f44336" : "#F78439",
//                       display: "inline-block",
//                       direction: "rtl",
//                     }}
//                   />
//                 }
//               />
//             </Box>
//           ))}
//         </RadioGroup>
//         {error && <FormHelperText error>This field is required</FormHelperText>}
//       </Box>
//     );
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Container maxWidth={false} disableGutters>
//         <Box
//           p={4}
//           component={Paper}
//           elevation={3}
//           sx={{
//             backgroundColor: "#F9F6F0",
//             color: "#5E2E12",
//             borderRadius: 2,
//             padding: "20px",
//             boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//             textAlign: "right", // Global alignment for the form
//             direction: "rtl",
//           }}
//         >
//           <Typography
//             variant="h5"
//             fontWeight="bold"
//             mb={2}
//             textAlign="right"
//             direction="rtl"
//           >
//             טופס ביקורת
//           </Typography>

//           <form onSubmit={handleSubmit} style={{ direction: "rtl" }}>
//             {questions.map((question) => renderQuestion(question))}

//             {/* Submit Button */}
//             <Button
//               fullWidth
//               variant="contained"
//               type="submit"
//               sx={{
//                 mt: 2,
//                 bgcolor: "#F78439",
//                 "&:hover": {
//                   bgcolor: "#d96a28",
//                 },
//                 float: "left", // Align button to the right
//                 direction: "rtl",
//               }}
//             >
//               Submit
//             </Button>
//           </form>
//         </Box>
//       </Container>
//     </LocalizationProvider>
//   );
// };

// export default CourseFeedbackForm;
