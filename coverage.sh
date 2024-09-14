#!/bin/bash

pnpm run ember:reset
pnpm run test:cov:$1
mv coverage/lcov.info lcov-$1.info
rm -rf coverage
