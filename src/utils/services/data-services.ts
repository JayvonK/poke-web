import { PokeData } from "@/interfaces/PokeData";
import { PokeEvolution } from "@/interfaces/PokeEvolution";
import { PokeSpecies } from "@/interfaces/PokeSpecies";

const url = 'https://pokeapi.co/api/v2/';

export const grabPokemonData = async (pokeName: string | number) => {
  const promise = await fetch(url + 'pokemon/' + pokeName);
  const data: PokeData = await promise.json();
  return data;
}

export const grabPokeEveloution = async (pokeId: number) => {
  const promise = await fetch(url + 'evolution-chain/' + pokeId);
  const data: PokeEvolution = await promise.json();
  return data;
}

export const grabPokemonSpecies = async (pokemonName: string | number) => {
  const promise = await fetch(url + 'pokemon-species/' + pokemonName);
  const data: PokeSpecies = await promise.json();
  return data;
}