
export function isStringValue(valor){
    if(!valor || typeof valor!=='string'){
        throw new Error(`${valor} invalido debe ser string`)
    }
}