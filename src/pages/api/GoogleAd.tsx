import React from 'react';
declare const window: any;

export default class GoogleAd extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-6169839016655974'
          data-adtest="on"
          data-ad-slot=''
          data-ad-format='auto' />
    );
  }
}