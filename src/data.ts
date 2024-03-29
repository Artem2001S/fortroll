export interface Case {
  title: string;
  reward: number;
  code: string;
  price: number;
}

export const cases: Case[] = [
  {
    title: '1 000 V-BUCKS',
    reward: 1000,
    code: 'XLX9-MJAR-PLAS-5LTB',
    price: 299,
  },
  {
    title: '2 800 V-BUCKS',
    reward: 2800,
    code: 'XLX9-MJAR-PLAS-5LTB',
    price: 499,

  },
  {
    title: '5 000 V-BUCKS',
    code: 'XLX9-MJAR-PLAS-5LTB',
    reward: 5000,
    price: 599,

  },
  {
    title: '13 500 V-BUCKS',
    code: 'XLX9-MJAR-PLAS-5LTB',
    reward: 13500,
    price: 799,
  },
];
