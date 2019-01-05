#!/bin/sh
# Install a Hugo, https://gohugo.io/
#
# You can either add this here, or configure them on the environment tab of your
# project settings.
HUGO_VERSION="0.25.1"
HUGO_DIR=${HUGO_DIR:="$HOME/hugo_${HUGO_VERSION}_linux_amd64"}

set -e
CACHED_DOWNLOAD="${HOME}/cache/hugo_${HUGO_VERSION}_linux_amd64.tar.gz"

mkdir -p "${HUGO_DIR}"
wget --continue --output-document "${CACHED_DOWNLOAD}" "https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz"
tar -xaf "${CACHED_DOWNLOAD}" --directory "${HUGO_DIR}"
ln -s "${HUGO_DIR}/hugo" "${HOME}/bin/hugo"

# check that everything worked
hugo version
