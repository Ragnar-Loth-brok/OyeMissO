interface Chunk {
  time: number | null;
  likes: number | null;
  comments: number | null;
  key: string;
  name: string;
  avatar: string;
  imageUrl: string;
  title: string;
  text: string;
}

const data: Chunk[] = [
  {
    time: 12,
    likes: 250,
    comments: 10,
    key: '1',
    name: 'Ragnar Loth',
    avatar:
      'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
    imageUrl:
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title:
      'Ahead of Supertech twin towers demolition, stray dogs shifted to shelters run by NGOs',
    text: 'Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. \n \nPretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut.',
  },
  {
    time: 5,
    likes: 150,
    comments: 20,
    key: '2',
    name: 'Floki',
    avatar:
      'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
    imageUrl: '',
    title: 'Why the Social Sector Needs an Impact Registry',
    text: 'Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. \n \nPretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut.',
  },
  {
    time: 9,
    likes: 420,
    comments: 12,
    key: '3',
    name: 'Lagertha',
    avatar:
      'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
    imageUrl:
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title: 'Reading List: Bridging Divides to Create Social Change',
    text: 'Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. \n \nPretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut.',
  },
  {
    time: 12,
    likes: 43,
    comments: 2,
    key: '4',
    name: 'Rollo',
    avatar:
      'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg',
    imageUrl:
      'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title: 'Combatting the Psychology of Bias',
    text: 'Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. \n \nPretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut. Pretium vulputate sapien nec sagittis. Accumsan jgkjtortor  jakfposuere ac ut.',
  },
];

export default data;
