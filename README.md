# README

[![License: AGPL](https://img.shields.io/badge/License-AGPL-blue.svg)](https://github.com/gotreasa/to-square-root-or-not-to-square-root/blob/main/LICENSE)
[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_to-square-root-or-not-to-square-root&metric=alert_status)](https://sonarcloud.io/dashboard?id=gotreasa_to-square-root-or-not-to-square-root)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_to-square-root-or-not-to-square-root&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=gotreasa_to-square-root-or-not-to-square-root)
[![Known Vulnerabilities](https://snyk.io/test/github/gotreasa/to-square-root-or-not-to-square-root/badge.svg)](https://snyk.io/test/github/gotreasa/to-square-root-or-not-to-square-root)
[![Build Status](https://github.com/gotreasa/to-square-root-or-not-to-square-root/actions/workflows/pipeline.yml/badge.svg)](https://github.com/gotreasa/to-square-root-or-not-to-square-root/actions/workflows/pipeline.yml)
[![OpenAPI Validation](https://validator.swagger.io/validator?url=https://raw.githubusercontent.com/gotreasa/to-square-root-or-not-to-square-root/main/openapi.yaml)](https://editor.swagger.io/?url=https://raw.githubusercontent.com/gotreasa/to-square-root-or-not-to-square-root/main/openapi.yaml)
[![Can I Deploy main to test](https://gotreasa.pactflow.io/pacticipants/to-square-root-or-not-to-square-root_app/branches/main/latest-version/can-i-deploy/to-environment/test/badge)](https://gotreasa.pactflow.io/hal-browser/browser.html#https://gotreasa.pactflow.io/pacticipants/to-square-root-or-not-to-square-root_app/branches/main/latest-version/can-i-deploy/to-environment/test/badge)

To square(root) or not to square(root) repository

## Contributing

Please consult [CONTRIBUTING](./CONTRIBUTING.md) for guidelines on contributing to this project.

## Details

Write a method, that will get an integer array as a parameter and will process every number from this array.

Return a new array processing every number of the input array like this:

If the number has an integer square root, take this, otherwise square the number.

Example

```
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
```

Notes
The input array will always contain only positive numbers, and will never be empty or null.
