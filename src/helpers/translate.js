export function translate(dictionary, product) {
    for (const [key, value] of Object.entries(dictionary)) {
        if(product === key){
            return value.ua;
        }
    }
}