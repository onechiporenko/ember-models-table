#!/bin/bash

yarn run ember:reset
yarn run test:cov:$1
mv coverage/lcov.info lcov-$1.info
rm -rf coverage
