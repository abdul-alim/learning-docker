#!/bin/bash
# shellcheck disable=SC2164
cd "$(dirname "$0")"
git reset --hard HEAD
git pull
make up-prod
