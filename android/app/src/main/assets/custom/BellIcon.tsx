import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Bell = (props: {color: string | null; scale: number | null}) => (
  <Svg
    width={21}
    height={21}
    fill="none"
    style={{transform: [{scale: props.scale || 1}]}}>
    <Path
      d="m.9 16.645.004-.013.025-.084c.013-.041.024-.079.034-.12.12-.501.4-.892.758-1.237l.048-.046c.414-.4.825-.796 1.184-1.233.866-1.059 1.351-2.305 1.644-3.64.288-1.31.337-2.64.373-3.985.067-2.548 1.973-4.792 4.471-5.28L.9 16.645Zm0 0v.014-.014Zm19.302.168a2.208 2.208 0 0 0-.668-1.475c-.121-.12-.25-.238-.376-.354-.085-.079-.17-.157-.251-.234a7.752 7.752 0 0 1-1.327-1.666l-.086.051 2.608 3.684m.1-.006-.1.006m.1-.006-.1.006m.1-.006c.016.26-.041.478-.186.631-.144.153-.36.224-.62.225m.706-.85c.031.485-.218.748-.707.75m0 .1v-.1m0 .1v-.1m0 .1v-.1m-1.151-1.452c-1.56-1.403-2.56-3.138-3.064-5.164-.338-1.363-.457-2.748-.479-4.142m3.543 9.306L14.801 6.81m3.443 9.307.104.095H2.76c1.73-1.52 2.783-3.429 3.261-5.665.25-1.16.36-2.335.375-3.517.009-.7.024-1.378.29-2.015.614-1.479 1.7-2.382 3.281-2.614 2.191-.322 4.183 1.091 4.638 3.262m3.639 10.454-3.54-10.474M14.7 6.81l.1-.001m-.1.001.1-.001m-.1.001c-.006-.39-.019-.78-.096-1.148m.196 1.147c-.006-.39-.018-.788-.098-1.167m-.098.02.098-.02m-.098.02.098-.02m-1.057 12.026.022-.071-.095-.03v.1h.073Zm-6.17 0h.08v-.1l-.098.023.018.078Zm-5.656.006v-.1.1Zm8.827.974c-.714.032-1.403-.395-1.625-.967h3.063c-.073.215-.246.431-.481.607a1.788 1.788 0 0 1-.957.36Z"
      fill={props.color || '#A7AFB8'}
      stroke={props.color || '#A7AFB8'}
      strokeWidth={0.2}
    />
  </Svg>
);

export default Bell;
