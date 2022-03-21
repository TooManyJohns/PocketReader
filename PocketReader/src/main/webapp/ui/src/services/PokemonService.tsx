
export async function getAllPokemon() {

    const response = await fetch('/api/pokemon');
    return await response.json();
}