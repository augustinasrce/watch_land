#!/bin/bash

cur="$(cd "$(dirname "$0")" && pwd)"

cd "$cur/local"
if [[ "$*" == *"build"* ]]; then
  docker-compose build watchland
else
  docker-compose up watchland
fi