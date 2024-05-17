import {CharacterType} from '../store/characters/types';

interface GenderCounts {
  male: number;
  female: number;
  other: number;
}

export const parseCountGanders = (
  characters: CharacterType[],
): GenderCounts => {
  const counts: GenderCounts = {
    male: 0,
    female: 0,
    other: 0,
  };

  characters.forEach(character => {
    if (character.gender.toLowerCase() === 'male') {
      counts.male += 1;
    } else if (character.gender.toLowerCase() === 'female') {
      counts.female += 1;
    } else {
      counts.other += 1;
    }
  });

  return counts;
};
