/**
Problem 3: Private Variables
Write a function createSecretHolder that takes a secret value. The function should return an object with two methods: getSecret and setSecret. The secret value should only be accessible through these methods.

const secret = createSecretHolder(12345);
console.log(secret.getSecret()); // 12345
secret.setSecret(67890);
console.log(secret.getSecret()); // 67890
 */

const createSecretHolder = function (value) {
  let secretValue = value;
  return {
    getSecret: () => {
      return secretValue;
    },
    setSecret: (newValue) => {
      secretValue = newValue;
    },
  };
};

const secret = createSecretHolder(12345);
console.log(secret.getSecret()); // 12345
secret.setSecret(67890);
console.log(secret.getSecret()); // 67890
