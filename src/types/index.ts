export interface Guide {
  Jomax: string;             // Name or ID of the guide
  TicketC:  number[];         // Array of ticket numbers assigned to the guide
  TicketAssigned: string;    // Comma-separated string of ticket numbers (for backward compatibility or display)
}

export interface Winner {
  guide: Guide;              // The guide who won
  ticket: number;            // Ticket number associated with the win
  prize: 'Pulsar Bike' | 'Jupiter Scooty'|string; // Prize won
}


// export interface Guide {
//   Jomax: string;       // Name or ID of the guide
//   TicketC: number;     // Number of tickets (count)
//   TicketAssigned: string;  // Comma-separated string of ticket numbers
// }

// export interface Winner {
//   guide: Guide;       // The guide who won
//   ticket: number;     // Ticket number associated with the win
//   prize: 'Pulsar Bike' | 'Jupiter Scooty'; // Prize won
// }




// export interface Guide {
//   Jomax: string;
//   TicketC: number[];
// }

// export interface Winner {
//   guide: Guide;
//   ticket: number;
//   prize: 'Pulsar Bike' | 'Jupiter Scooty';
// }