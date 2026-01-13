#!/bin/bash

filepath="/etc/secrets/file-preview-test/test.txt"

echo "Worker starting..."

while true; do
    echo "Worker running at $(date)"

    file_content=$(cat $filepath 2>/dev/null)

    echo "File content: $file_content"

    sleep 5
done