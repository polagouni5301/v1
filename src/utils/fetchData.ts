import type { Guide } from '../types';

export const fetchGuideData = async (): Promise<Guide[]> => {
  try {
    const response = await fetch('./data/tickets.json');
    if (!response.ok) {
      throw new Error('Failed to fetch guide data');
    }
    const jsonResponse = await response.json();
    console.log('Fetched Data:', jsonResponse);

    return jsonResponse;

  } catch (error) {
    console.error('Error fetching guide data:', error);
    return [];
  }
};