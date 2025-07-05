ARG NODE_VERSION=22.16.0
ARG LINUX_DISTRO=alpine3.22

FROM node:${NODE_VERSION}-${LINUX_DISTRO} AS base

RUN apk add --no-cache libc6-compat shadow su-exec bash coreutils

COPY .devcontainer/entrypoint.sh /usr/local/bin/entrypoint.sh

RUN chmod +x /usr/local/bin/entrypoint.sh

WORKDIR /workspace

USER root
