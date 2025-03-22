// eslint-disable-next-line max-classes-per-file
export function errorFactory(type) {
    return class GenericError extends Error {
        constructor(message) {
            super();
            this.type    = type;
            this.message = message;
        }

        toString() {
            return `${this.type}: ${this.message}`;
        }
    };
}

export class APIError extends errorFactory('APIError') {}

export class ConstructionError extends errorFactory('ConstructionError') {}

// Example usage of the error classes
export class ValidationError extends errorFactory('ValidationError') {}

export class AuthenticationError extends errorFactory('AuthenticationError') {}

export class NotFoundError extends errorFactory('NotFoundError') {}
