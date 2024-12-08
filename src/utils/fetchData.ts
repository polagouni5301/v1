import type { Guide } from '../types';

export const fetchGuideData = async (): Promise<Guide[]> => {
  try {
    const response = await fetch('/tickets.json');
    if (!response.ok) {
      throw new Error('Failed to fetch guide data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching guide data:', error);
    return [];
  }
};