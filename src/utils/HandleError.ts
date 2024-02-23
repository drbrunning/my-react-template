// utils/handleError.ts
import { AxiosError } from 'axios';

// Type guard for Axios errors
const isAxiosError = (error: unknown): error is AxiosError => {
    return (error as AxiosError).isAxiosError === true;
};

interface ErrorResponse {
    message?: string;
}

/**
 * Extracts a user-friendly error message from an error object
 * and optionally displays it using react-hot-toast.
 *
 * @param error The error object to parse.
 * @param defaultMessage A default message to use if the error message cannot be extracted.
 * @param showToast If true, display the error message using react-hot-toast.
 * @returns The extracted error message.
 */
export const extractErrorMessage = (
    error: unknown,
    defaultMessage = 'An unknown error occurred'
): string => {
    if (isAxiosError(error)) {
        // Handle Axios errors
        const responseData: unknown = error.response?.data;
        if (typeof responseData === 'string') {
            return responseData;
        } else if (typeof responseData === 'object' && responseData !== null) {
            const message = (responseData as ErrorResponse).message;
            return message ?? defaultMessage;
        }
    } else if (error instanceof Error) {
        // Handle standard JS errors
        return error.message;
    }
    return defaultMessage;
};
