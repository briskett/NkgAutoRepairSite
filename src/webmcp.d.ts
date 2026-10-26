// WebMCP declarative attributes (Chrome origin trial). React passes unknown lowercase
// attributes through to the DOM; this file only keeps the editor's type checker quiet.
import 'react';

declare module 'react' {
    interface FormHTMLAttributes<T> {
        toolname?: string;
        tooldescription?: string;
    }
    interface InputHTMLAttributes<T> {
        toolparamdescription?: string;
    }
    interface TextareaHTMLAttributes<T> {
        toolparamdescription?: string;
    }
}
