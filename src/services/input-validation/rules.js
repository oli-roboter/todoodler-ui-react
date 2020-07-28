import validation from './validation';

const { isLongerThan, isEmpty } = validation;

const rules = {
  title: [
    { rule: (input) => isLongerThan(input, 5), error: "can't be less than 5 characters" },
  ],
  detail: [
    {
      rule: (input) => isLongerThan(input, 5) || isEmpty(input),
      error: "can't be less than 9 characters",
    },
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
