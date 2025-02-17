const errorMessages = {
    'auth/email-already-in-use': 'The email address is already in use by another account.',
    'auth/invalid-email': 'The email address is not valid.',
    'auth/operation-not-allowed': 'Email/password accounts are not enabled.',
    'auth/weak-password': 'The password is too weak.',
    'auth/user-disabled': 'The user account has been disabled by an administrator.',
    'auth/user-not-found': 'There is no user record corresponding to this identifier. The user may have been deleted.',
    'auth/wrong-password': 'The password is invalid or the user does not have a password.',
    // Add more error codes and messages as needed
};

export function getErrorMessage(errorCode, errorMessage) {
    return errorMessages[errorCode] || errorMessage;
}