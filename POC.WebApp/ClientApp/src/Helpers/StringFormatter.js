
export default function toUpperFirstLetter(text) {
    if (text) {
        return text.charAt(0).toUpperCase() + text.slice(1, text.length);
    }
};