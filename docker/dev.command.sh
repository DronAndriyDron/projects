#!/bin/bash
set -e

yarn run db:migration:run

node dist/console.js init

node dist/main
