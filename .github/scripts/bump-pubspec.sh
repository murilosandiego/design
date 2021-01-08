#!/bin/bash
set -e

# Get git status for changes
git status

# Prepare Flutter pubspec file to commit
git add ./packages/flutter-styles/pubspec.yaml

# Commit pubspec file
git commit --allow-empty -m "chore(flutter-styles): bump package version [skip ci]"

# Push up-to-date pubspec file
git push origin