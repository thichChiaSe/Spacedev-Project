/**
 * @param {*} rules
 * @param {*} forms
 * @returns plan error object -> nghĩa là object này chỉ chứa các thông báo lỗi
 */
const ERROR_MESSAGE = {
  required: "Please fill in this field",
  regexp: "Field  not like format",
};
const REGEXP = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
  url: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
};
export const validate = (rules, forms) => {
  const errorObject = {};
  for (let name in rules) {
    for (let rule of rules[name]) {
      // nó sẽ đi qua từng items trong rule[name]
      if (rule.required) {
        if (!forms[name]?.trim()) {
          errorObject[name] = rule.message || ERROR_MESSAGE.required;
        }
      }
      if (rule.regexp && forms[name]) {
        let regexp = rule.regexp;
      }
      if (rule.regexp && forms[name]) {
        let regexp = rule.regexp;
        if (regexp in REGEXP) {
          regexp = REGEXP[regexp];
          //user truyền 1 đoạn string không nằm trong REGEXP thì rơi vào trường hợp bên dưới
        } else if (!(regexp instanceof RegExp)) {
          regexp = new RegExp();
        }
        if (!regexp.test(forms[name])) {
          errorObject[name] = rule.message || ERROR_MESSAGE.regexp;
        }
      }
    }
  }
  return errorObject;
};

export const required = (message) => ({
  message,
  required: true,
});

export const regexp = (pattern,message) => ({
  regexp:pattern,
  message
})