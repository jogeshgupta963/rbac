import bcrypt from "bcrypt";

class Hash {
    async hashString(stringToHash, rounds = 10) {
        const salt = await bcrypt.genSalt(rounds);
        const hashedString = await bcrypt.hash(stringToHash, salt);
        return hashedString;
    }
    async compareHash(hashedString, stringToCompare) {
        const isMatch = await bcrypt.compare(stringToCompare, hashedString);
        return isMatch;
    }
}
export const hash = new Hash();
