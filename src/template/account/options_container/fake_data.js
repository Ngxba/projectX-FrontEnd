import { nanoid } from 'nanoid';

function randomDate(start, end)
{
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const headCells = [
  {
    id: 'productName',
    numeric: false,
    disablePadding: true,
    label: 'Product name',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: true,
    label: 'Status',
  },
  {
    id: 'purchaseDate',
    numeric: true,
    disablePadding: false,
    label: 'Purchase date',
  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'Price ($)',
  },
];

export const rows = [
  {
    productId: nanoid(),
    productName: 'Jordan 5 Retro Raging Bulls Red 2021 (GS)',
    urkKey: 'air-jordan-5-retro-raging-bulls-red-2021-gs',
    purchaseDate: randomDate(new Date(2020, 0, 1), new Date()),
    price: 140,
    status: 'Shipping',
  },
  {
    productId: nanoid(),
    productName: 'Jordan 5 Retro Raging Bulls Red 2021 (GS)',
    urkKey: 'air-jordan-5-retro-raging-bulls-red-2021-gs',
    purchaseDate: randomDate(new Date(2020, 0, 1), new Date()),
    price: 140,
    status: 'Shipping',
  },
  {
    productId: nanoid(),
    productName: 'Jordan 5 Retro Raging Bulls Red 2021 (GS)',
    urkKey: 'air-jordan-5-retro-raging-bulls-red-2021-gs',
    purchaseDate: randomDate(new Date(2020, 0, 1), new Date()),
    price: 140,
    status: 'Shipping',
  },
  {
    productId: nanoid(),
    productName: 'Jordan 5 Retro Raging Bulls Red 2021 (GS)',
    urkKey: 'air-jordan-5-retro-raging-bulls-red-2021-gs',
    purchaseDate: randomDate(new Date(2020, 0, 1), new Date()),
    price: 140,
    status: 'Shipping',
  },
  {
    productId: nanoid(),
    productName: 'Jordan 5 Retro Raging Bulls Red 2021 (GS)',
    urkKey: 'air-jordan-5-retro-raging-bulls-red-2021-gs',
    purchaseDate: randomDate(new Date(2020, 0, 1), new Date()),
    price: 140,
    status: 'Shipping',
  },
  {
    productId: nanoid(),
    productName: 'Jordan 5 Retro Raging Bulls Red 2021 (GS)',
    urkKey: 'air-jordan-5-retro-raging-bulls-red-2021-gs',
    purchaseDate: randomDate(new Date(2020, 0, 1), new Date()),
    price: 140,
    status: 'Shipping',
  },
  {
    productId: nanoid(),
    productName: 'Jordan 5 Retro Raging Bulls Red 2021 (GS)',
    urkKey: 'air-jordan-5-retro-raging-bulls-red-2021-gs',
    purchaseDate: randomDate(new Date(2020, 0, 1), new Date()),
    price: 140,
    status: 'Shipping',
  },
  {
    productId: nanoid(),
    productName: 'Jordan 5 Retro Raging Bulls Red 2021 (GS)',
    urkKey: 'air-jordan-5-retro-raging-bulls-red-2021-gs',
    purchaseDate: randomDate(new Date(2020, 0, 1), new Date()),
    price: 140,
    status: 'Shipping',
  },
  {
    productId: nanoid(),
    productName: 'Jordan 5 Retro Raging Bulls Red 2021 (GS)',
    urkKey: 'air-jordan-5-retro-raging-bulls-red-2021-gs',
    purchaseDate: randomDate(new Date(2020, 0, 1), new Date()),
    price: 140,
    status: 'Shipping',
  },
  {
    productId: nanoid(),
    productName: 'Jordan 5 Retro Raging Bulls Red 2021 (GS)',
    urkKey: 'air-jordan-5-retro-raging-bulls-red-2021-gs',
    purchaseDate: randomDate(new Date(2020, 0, 1), new Date()),
    price: 140,
    status: 'Shipping',
  },

  {
    productId: nanoid(),
    productName: 'Jordan 9 Retro Change The World (W)\n',
    urkKey: 'air-jordan-9-retro-change-the-world-w',
    purchaseDate: randomDate(new Date(2020, 0, 1), new Date()),
    price: 190,
    status: 'Received',
  },
  {
    productId: nanoid(),
    productName: 'Jordan 9 Retro Change The World (W)\n',
    urkKey: 'air-jordan-9-retro-change-the-world-w',
    purchaseDate: randomDate(new Date(2020, 0, 1), new Date()),
    price: 190,
    status: 'Received',
  },
  {
    productId: nanoid(),
    productName: 'Jordan 9 Retro Change The World (W)\n',
    urkKey: 'air-jordan-9-retro-change-the-world-w',
    purchaseDate: randomDate(new Date(2020, 0, 1), new Date()),
    price: 190,
    status: 'Received',
  },
  {
    productId: nanoid(),
    productName: 'Jordan 9 Retro Change The World (W)\n',
    urkKey: 'air-jordan-9-retro-change-the-world-w',
    purchaseDate: randomDate(new Date(2020, 0, 1), new Date()),
    price: 190,
    status: 'Received',
  },
  {
    productId: nanoid(),
    productName: 'Jordan 9 Retro Change The World (W)\n',
    urkKey: 'air-jordan-9-retro-change-the-world-w',
    purchaseDate: randomDate(new Date(2020, 0, 1), new Date()),
    price: 190,
    status: 'Received',
  },
  {
    productId: nanoid(),
    productName: 'Jordan 9 Retro Change The World (W)\n',
    urkKey: 'air-jordan-9-retro-change-the-world-w',
    purchaseDate: randomDate(new Date(2020, 0, 1), new Date()),
    price: 190,
    status: 'Received',
  },
];
