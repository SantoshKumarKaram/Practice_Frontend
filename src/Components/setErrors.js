export const setErrors = (question,number,language,difficulty,answer,hint,message)=>{
let errors = {};
errors.question = question?"":"Question is required"
errors.number = number?"":"number is required"
errors.language = language?"":"select a language"
errors.difficulty = difficulty?"":"select a level"
errors.answer = answer?"":"Answer is required"
errors.hint = hint?"":"Hint is required"
errors.message=message?"":"Fill it"
return errors;
};
