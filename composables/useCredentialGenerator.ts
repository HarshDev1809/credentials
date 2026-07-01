const smallAlphabets = "abcdefghijklmnopqrstuvwxyz".split("");
const capitalAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "1234567890".split("");
const specialCharacters = ["!", "@", "#", "$", "_", "*"];

export type CharType = "capitalAlphabet" | "smallAlphabet" | "number" | "specialCharacter";

const referenceObj: Record<CharType, string[]> = {
  capitalAlphabet: capitalAlphabets,
  smallAlphabet: smallAlphabets,
  number: numbers,
  specialCharacter: specialCharacters,
};

const getFilledArray = (element: CharType, count: number): CharType[] => {
  if (count < 1) {
    throw new Error("Invalid element count: element count is less than 1");
  }
  return new Array(count).fill(element);
};

export interface PasswordOptions {
  length?: number;
  capitalLetter?: number;
  smallLetter?: number;
  number?: number;
  specialCharacter?: number;
  random?: boolean;
}

export interface UsernameOptions extends PasswordOptions {
  prefix?: string;
}

const defaultPasswordOptions: Required<PasswordOptions> = {
  length: 8,
  capitalLetter: 1,
  smallLetter: 3,
  number: 2,
  specialCharacter: 2,
  random: false,
};

const defaultUsernameOptions: Required<UsernameOptions> = {
  prefix: "",
  length: 6,
  capitalLetter: 1,
  smallLetter: 3,
  number: 2,
  specialCharacter: 0,
  random: false,
};

export const useCredentialGenerator = () => {
  const uniquePassword = (options: PasswordOptions = {}): string => {
    const finalOptions = { ...defaultPasswordOptions, ...options };
    const {
      length,
      capitalLetter,
      smallLetter,
      number,
      specialCharacter,
      random,
    } = finalOptions;

    const totalRequested =
      capitalLetter + smallLetter + number + specialCharacter;

    if (totalRequested > length) {
      throw new Error(
        "Invalid password length: Total character count exceeds the password length."
      );
    }

    let choice: CharType[] = [];
    const availableTypes: CharType[] = [];

    if (capitalLetter > 0) {
      choice.push(...getFilledArray("capitalAlphabet", capitalLetter));
      availableTypes.push("capitalAlphabet");
    }
    if (smallLetter > 0) {
      choice.push(...getFilledArray("smallAlphabet", smallLetter));
      availableTypes.push("smallAlphabet");
    }
    if (number > 0) {
      choice.push(...getFilledArray("number", number));
      availableTypes.push("number");
    }
    if (specialCharacter > 0) {
      choice.push(...getFilledArray("specialCharacter", specialCharacter));
      availableTypes.push("specialCharacter");
    }

    // Fallback if the user asks for 0 of everything but a length > 0
    if (availableTypes.length === 0) {
        availableTypes.push("capitalAlphabet", "smallAlphabet", "number", "specialCharacter");
    }

    while (choice.length < length) {
      choice.push(availableTypes[Math.floor(Math.random() * availableTypes.length)]);
    }

    if (random) {
      choice = choice.sort(() => 0.5 - Math.random());
    }

    let password = "";
    choice.forEach((type) => {
      const ch =
        referenceObj[type][
          Math.floor(Math.random() * referenceObj[type].length)
        ];
      if (ch !== undefined) password += ch;
    });

    return password;
  };

  const uniqueUsername = (options: UsernameOptions = {}): string => {
    const finalOptions = { ...defaultUsernameOptions, ...options };
    const {
      prefix,
      length,
      capitalLetter,
      smallLetter,
      number,
      specialCharacter,
      random,
    } = finalOptions;

    const totalRequested =
      capitalLetter + smallLetter + number + specialCharacter + prefix.length;

    if (totalRequested > length) {
      throw new Error(
        "Invalid username length: Total character count exceeds the username length."
      );
    }

    let choice: CharType[] = [];
    let username = prefix;
    const availableTypes: CharType[] = [];

    if (capitalLetter > 0) {
      choice.push(...getFilledArray("capitalAlphabet", capitalLetter));
      availableTypes.push("capitalAlphabet");
    }
    if (smallLetter > 0) {
      choice.push(...getFilledArray("smallAlphabet", smallLetter));
      availableTypes.push("smallAlphabet");
    }
    if (number > 0) {
      choice.push(...getFilledArray("number", number));
      availableTypes.push("number");
    }
    if (specialCharacter > 0) {
      choice.push(...getFilledArray("specialCharacter", specialCharacter));
      availableTypes.push("specialCharacter");
    }

    // Fallback if the user asks for 0 of everything but a length > 0
    if (availableTypes.length === 0) {
        availableTypes.push("capitalAlphabet", "smallAlphabet", "number", "specialCharacter");
    }

    while (choice.length < length - prefix.length) {
      choice.push(availableTypes[Math.floor(Math.random() * availableTypes.length)]);
    }

    if (random) {
      choice = choice.sort(() => 0.5 - Math.random());
    }

    choice.forEach((type) => {
      const ch =
        referenceObj[type][
          Math.floor(Math.random() * referenceObj[type].length)
        ];
      if (ch !== undefined) username += ch;
    });

    return username;
  };

  // Helper method specifically for the Generator UI that generates a single random character given its type
  const generateCharacter = (type: CharType | 'empty'): string => {
    if (type === 'empty') return '';
    const arr = referenceObj[type];
    if (!arr) return '';
    return arr[Math.floor(Math.random() * arr.length)];
  };

  return {
    uniquePassword,
    uniqueUsername,
    generateCharacter,
  };
};
