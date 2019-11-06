import React from 'react';
import PropTypes from 'prop-types';

import { AudioCaption } from './audio-caption';
import { VideoCaption } from './video-caption';
import { VideoDescription } from './video-description';

const A11yAudioVideo = ({ lighthouse }) => {
  // Get list of all tests for group
  const group = lighthouse.categories.accessibility.auditRefs.filter(
    auditRef => auditRef.group === 'a11y-audio-video'
  );
  const auditsFromGroup = group.map(test => test.id);

  // Check if any of the audits fail
  const audits = Object.values(lighthouse.audits);
  const matchingAudits = audits.filter(audit =>
    auditsFromGroup.includes(audit.id)
  );

  // If tests fail, display description
  const removePassed = matchingAudits.filter(i => i.score !== 1);
  const failedAudits = removePassed.filter(i => i.score !== null);

  return (
    <>
      {failedAudits.length > 0 && (
        <>
          <hr className="mt-8" />
          <h4 id="a11y-audio-video" className="mt-8 text-xl">
            <span className="font-black tracking-wide uppercase">
              Audio and video
            </span>{' '}
            — These are opportunities to provide alternative content for audio
            and video. This may improve the experience for users with hearing or
            vision impairments.
          </h4>
          <ul>
            <AudioCaption lighthouse={lighthouse} />
            <VideoCaption lighthouse={lighthouse} />
            <VideoDescription lighthouse={lighthouse} />
          </ul>
        </>
      )}
    </>
  );
};

A11yAudioVideo.propTypes = {
  lighthouse: PropTypes.object,
};

export default A11yAudioVideo;
