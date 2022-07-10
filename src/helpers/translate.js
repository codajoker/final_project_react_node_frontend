import { Translator, Translate } from 'react-auto-translate';

const GOOGLE_API_KEY = "AIzaSyD36deI1gECgEUtXlCGNjJxLmYWou4803w";

export function translate(text) {
    return (
        <Translator
            from='ru'
            to='uk'
            googleApiKey={GOOGLE_API_KEY}
        >
            <Translate>{text}</Translate>
        </Translator>
    );
}