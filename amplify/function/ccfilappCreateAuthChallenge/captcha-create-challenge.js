/**
 * @type {import('@types/aws-lambda').CreateAuthChallengeTriggerHandler}
 */
export async function handler(event) {
  if (event.request.session.length === 2 && event.request.challengeName === 'CUSTOM_CHALLENGE') {
    event.response.publicChallengeParameters = { trigger: 'true' };
    event.response.privateChallengeParameters = { answer: '' };
    event.response.challengeMetadata = 'CAPTCHA_CHALLENGE';
  }
  return event;
};
