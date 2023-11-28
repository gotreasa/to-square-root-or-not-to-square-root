import { versionFromGitTag } from 'absolute-version';
import { Verifier } from '@pact-foundation/pact';
import branchName from 'current-git-branch';
import server from '../../app';
import { LogLevel } from '@pact-foundation/pact-core';

const baseUrl = `http://localhost:${process.env.SERVER_PORT || 9080}`;

const providerOptions = {
  logLevel: 'INFO' as LogLevel,
  providerBaseUrl: baseUrl,
  provider: 'to-square-root-or-not-to-square-root_app',
  providerBranch: `${branchName()}`,
  providerVersion: versionFromGitTag({
    tagGlob: '[0-9]*',
  }),
  matchingRules: {
    body: {},
  },
  stateHandlers: {},
};

const pactUrl =
  './pact/pacts/to-square-root-or-not-to-square-root_client-to-square-root-or-not-to-square-root_app.json';

if (process.env.CI) {
  Object.assign(providerOptions, {
    pactBrokerUrl: 'https://gotreasa.pactflow.io/',
    pactUrls: [pactUrl],
    publishVerificationResult: true,
  });
} else {
  Object.assign(providerOptions, {
    pactUrls: [pactUrl],
  });
}

describe('To square(root) or not to square(root) Provider', () => {
  afterAll(async () => {
    await server.close();
  });

  test('tests To square(root) or not to square(root) api routes', async () => {
    const output: string = await new Verifier(providerOptions).verifyProvider();
    console.log(output);
    expect(output).toContain('finished: 0');
  });
});
