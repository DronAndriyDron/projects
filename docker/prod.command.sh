#!/bin/bash
set -e

yarn run db:migration:run

yarn run init:prod

yarn run start:prod
