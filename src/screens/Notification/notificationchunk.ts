interface Chunk {
  key: string;
  message: string;
  avatarUri: string | null;
  iconType: string | null;
  timeSpan: string;
  likes: number | null;
  comments: number | null;
}

const data: Chunk[] = [
  {
    key: '1',
    message: 'Samsi commented on your post "Congratulations".',
    avatarUri:
      'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
    timeSpan: '15m',
    iconType: null,
    likes: 300,
    comments: 12,
  },
  {
    key: '2',
    message: 'Your account is activated',
    avatarUri: null,
    timeSpan: '2h',
    iconType: 'account',
    likes: null,
    comments: null,
  },
  {
    key: '3',
    message: 'Robert family and 7 others are interating with your post.',
    avatarUri:
      'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80',
    timeSpan: '15h',
    iconType: null,
    likes: 156,
    comments: 25,
  },
  {
    key: '4',
    message: '250 comments and 1000 likes are on your post. tap to see!',
    avatarUri: null,
    timeSpan: '2d',
    iconType: 'bell',
    likes: 353,
    comments: 17,
  },
  {
    key: '5',
    message: 'Jack and 3 other accepted your subscribe request',
    avatarUri:
      'https://media.istockphoto.com/photos/friends-toasting-at-the-party-for-the-new-year-picture-id890182894?s=612x612',
    timeSpan: '3d',
    iconType: null,
    likes: null,
    comments: null,
  },
  //   {
  //     key: '6',
  //     message: 'Smith K',
  //     avatarUri:
  //       'https://media.istockphoto.com/photos/asian-man-talking-online-on-video-call-at-home-in-living-room-or-in-picture-id1355193592?s=612x612',
  //     timeSpan: '4h',
  //     iconType: null,
  //     likes: 98,
  //     comments: 250,
  //   },
  //   {
  //     key: '7',
  //     message: 'Sabor toe',
  //     avatarUri:
  //       'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
  //     timeSpan: '39m',
  //     iconType: null,
  //     likes: 780,
  //     comments: 250,
  //   },
];

export default data;
