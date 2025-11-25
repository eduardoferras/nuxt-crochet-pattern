#!/bin/sh
set -e

WORKDIR=/workspace
UID_HOST=$(stat -c "%u" $WORKDIR)
GID_HOST=$(stat -c "%g" $WORKDIR)

USERNAME=node

if ! getent group ${GID_HOST} >/dev/null; then
  addgroup -g ${GID_HOST} hostgroup
fi

if ! getent passwd ${UID_HOST} >/dev/null; then
  adduser -u ${UID_HOST} -G ${GID_HOST} -D ${USERNAME}
fi

exec su-exec ${UID_HOST}:${GID_HOST} "$@"
