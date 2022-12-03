interface Chunk {
  id: string;
  name: string;
  avatarUri: string;
  timeSpan: string;
}

const data: Chunk[] = [
  {
    id: '1',
    name: 'John Doe',
    avatarUri:
      'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
    timeSpan: '2w',
  },
  {
    id: '2',
    name: 'Michelle Sufi',
    avatarUri:
      'https://plus.unsplash.com/premium_photo-1661265932963-582ff8585634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    timeSpan: '7h',
  },
  {
    id: '3',
    name: 'Tom Kruis',
    avatarUri:
      'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80',
    timeSpan: '2d',
  },
  {
    id: '4',
    name: 'Alex Mora Moa',
    avatarUri:
      'https://media.istockphoto.com/photos/smiling-man-takes-happy-selfie-outdoors-picture-id893341500?s=612x612',
    timeSpan: '1m',
  },
  {
    id: '5',
    name: 'Alecia Micuk',
    avatarUri:
      'https://media.istockphoto.com/photos/friends-toasting-at-the-party-for-the-new-year-picture-id890182894?s=612x612',
    timeSpan: '3d',
  },
  {
    id: '6',
    name: 'Smith K',
    avatarUri:
      'https://media.istockphoto.com/photos/asian-man-talking-online-on-video-call-at-home-in-living-room-or-in-picture-id1355193592?s=612x612',
    timeSpan: '4h',
  },
  {
    id: '7',
    name: 'Sabor toe',
    avatarUri:
      'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
    timeSpan: '39m',
  },
];

export default data;
