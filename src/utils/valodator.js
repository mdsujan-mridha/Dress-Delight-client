
import { isValidEmail } from "6pp";

export const userEmailValidator = (email) => {
    if (!isValidEmail(email))
        return { isValidEmail: false, errorMessage: "Email is Invalid" }
}