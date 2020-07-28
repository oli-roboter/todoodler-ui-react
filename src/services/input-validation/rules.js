import validation from './validation';

const rules = {
  title: [
    { rule: (input) => validation.isLongerThan(input, 5), error: "can't be less than 5 characters" },
    { rule: (input) => validation.isNotEmpty(input), error: "can't be empty" },
  ],
  detail: [
    { rule: (input) => validation.isLongerThan(input, 5), error: "can't be less than 5 characters" },
    { rule: (input) => validation.isNotEmpty(input), error: "can't be empty" },
  ],
};

const validateInput = (ruleDescription, input) => {
  const ruleType = rules[ruleDescription];
  let errorMsg = null;
  ruleType.every((rule) => {
    const result = rule.rule(input);
    // console.log('RESULT', result, rule);
    if (!result) errorMsg = rule.error;
    return result;
  });
  return errorMsg;
};

export default validateInput;
