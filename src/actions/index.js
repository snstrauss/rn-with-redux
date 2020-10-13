export function selectLibrary(selectedId) {
    return {
        type: 'select',
        payload: selectedId
    }
}