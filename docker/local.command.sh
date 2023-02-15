#!/bin/bash

yarn install

yarn run db:migration:run

yarn run execute init

yarn run start:debug