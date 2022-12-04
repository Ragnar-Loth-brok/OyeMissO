import React from 'react';
import CommentComponent from './CommentComponent';

export default function Reply(props: {data: any}) {

  return <CommentComponent data={props.data} />;
}
